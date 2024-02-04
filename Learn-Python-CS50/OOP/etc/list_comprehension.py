def main():
    yell("This","is","CS50")

def yell(*words):
    upperCased = [word.upper() for word in words ]
    print(*upperCased)

if __name__ == "__main__":
    main()