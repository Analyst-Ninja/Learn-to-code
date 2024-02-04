# 1. While Loop

# i = 30
# while i != 0:
#     print("Meow")
#     i = i -1

# 2. For Loop 

# for i in [1,2,3]:
#     print("Meow")

# for i in range(5):
#     print("Meow")

# pythonic way of wrting the above code

# if we are not using the variable in the for loop we can use the _ just as a iterator used by python 
    
# for _ in range(2,10):
#     print("Meow")

# print("Meow\n"*3, end = "")

# while True:
#     n = int(input("What's n?"))
#     if n > 0:
#         break

# for _ in range(n):
#     print("meow")

def main():
    x = get_number()
    meow(x)

def get_number():
    while True:
        n = int(input("What's n? "))
        if n > 0:
            return n
        

def meow(n):
    for _ in range(n):
        print("meow")

main()














