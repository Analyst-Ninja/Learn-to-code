students = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Ron", "house": "Gryffindor"},
    {"name": "Padma", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"},
]

# gryffindor = [
#     student["name"] for student in students if student["house"] == "Gryffindor"
# ]

# print(gryffindor)


def is_gryffindor(s):
    return s["house"] == "Gryffindor"


gryffindors = filter(is_gryffindor, students)

# Another Way without filter function --> by defining the  is_gryffindor in the argument for filter function
# gryffindors = filter(lambda s : s["house"] == "Gryffindor", students)

for gryffindor in sorted(gryffindors, key=lambda s: s["name"]):
    print(gryffindor)
