class Student:
    def __init__(self,name, age, school):
        self.name = name
        self.age = age
        self.school = school

    def greet(self):
        if self.age >= 18:
            return f"Hi {self.name}, you are eligible to watch porn"
        else:
            return f"Hello {self.name} bete, Nikal Lawde"
    
s1 = Student("Bholu",14,"SSM")
s2 = Student("Ajay",23,"SSM")
s3 = Student("Lolu",34,"SSM")

print(s1.greet(),s2.greet(),s3.greet(), sep="\n")