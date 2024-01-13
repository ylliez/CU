
# from urllib.request import urlretrieve
# url = "https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png"
# urlretrieve(url, "/tmp/out.png")
# background = Image.open("/tmp/out.png")
# # ERR: SSL: CERTIFICATE_VERIFY_FAILED

# import urllib.request, base64
# url = "https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png"
# request = urllib.request(url)
# request.add_header("Authorization", "Token b590de6e35d35db67acdeee0633d98708e705124")   
# result = urllib.urlopen(request)
# # ERR: TypeError: 'module' object is not callable

# from urllib.request import urlretrieve
# url = "https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png"
# retrieve = urlretrieve(url, "/tmp/out.png")
# retrieve.add_header("Authorization", "Token b590de6e35d35db67acdeee0633d98708e705124")  
# background = Image.open("/tmp/out.png")
# # ERR: SSL: CERTIFICATE_VERIFY_FAILED

# import urllib.request
# url = "https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png"
# request = urllib.request.urlopen(url)
# request.add_header("Authorization", "Token b590de6e35d35db67acdeee0633d98708e705124")  
# # ERR: SSL: CERTIFICATE_VERIFY_FAILED
 
# import requests
# response = requests.get("https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png")
# # print(response) # <Response [200]>
# # print(response.url) # actual url of the image
# # print(response.content) # bytes
# # print(response.text) # ???
# print(response.json) # ???

# import urllib3
# url = "https://replicate.delivery/pbxt/nJ9UM4x9zCb3P98ljgd8qJtcBA7ke9UJeOY4aIC0Ac3BlYgQA/out-0.png"
# req = urllib3.request(url)
# req.add_header("Authorization", "Token b590de6e35d35db67acdeee0633d98708e705124")   
# result = urllib3.urlopen(req)
# # ERR: TypeError: 'module' object is not callable

# from https://stackoverflow.com/questions/63977849/recommended-way-to-download-images-in-python-requests
import requests
i = 2
url = "https://replicate.delivery/pbxt/Xci4OdhG4QLQJNFhfzJeQ73orBjfaEenSXs4G7NyvpxqU3BCB/out-0.png"
with open('imgDL/file{}.png'.format(i), 'wb') as f:
    f.write(requests.get(url).content)
# WORKS???

