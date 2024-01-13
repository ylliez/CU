# # Replicate in Python - Stable Diffusion  - v1
# import replicate
# model = replicate.models.get("stability-ai/stable-diffusion")
# version = model.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")
# version.predict(prompt="a 19th century portrait of a wombat gentleman")
# # ['https://replicate.com//models/stability-ai/stable-diffusion/files/50fcac81-865d-499e-81ac-49de0cb79264/out-0.png']

# # Replicate in Python - Stable Diffusion  - v2
# import replicate
# import webbrowser
# model = replicate.models.get("stability-ai/stable-diffusion")
# output_url = model.predict(prompt="electric sheep, neon, synthwave")[0]
# print(output_url)
# webbrowser.open(output_url)

# # Replicate in Python - Stable Diffusion  - v3
# import replicate
# import webbrowser
# model = replicate.models.get("stability-ai/stable-diffusion")
# output_url = model.predict(prompt="angry cheesecake eating brie")[0]
# print(output_url)
# webbrowser.open(output_url)

# # Stable Diffusion + img2prompt - v1
# import replicate
# import webbrowser
# modelT2I = replicate.models.get("stability-ai/stable-diffusion")
# modelI2T = replicate.models.get("methexis-inc/img2prompt")
# # version = model.versions.get("50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")

# outputT2I = modelT2I.predict(prompt="blissful hamster eating brie")[0]
# print(outputT2I)
# webbrowser.open(outputT2I)

# inputs = {
#     # 'image': open("path/to/file", "rb"),
#     # 'image': open("https://replicate.delivery/pbxt/Ge4wMJeRUXllYEmvCLCuGHWCpxNyvxPufNou7rhVKFxlhifBB/out-0.png", "rb"),
#     # 'image': open(outputT2I, "rb"),
#     'image': outputT2I,
# }
# outputI2T = modelI2T.predict(**inputs)
# print(outputI2T)

# outputT2I = modelT2I.predict(prompt=outputI2T)[0]
# print(outputT2I)
# webbrowser.open(outputT2I)

# inputs = { 'image': outputT2I, }
# outputI2T = modelI2T.predict(**inputs)
# print(outputI2T)

# # Stable Diffusion Replicate versions
# version = model.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")
# version = model.versions.get("f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
# # img2prompt Replicate versions
# version = model.versions.get("50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")

# # # Stable Diffusion + img2prompt - v2
# import replicate
# import webbrowser
# modelT2I = replicate.models.get("stability-ai/stable-diffusion")
# modelI2T = replicate.models.get("methexis-inc/img2prompt")
# outputI2T = "an angry hamster eating brie in an impressionist style"
# i = 1
# while i < 4:
#     # run T2I
#     outputT2I = modelT2I.predict(prompt=outputI2T)[0]
#     print(outputT2I)
#     webbrowser.open(outputT2I)
#     # run I2T
#     inputs = { 'image': outputT2I, }
#     outputI2T = modelI2T.predict(**inputs)
#     print(outputI2T)
#     # increment counter
#     i += 1

# # Stable Diffusion + img2prompt - v3 (model.predict() deprecated --> version.predict())
import replicate
import webbrowser
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
    # run I2T
    inputs = { 'image': outputT2I, }
    outputI2T = versionI2T.predict(**inputs)
    print(outputI2T)
    # increment counter
    i += 1

