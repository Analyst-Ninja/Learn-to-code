

def meow(n : int) -> str:

    """
    Meows n times 

    :param n: Number of times to meow
    :type n: int
    :raise TypeError: If n is not int
    :return: A string n meows, one per line
    :rtype: str  
    """

    return "meow\n"*n

num : int = int(input("Number : "))

meows : str = meow(num)
print(meows, end="")