""" Image process module

Reference:
  Extracting text from images with Tesseract OCR, OpenCV, and Python
  https://www.opcito.com/blogs/extracting-text-from-images-with-tesseract-ocr-opencv-and-python

Command:
  $ python -m venv venv
  $ venv\Script\activate
  $ pip install -r requirements.txt
  $ python image_process_v1.py

"""
import pandas as pd
import cv2
import pytesseract
import regex as re
import requests
import json
import sys
from symspellpy import SymSpell, Verbosity
from hangul_utils import split_syllable_char, split_syllables, join_jamos
#from flask import Flask
#app = Flask(__name__)


#es = Elasticsearch('localhost:9200')

#es = Elasticsearch(
#        ['HOST'],
#        http_auth = ('USER', 'PASSWORD')
#        )

def convert_image(image_path):
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, threshold_img = cv2.threshold(gray, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY)
    return threshold_img

def feed_image_to_tess(threshold_img):
    custom_config = r'--oem 3 --psm 6'

    details = pytesseract.image_to_data(
        threshold_img,
        output_type=pytesseract.Output.DICT,
        config=custom_config,
        lang='kor+eng'
    )
    return details

def extract_words(details):
    parse_text = ""
    parse_text+="{"
    word_list = []
    last_word = ''
    i=0
    for word in details['text']:
        if word != '':
            word_list.append(word)
            last_word = word
        #print(word)
        if (last_word != '' and word == '') or (word == details['text'][-1]):
            parsed = ''.join(word_list)
            match2 = re.findall(r'([0-9]+)', parsed, re.I)
            if match2:
                if (i != 0): parse_text += ", "
                parse_text+='"'+str(i)+'": '+match2[0]
                i+=1
                word_list = []
    parse_text+="}"
    return parse_text

def highlight_with_rectangle(details, threshold_img):
    total_boxes = len(details['text'])

    for sequence_number in range(total_boxes):
        trans_conf = int(float(details['conf'][sequence_number]))
        if trans_conf > 30:
            (x, y, w, h) = (
            details['left'][sequence_number], details['top'][sequence_number], details['width'][sequence_number],
            details['height'][sequence_number])
            threshold_img = cv2.rectangle(threshold_img, (x, y), (x + w, y + h), (0, 255, 0), 1)

    display_image(threshold_img)

def display_image(threshold_img):
    cv2.imshow('captured text', threshold_img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


def main(img_path):

    threshold_img = convert_image(img_path)

    details = feed_image_to_tess(threshold_img)
    parse_text = extract_words(details)
    #print(details['text'])
    
    #이게 전달됨
    #print(f"Parsed text: {parse_text}")
    print(parse_text)


    #save = pd.DataFrame(parse_text)
    #save.to_csv("ocr/justtest.csv", header=False, index=False)

    # highlight_with_rectangle(details, threshold_img)

if __name__ == "__main__":
    main(sys.argv[1])
