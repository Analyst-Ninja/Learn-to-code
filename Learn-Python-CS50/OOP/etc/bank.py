# balance = 0

# def main():
#     print(f"Balance : {balance}")
#     deposit(100)
#     withdraw(50)
#     print(f"Balance : {balance}")

# def deposit(n):
#     global balance
#     balance = balance + n 
#     return balance

# def withdraw(n):
#     global balance
#     balance = balance - n 
#     return balance


# if __name__ == "__main__":
#     main()

# ------------------- by class -----------------------


# class Account:
#     def __init__(self,id,balance) -> None:
#         self.balance = balance
#         self.id = id

#     def deposit(self,n):
#         self.balance += n 
    
#     def __str__(self):
#         return f"id : {self.id} | Balance : {self.balance}"
    
# rohit = Account(1,1000)
# rohit.deposit(1000)
# print(rohit)
    
# ----------------------- Another Way with Class --------------------

class Account:
    def __init__(self):
        self._balance = 0
    
    # getter 
    @property
    def balance(self):
        return self._balance
    # setter
    @balance.setter
    def balance(self,n):
        self._balance = n
    
    def deposit(self,n):
        self._balance += n
    
    def withdraw(self,n):
        self._balance -= n 

def main():
    account = Account()
    print(f"Current Balance - {account.balance}")
    account.deposit(10000)
    print(f"Balance after Deposit - {account.balance}")
    account.withdraw(5000)
    print(f"Balance after Withdraw - {account.balance}")
    account.balance = 10000
    print(f"Balance after Ghapla - {account.balance}")


if __name__ == "__main__":
    main()
    
    

    
        



