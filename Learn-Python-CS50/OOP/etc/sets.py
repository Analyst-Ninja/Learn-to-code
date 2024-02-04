students = [
    {"name": "Harry","house":"Gryffindor"},
    {"name": "Ron","house":"Gryffindor"},
    {"name": "Padma","house":"Ravenclaw"},
    {"name": "Draco","house":"Slytherin"},
]

# houses = []

# for i in students:
#     houses.append(i['house'])

# print(set(houses))

# Another way

houses = set()

for student in students:
    houses.add(student['house'])

print(houses)

