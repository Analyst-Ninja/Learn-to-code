# print("Hello")

# 1. SyntaxError --> It is entirely us to solve where the Syntax was wring

# 2. RuntimeError --> It occurs while the coding has been running and error comes while running. It can be occured due to the wrong inputs, etc.

# 2A. ValueError --> specifically occurs when a function receives an argument of the correct data type but with an inappropriate value.

# 2B. NameError --> If some variable is not defined but is used.

# 2C. AssertionError --> 

# while True:
#     try:
#         x = int(input("What's x? "))
#     except ValueError:
#         print(f"x is not an integer.")
#     else:
#         break
    
# print(f"x is {x}")

# Another way of writing it

# while True:
#     try:
#         x = int(input("What's x? "))
#         break
#     except ValueError:
#         print(f"x is not an integer.")

    
# print(f"x is {x}")
    
# getting the number from the user

def main():
    x = get_int("What's x? ")
    print(f"x is {x}")

# def get_int():
#     while True:
#         try:
#             x = int(input("What's x? "))
#             return x
#         except ValueError:
#             print(f"x is not an integer.")
    
# Another way --> Little more Compact

# def get_int():
#     while True:
#         try:
#             return int(input("What's x? "))
#         except ValueError:
#             print(f"x is not an integer.")
  

# usage of pass keyword

def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            pass
         

main()


