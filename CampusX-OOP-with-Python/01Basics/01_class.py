# Class : -- It is a blueprint.
# Object : -- It is instance of a class

# Everything is object in python even variables like int, float, list, dictionary

# DataType = Class
# Variable = Object

# There are 2 things in class:
# 1. Data or Property
# 2. Function or Behaviour

# l = list([1,23,4])

# print(l)

# -------------------------------------------------------------------------

# Functions vs Methods

# Methods are the special function that is written inside the class.
# Function is general it can be accessed by anyone,
# but method can be used by that particular class in which it is defined
# eg. len(L) ==> function
# eg. L.append(1) ==> method


# Let's make a class


class Atm:
    # Constructer -- It is special method which is executed automatically in the start
    # __init__ ==> Constructor
    # special/ magic/ dunder methods

    # / Static Variable /
    __counter = 1

    def __init__(self):
        self.__pin = ""
        self.__balance = 0
        self.sno = Atm.__counter
        Atm.__counter += 1
        print("Hello")

        self.__menu()

    @staticmethod
    def get_counter():
        return Atm.__counter

    @staticmethod
    def set_counter(new):
        if type(new) == int:
            Atm.__counter = new
        else:
            print("Invalid Input")

    def get_pin(self):
        return self.__pin

    def set_pin(self, new_pin):
        if type(new_pin) == str:
            self.__pin = new_pin
            print("PIN Changed")
        else:
            print("Not Allowed")

    def __menu(self):
        user_input = int(
            input(
                """
Hello, How you would like to proceed
    1. Enter 1 to create PIN
    2. Enter 2 to deposit
    3. Enter 3 to withdraw
    4. Enter 4 to check balance
    5. Enter 5 to exit
        
    """
            )
        )

        if user_input == 1:
            self.create_pin()
        elif user_input == 2:
            self.deposit()
        elif user_input == 3:
            self.withdraw()
        elif user_input == 4:
            self.check_balance()
        elif user_input == 5:
            print("Exit")
        else:
            print("Please input correct value.")

    def create_pin(self):
        self.__pin = input("Enter your pin:- ")
        print("PIN set successfully.")

    def deposit(self):
        temp = input("Enter your PIN:- ")
        if temp == self.__pin:
            amount = int(input("Enter the amount:- "))
            self.__balance = self.__balance + amount
            print("Amount depositted successfully.")
        else:
            print("Invalid PIN.")

    def withdraw(self):
        temp = input("Enter your PIN:- ")
        if temp == self.__pin:
            amount = int(input("Enter the amount:- "))
            if amount <= self.__balance:
                self.__balance = self.__balance - amount
                print("Amount withdrawn successfully.")
            else:
                print("Insufficient Balance")
        else:
            print("Invalid PIN.")

    def check_balance(self):
        temp = input("Enter your PIN:- ")
        if temp == self.__pin:
            print(f"Account Balance:- {self.__balance}")
        else:
            print("Invalid PIN.")


# sbi = Atm()
# hdfc = Atm()

print(Atm.get_counter())


# ----> __pin ==> it becomes _Atm__pin

# Note:- In python, there is nothing which is truly private


# There is 2 tyoe of variables in class

# //--Instance Variable--// :-
# It is type of variable which has different value for
# different instance or which creates every time when a new instance is created
# Instance Varaibles always initialize in constructor
# ---------- It can be call with self keyword precedence ----------
# It is a constructor variable


# //--Static Variable--// :-
# It is a type of class variable which is same for all the instances
# that is created using the same class
# Static Variable always initialize outside the constructor
# ---------- It can be call with ClassName precedence ----------
# It is a class variable


# Types of relationship between classes
# 1. Aggregation type --> [Has -A] relationship
# eg. Customer -------- has A ----------- Address


# 2. Inheritance type --> [Is - A] relationship
# eg. Car ---- is A ----- Vehicle
# eg. Smartphone ---- is A ----- Product
