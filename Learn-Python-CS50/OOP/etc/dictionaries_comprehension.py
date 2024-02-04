students = ["Harry", "Ron","Hermione"]

# gryffindors = []

# for student in students:
#     gryffindors.append({"name":student,"house":"Gryffindor"})

# Another way using List Comprehension

# gryffindors = [{"name" : student, "house": "Gryffindor"} for student in students]


# -----------------------------------------------------------------------------------

# Dictionaries Comprehension

gryffindors = {student : "Gryffindor" for student in students}


print(gryffindors)
