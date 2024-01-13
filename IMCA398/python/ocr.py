# # PYTESSERACT TESTS
# from https://pypi.org/project/pytesseract/ ; https://github.com/madmaze/pytesseract ; https://builtin.com/data-science/python-ocr

# SET-UP
# in venv
# brew install Tesseract
# pip install pyTesseract
# pip install numpy
# pip install opencv-python

from PIL import Image
import pytesseract
import numpy as np

# # BASIC FUNCTIONALITY
# print(pytesseract.image_to_string(Image.open('ocr/test.jpeg')))
# # RESULTS: "Tesseract sample"

# # pytesseract.image_to_string works on BOTH image & numpy array
# print(pytesseract.image_to_string(Image.open('ocr/test.jpeg')))
# print(pytesseract.image_to_string(np.array(Image.open('ocr/test.jpeg'))))

# img = Image.open('ocr/test2.jpeg')
# img_array = np.array(img)
# print(img)
# print(img_array)

# # VERBOSE
# filename = 'ocr/test.jpeg'
# img = Image.open(filename)
# text = pytesseract.image_to_string(img)
# print("result:" + text)
# # RESULTS: "result:Tesseract sample"

# filename1 = 'ocr/test.jpeg'
# img1 = np.array(Image.open(filename1))
# text = pytesseract.image_to_string(img1)
# print("result:" + text)
# # RESULTS: "result:Tesseract sample"

# # NOISY
# filename2 = 'ocr/test2.jpeg'
# img2 = np.array(Image.open(filename2))
# text = pytesseract.image_to_string(img2)
# print("result:" + text)
# # RESULTS: "result:"

# # DENOISING
# import cv2 # ERROR on `import cv2` w/ v4.7 --> `pip install opencv-python==4.6.0.66` (https://stackoverflow.com/questions/75043231/upgrade-to-opencv-python-4-7-causes-import-error)
# img = np.array(Image.open('ocr/test2.jpeg'))
# norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)

# # # DENOISED IMAGE
# import cv2
# img = np.array(Image.open('ocr/test2.jpeg'))
# norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)
# text = pytesseract.image_to_string(img)
# print("result:" + text)
# # RESULTS: "result:Tesseract sample"

# # COMPARATIVE NOISY/DENOISED
# import cv2
# imgFile = Image.open('ocr/test2.jpeg')
# imgFile.show()
# img = np.array(imgFile)
# # unprocessed
# text = pytesseract.image_to_string(img)
# print("result1:" + text)
# # processed
# norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)
# imgClean = Image.fromarray(img) # from https://www.geeksforgeeks.org/convert-opencv-image-to-pil-image-in-python/?ref=rp
# imgClean.show()
# text = pytesseract.image_to_string(img)
# print("result2:" + text)

# # COMPARATIVE TEST
# import cv2
# imgFile = Image.open('ocr/test3.png')
# imgFile.show()
# img = np.array(imgFile)
# # unprocessed
# text = pytesseract.image_to_string(img)
# print("result1:" + text)
# # processed
# norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)
# imgClean = Image.fromarray(img) # from https://www.geeksforgeeks.org/convert-opencv-image-to-pil-image-in-python/?ref=rp
# imgClean.show()
# text = pytesseract.image_to_string(img)
# print("result2:" + text)

# # FIELD TEST
# print(pytesseract.image_to_string(np.array(Image.open('ocr/test3.png'))))

# # TYPEWRITTEN TEXT TEST
# print(pytesseract.image_to_string(np.array(Image.open('ocr/test4.jpg'))))

# # TYPEWRITTEN TEXT DENOISED TEST
# import cv2
# # # Photo raw
# # imgFile = Image.open('ocr/test4.jpg')
# # # Photo cropped
# # imgFile = Image.open('ocr/test5.jpg')
# # # Scan raw
# # imgFile = Image.open('ocr/test6.jpeg')
# # Scan cropped
# imgFile = Image.open('ocr/test7.jpeg')
# imgFile.show()
# img = np.array(imgFile)
# # unprocessed
# text = pytesseract.image_to_string(img)
# print("result1:" + text)
# # processed
# norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)
# imgClean = Image.fromarray(img)
# imgClean.show()
# text = pytesseract.image_to_string(img)
# print("result2:" + text)