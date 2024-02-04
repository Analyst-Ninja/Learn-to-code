def main():
    print(hello())
    name = input("what's your name? ").strip().title()
    print(hello(name))


def hello(to = "World"):
    return f"Hello, {to}"

if __name__ == "__main__":
    main()

