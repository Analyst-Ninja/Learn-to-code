# Polymorphism --> Multiple Faces

# 1. Method Overriding --> If a method of child and parent class is same then, child
# method will be called

# 2. Method Overloading --> Same method will work deferently depending upon the
# input given to the method

# 3. Operator Overloading --> Same operator will work differently depending upon the
# input given


# Method Overloading

# import math


# class Geometry:
#     def area(self, radius):
#         return math.pi * radius * radius

#     def area(self, l, b):
#         return l * b


# a = Geometry()
# print(a.area(4))  # ---> It will work in Java but not in Python

import math


class Geometry:
    def area(self, a, b=0):  # Here b = 0 means --> default value of b is 0 if not given
        if b == 0:
            print("Circle: - ", math.pi * a * a)
        else:
            print("Rectangle: - ", a * b)


a = Geometry()
a.area(4)
a.area(4, 5)

# Note: - Techbically, in python method overloading is available unlike Java,
#         however we can acheive this by giving default value and conditions

# 3. Operator Overloading -

# We have also done it previously in Fraction by doing fraction addition, substraction
# etc. We have change the default behavious of + operator to do fraction addition

# We have acheived this by using magic keywords/ special method / dunder words
