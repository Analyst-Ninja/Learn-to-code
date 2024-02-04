def get_student():
    return {'name' : input('Name : '), 'house' : input('House : ')}
    # tuple --> while returning more values at a time it is a sequence that \
    # is stored in a tuple that is immutable  
    # Nestin in tuple is supported

def main():
    student = get_student()
    if student['name'] == "Padma":
        student['house'] = "Ravenclaw"
    print(f"{student['name']} from {student['house']}")

if __name__ == "__main__":
    main()


