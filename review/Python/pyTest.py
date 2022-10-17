# # INDENTATION FOR SCOPE
# if 5 > 2:
#   print("Five is greater than two!")

# # INDENTATION ERROR
# if 5 > 2:
# print("Five is greater than two!")

# # ANY NUMBER OF SPACES
# if 5 > 2:
#           print("Five is greater than two!")

# # INDENTATION CONSISTENCY ERROR
# if 5 > 2:
#  print("Five is greater than two!")
#         print("Five is greater than two!")

# # INDENTATION CONSISTENCY
# if 5 > 2:
#     print("Five is greater than two!")
#     print("Five is greater than two!")

# # VARIABLE DECLARATION
# x = 5
# y = "why?" # Strings "" || ''
# print(x)
# print(y)

# # CASE SENSITIVE
# a = 4
# A = "Sally"
# print(a)
# print(A)

# # VARIABLE TYPE CASTING
# x = str(3)
# y = int(3)
# z = float(3)
# print(x)
# print(type(x))
# print(y)
# print(type(y))
# print(z)
# print(type(z))

# # VARIABLE TYPE CONVERSION
# x = int(3)
# y = float(3)
# print(x)
# print(y)
# a = float(x)
# b = int(y)
# c = complex(x)
# print(a)
# print(b)
# print(c)

# # MULTIVARIABLE DECLARATION
# x, y, z = "Orange", "Banana", "Cherry"
# print(x)
# print(y)
# print(z)

# x = y = z = "Orange"
# print(x)
# print(y)
# print(z)

# # UNPACKING LIST
# fruits = ["apple", "banana", "cherry"]
# x, y, z = fruits
# print(x)
# print(y)
# print(z)

# OUTPUT
# print("Hello World")

# msg = "Hello Again World"
# print(msg)

# x = "Python"
# y = "is"
# z = "awesome"
# print(x, y, z) # adds spaces
# print(x + y + z) # immediate values

# # + OPERATOR FOR NUMBERS
# x = 5
# y = 10
# print(x + y)

# # COMBINING ≠ VAR TYPES
# x = 5
# y = "John"
# print(x, y)

# # VARIABLE SCOPE
# # GLOBAL
# x = "awesome"
# def myfunc():
#   print("Python is " + x)
# myfunc()
# # LOCAL
# x = "awesome"
# def myfunc():
#   x = "fantastic"
#   print("Python is " + x)
# myfunc()
# print("Python is " + x)
# # GLOBAL DECLARATION W/IN FUNC
# def myfunc():
#   global x
#   x = "fantastic"
# myfunc()
# print("Python is " + x)
# # GLOBAL MODIFICATION W/IN FUNC
# x = "awesome"
# def myfunc():
#   global x
#   x = "fantastic"
#   print("Python is " + x)
# myfunc()
# print("Python is " + x)

# # RANDOM MODULE
# import random
# print(random.randrange(1, 10))

# # MULTILINE STRING
# a = """Lorem ipsum dolor sit amet,
# consectetur adipiscing elit,
# sed do eiusmod tempor incididunt
# ut labore et dolore magna aliqua."""
# print(a)

# # STRING AS ARRAY
# a = "Hello, World!"
# print(a[0])
# a = "Hello, World!"
# print(len(a))
# for x in "banana":
#   print(x)
# txt = "The best things in life are free!"
# print("free" in txt)
# if "free" in txt:
#   print("Yes, 'free' is present.")
#   txt = "The best things in life are free!"
# print("expensive" not in txt)
# txt = "The best things in life are free!"
# if "expensive" not in txt:
#   print("No, 'expensive' is NOT present.")