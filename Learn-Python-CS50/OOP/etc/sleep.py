# Generators
def main():
    n = int(input("What's n? "))
    for s in sheep(n):
        print(s)

# def sheep(n):
#     flocks = []
#     for i in range(n):
#         flocks.append("🐏"*i)
#     return flocks
        
# Making function for yield --> To return one value at a time
        
def sheep(n):
    for i in range(n):
        yield "🐏"*i

if __name__ == "__main__":
    main()