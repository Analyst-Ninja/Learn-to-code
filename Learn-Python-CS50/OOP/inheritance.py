class Wizard:
    def __init__(self, name):
        if not name:
            raise ValueError("Missing Name") 
        self.name = name

    ...

class Student(Wizard):
    def __init__(self,name,house):
        super().__init__(name)
        self.house = house

    ...

class Professor(Wizard):
    def __init__(self,name,subject):
        super().__init__(name)
        self.subject = subject 

    ...

p1 = Professor("", "Dark Arts")
print(p1.name, p1.subject)