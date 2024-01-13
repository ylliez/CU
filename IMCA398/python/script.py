# export REPLICATE_API_TOKEN=845573b9daf9097f767d098a05bbcc5d0d94b0eb
# export REPLICATE_API_TOKEN=b590de6e35d35db67acdeee0633d98708e705124
# export REPLICATE_API_TOKEN=e94bb74480bd1cec6759ea2d2f784bb84795149b

import replicate
import webbrowser
import requests

modelT2I = replicate.models.get("stability-ai/stable-diffusion")
# versionT2I = modelT2I.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")
versionT2I = modelT2I.versions.get("f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
modelI2T = replicate.models.get("methexis-inc/img2prompt")
versionI2T = modelI2T.versions.get("50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")
outputI2T = "an angry hamster eating brie in an impressionist style"

i = 1
while i < 4:
    # run T2I
    outputT2I = versionT2I.predict(prompt=outputI2T)[0]
    print(outputT2I)
    webbrowser.open(outputT2I)
    # download image to file
    with open('script/{}.jpg'.format(i), 'wb') as f:
        f.write(requests.get(outputT2I).content)
    # run I2T
    inputs = { 'image': outputT2I, }
    outputI2T = versionI2T.predict(**inputs)
    print(outputI2T)
    # with open('script/file{}-2.txt'.format(i), 'wb') as f:
    #     f.write(outputI2T)
    # increment counter
    i += 1
