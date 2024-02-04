# names = []

# for _ in range(3):
#     names.append(input("What's your name?"))
    
# for name in sorted(names):
#     print(f"Hello, {name}")
    

# File I/O

# 1. Writing stuff to txt

# name = input("What's your name? ")

# # file = open("names.txt","a")
# # # file.write(name+"\n")
# # file.write(f"{name}\n")
# # file.close()

# with open("names.txt","a") as file:
#     file.write(f"{name}\n")

# 2. Reading stuff from txt

# with open("names.txt","r") as file:
#     lines = file.readlines()

# for line in lines:
#     print(f"Hello, {line.rstrip()}")

# with open("names.txt","r") as file:
#     for line in sorted(file):
#         print(f"Hello, {line.rstrip()}")

names = []

with open("names.txt","r") as file:
    for line in file:
        names.append(line.rstrip())

for name in sorted(names,reverse=True):
    print(f"Hello, {name}")

# for _ in range(2):
#     with open("names.txt","a") as file:
#         file.write(input("What's your name? ") + "\n")

