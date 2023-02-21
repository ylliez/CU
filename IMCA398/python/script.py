import replicate
import webbrowser
import requests

modelP2I = replicate.models.get("stability-ai/stable-diffusion")
# version = model.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")
# version = model.versions.get("f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
# outputP2I = version.predict(prompt=outputI2P)[0]
modelI2P = replicate.models.get("methexis-inc/img2prompt")
# versionI2P = model.versions.get("50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")
# outputI2P = versionI2P.predict(**inputs)
outputI2P = "an angry hamster eating brie in an impressionist style"

i = 1
while i < 4:
    # run P2I
    outputP2I = modelP2I.predict(prompt=outputI2P)[0]
    print(outputP2I)
    webbrowser.open(outputP2I)
    # download to file
    with open('script/file{}.png'.format(i), 'xb') as f:
        f.write(requests.get(outputP2I).content)
    # run I2P
    inputs = { 'image': outputP2I, }
    outputI2P = modelI2P.predict(**inputs)
    print(outputI2P)
    # increment counter
    i += 1


