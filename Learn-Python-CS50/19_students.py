# with open("students.csv", "r") as file:
#     for line in file:
#         name, house = line.rstrip().split(",")
#         print(f"{name} is in {house} house")

# sorting

# students = []

# with open("students.csv") as file:
#     reader = csv.reader(file)
#     for row in reader:
#         students.append({"name" : row[0], "home" : row[1]})

# def get_name(student):
#     return student["name"]

# for student in sorted(students,key=get_name):
#     print(f"{student['name']} is in {student['house']}")
        
# Another Way with lambda
        
# lambda --> Anonomous Function
# Syntax for lambda function

# lambda parameters (seperated by commas) : what is needs to return 

# for student in sorted(students,key=lambda student : student['name'], reverse=True):
#     print(f"{student['name']} is from {student['home']}")

# -----------------------------------------------------------------------------------------------------------

# import csv

# students = []

# with open("students.csv") as file:
#     data = csv.DictReader(file)
#     for row in data:
#         student = {"name" : row["name"], "home" :row["home"]}
#         students.append(student)

# for student in sorted(students, key= lambda student : student['name']):
#     print(f"{student['name']} is from {student['home']}")

# -----------------------------------------------------------------------------------------------------------

# Writing the data into CSV file

import csv 

name = input("What's your name? ")
home = input("Where's your home? ")

with open("students.csv","a",newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name","home"])
    writer.writerow({"name":name, "home":home})