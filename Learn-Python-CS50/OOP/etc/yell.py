def main():
    yell("This","is","CS50")

def yell(*words):
    # upperCased = []
    # for word in words:
    #     upperCased.append(word.upper())
    upperCased = map(str.upper,words)
    print(*upperCased)

if __name__ == "__main__":
    main() 