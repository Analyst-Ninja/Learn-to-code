# Inheritance
# Works on DRY principle -- Don't repeat yourself


# Inheritance advantage
# 1. Code Reusability
# 2. Concise & Optimise code
# 3. Faster Development

# What can be inherited from a parent class by children class?
# 1. Data Members
# 2. Member Functions -- Methods
# 3. Constructor

# Except:
# 1. Priavte Members are not Allowed to bi inherited


# -------------------- Example --------------------------


class User:
    def login(self):
        print("Login")

    def register(self):
        print("Register")


class Student(User):
    def enroll(self):
        print("Enroll")

    def review(self):
        print("Review")


stu1 = Student()
stu1.login()
stu1.register()
stu1.enroll()
stu1.review()

# Child class can access the methods & data members of parent class

user1 = User()
# user1.enroll() # ----> It will give an an as it is a method of child class


# Polymorphism

# 1. Method Overriding --> If a method of child and parent class is same then, child
# method will be called

# 2. Method Overloading -->

# 3. Operator Overloading -->


# ------------------------------ Super Keyword --------------------------

# eg


class Phone:
    def __init__(self, price, brand, camera):
        print("Inside the parent's constructor")
        self.__price = price
        self.brand = brand
        self.camera = camera

    def buy(self):
        print("Buying a Phone")


class Smartphone(Phone):
    def buy(self):
        print("Buying a smartphone")
        super().buy()


s = Smartphone(20000, "Apple", 13)
# s.buy()


# ---------------- Important points regarding super() keyword ------------------
# super() keyword can not be written outside the class

# with super() keyword, 2 things can be accesed of parent class
# 1. Parent's Method
# 2. Parent's Constructor

# ---> Attributes can't be accessed through super() keyword

# eg. 2


class Phone:
    def __init__(self, price, brand, camera):
        print("Inside the parent's constructor")
        self.__price = price
        self.brand = brand
        self.camera = camera


class Smartphone(Phone):
    def __init__(self, price, brand, camera, os, ram):
        super().__init__(price, brand, camera)
        self.os = os
        self.ram = ram
        print("Inside the constructor")


s = Smartphone(20000, "Samsung", 13, "Android", 16)
print(s.os)
print(s.brand)


# -------------------- Types of Inheritance in Python -----------------

# 1. Single - Level Inheritance --> one parent - one child inheritance
# 2. Multi - Level Inheritance --> Child <-- Parent <-- Grandfather and so on
# 3. Hierachical Inheritance --> one parent - multi child
# 4. Multiple Inheritance --> multi parent -- one chile  (In Java it is not there)
# 5. Hybrid Inheritance --> Mixture of the above 4 types

# eg. of Multi-Level Inheritance

# ------------------- MRO --> Method Resolution Order ---------------------
# In conflict of the same function in both the parent class, object will invoke the
# method from the parent class which is inherited first


class Phone:
    def __init__(self, price, brand, camera):
        print("Inside the phone's constructor")
        self.price = price
        self.brand = brand
        self.camera = camera

    def buy(self):
        print("Buying a Phone")


class Product:
    def review(self):
        print("Customer Review")


class SmartPhone(Phone, Product):
    pass


s = SmartPhone(1000, "Samsung", 1)
s.review()
s.buy()

# ------------------------ Recussion Example in Inheritance ------------------


class A:
    def m1(self):
        return 20


class B(A):
    def m1(self):
        val = super().m1() + 30
        return val


class C(B):
    def m1(self):
        val = self.m1() + 20
        return val


obj = C()
print(obj.m1())
