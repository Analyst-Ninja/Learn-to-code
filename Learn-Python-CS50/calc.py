# x = float(input("What's X? "))
# y = float(input("What's Y? "))


# z = round((x + y),2)

# z2 = x/y

# print(f"{z:,}")

# print(f"{z2:.2f}")


def main():
    x= input("What's x? ")
    print(f"x squared is {square(x):,}")

def square(n):
    return n*n
    
    # return n**2
    # return pow(n,2)

if __name__ == "__main__":
    main()