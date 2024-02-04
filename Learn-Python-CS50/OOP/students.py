class Student:
    def __init__(self,name, house):
        self.name = name
        self.house = house 

    def __str__(self):
        return f"{self.name} is in {self.house}"
    
    @classmethod
    def get(cls):
        name = input("Name: ")
        house = input("House: ")
        return cls(name,house)
    
def main():
    student = Student.get()
    print(type(student))


if __name__ == "__main__":
    main()