class Vault:
    def __init__(self, galleons = 0, sickels = 0, knuts = 0):
        self.galleons = galleons        
        self.sickels = sickels
        self.knuts= knuts   

    def __str__(self):
        return f"{self.galleons} galleons, {self.sickels} sickels, {self.knuts} knuts"  
    
    def __add__(self,other):
        galleons = self.galleons + other.galleons
        sickels = self.sickels + other.sickels
        knuts = self.knuts + other.knuts
        return Vault(galleons,sickels,knuts)

potter = Vault(100, 50, 25)
weasely = Vault(25, 50, 100)


total = potter + weasely # essentially same as  potter.__add__(weasely)

# Another way of doing it
# total = potter.__add__(weasely) 

print(total)

