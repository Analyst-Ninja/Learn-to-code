# num=int(input("enter a num for table: "))
# for i in range(1,11):
#     print(str(num)+' X ' +str(i) + ' = ' + str(num*i) )

# # f strings

# num=int(input("enter a num for table: "))
# for i in range(1,11):
#     print(f"{num} X {i} = {num*i}")

# Practice 02

# l1=['Harry',"Sohan",'Sachin','Rahul']

# for name in l1:
#     if name.startswith('S'):
#         print('Hello ' + name)

# # Practice 03 
# num=int(input('enter a num for table:'))
# i=1
# while i<11:
#     print(f"{num} X {i} = {num*i}")
#     i=i+1

# Practice 04 
# Method 1
# num=int(input('enter a num : '))
# count=0
# for i in range(1,num+1):
#     if (num%i==0):
#         count=count+1
#         if count>2:
#             break
# if count==2:
#     print("Prime")
# else:
#     print('Not prime')

# Method 2
# num=int(input('enter a num : '))
# prime=True
# for i in range(2,num):
#     if (num%i==0):
#         prime=False
#         break

# # At value 2, upper if statement will not run

# if prime==True:
#     print('Prime')
# else:
#     print('Not Prime')

# # Problem No 5
# n=int(input('Enter n: '))
# i=1
# sum=0
# while i<n+1:
#     sum=sum+i
#     i=i+1
# print(sum)
    
# # Problem no. 5 - Factorial

# n=int(input('Enter n: '))
# fact=1
# if (n<0):
#     print('Dhang mein enter kar ')
# elif (n==0):
#     fact=1
# else:
#     for i in range(1,n+1):
#         fact=fact*i
# if not n<0:
#     print(f'Factorial of {n} = {fact}')
    
# # Problem No. 7
# print
#   *
#  ***
# *****

# # for n=3
# n=3

# for i in range(3):
#     print(' '*(n-i-1),end='')
#     print('*'*(2*i+1),end='')
#     print(' '*(n-i-1))

# # Problem No. 7
# print
# *
# **
# ****

# # for n=3

# n=3
# for i in range(3):
#     print('*'*(i+1))

# # Note : - * (multiply operator can be apply on to string also)

# # Problem No. 9

# # print

# # ***
# # * *
# # ***

# n=int(input('Enter n: '))
# i=0
# for i in range(n):
#     if (i==0):
#         print('*'*n)
#     elif(i==n-1):
#         print('*'*n)
#     else:
#         print('*',end='')
#         print(' '*(n-2),end='')
#         print('*')

# # Problem no. 10 -- print table in reverse order


# # Method 1
# n=int(input('Enter n: '))
# i=10
# while i>0:
#     print(f'{n} X {i} = {n*i}')
#     i=i-1

# # Method 2 
# n=int(input('Enter n: '))
# a=[]
# # j=1
# for i in range(1,11):
#     c=n*i
#     a.append(c)
# a.reverse()
# # print(a)
# for i in range(1,11):
#     print(f"{n} X {i} = {a[i-1]}")

# Method 3
num=int(input("enter a num for table: "))
for i in range(10,0,-1):
    print(f"{num} X {i} = {num*i}")