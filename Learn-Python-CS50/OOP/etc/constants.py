# constants kuch nhi hota python mein. It just about the honur system

# Wherever the variable is in all upcase. It is understood as Constant

# MEOWS = 4

# for _ in range(MEOWS):
#     print("meow")


#-------------------------------------------------

class Animal:
    COUNT = 10
    def __init__(self, animal) -> None:
        self.animal = animal.lower()

    def __str__(self) -> str:
        return f"{self.animal} say : {self.voice()}"

    def voice(self):
        match self.animal:
            case "cat":
                voice = "meow"
            case "dog":
                voice = "wuff"
            case "cow":
                voice = "mooo"
            case "donkey":
                voice = "dhainchu"
            case "goat":
                voice = "mee"

        say = [voice for _ in range(Animal.COUNT)] 
        return say   
    
cat = Animal("Cat")
print(cat)
dog = Animal("doG")
print(dog)
donkey = Animal("donkEy")
print(donkey)
