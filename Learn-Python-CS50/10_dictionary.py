# students = {
#     "Hermione" : "Gryffindor",
#     "Harry": "Gryffindor",
#     "Ron": "Gryffindor",
#     "Drako":"Slytherin"
#     }

# for student in students:
#     print(student,students[student], sep = "--> ")

students = [
    {"name" : "Hermione","house":"Gryffindor", "patronus" : "Otter"},
    {"name" : "Harry","house" : "Gryffindor", "patronus" :"Stag"},
    {"name" : "Ron", "house" : "Gryffindor", "patronus" : "Jack Russel Terrier"},
    {"name" : "Drako", "house" : "Sytherin", "patronus" : None},
]

for student in students:
    print(student['name'],student['house'],student['patronus'], sep = ", ")