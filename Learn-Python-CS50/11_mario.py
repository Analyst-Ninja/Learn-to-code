def main():

    # printing columns

#     print_column(3)

# def print_column(height):
#     print("#\n"*height, end = "")

# main()
    
    # printing bars

#     print_row(4)

# def print_row(width):
#     print("?"*width)
    
    # printing squares

    print_square(4)

# def print_square(size):
#     for _ in range(size):
#         print("#"*size)


# another way of writing print_square function

# def print_square(size):

#     # for each row in square
#     for i in range(size):

#         # for each brick in the square
#         for j in range(size):

#             # print brick
#             print("#", end="")
#         print()

# One more way to write the print square function
    
def print_square(size):
    for _ in range(size):
        print_row(size)

def print_row(length):
    print("#"*length)


main()

