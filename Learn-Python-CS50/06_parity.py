# def main():

#     x = int(input("What's x ? "))    
#     print(is_even(x))

# def is_even(a):
#         # if a%2==0:
#         #     return f"{a} is Even."
#         # else:
#         #     return f"{a} is Odd."
#         # condense it into 1 line
#         return f"{a} is Even." if a%2==0 else f"{a} is Odd."         
# main()

# Another Way of writing this

def main():
    x = int(input("What's x ? "))
    if is_even(x):
        print("Even")
    else:
        print("Odd")

def is_even(n):
    return n%2==0

main()