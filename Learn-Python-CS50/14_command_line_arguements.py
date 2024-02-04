# sys.argv

# srgv --> arguement Vector

import sys


# try:
#     print("Hello, my name is", sys.argv[1])
# except IndexError:
#     print("Too few arguements")

# Alternatively

# if len(sys.argv) < 2:
#     sys.exit("Too Few Arguements")
# elif len(sys.argv) > 2:
#     sys.exit("Too Many Arguements")

# # print name tags
# print(f"My name is {sys.argv[1]}")

# iterating over sys.argv

if len(sys.argv) < 2:
    sys.exit("Too Few Arguements")

for arg in sys.argv[1:]:
    print("Hello, My name is",arg)