class Fraction:
    def __init__(self, n, d):
        self.num = n
        self.den = d

    def __str__(self):
        return "{}/{}".format(self.num, self.den)

    def __add__(self, other):
        temp_num = self.num * other.den + other.num * self.den
        temp_den = self.den * other.den

        # return "{}/{}".format(temp_num, temp_den)
        def simplyfy(temp_num, temp_den):
            l = [temp_num, temp_den]
            for i in range(2, max(l)):
                while temp_num % i == 0 and temp_den % i == 0:
                    temp_num = temp_num // i
                    temp_den = temp_den // i
            return f"{temp_num}/{temp_den}"

        return simplyfy(temp_num, temp_den)

    def __sub__(self, other):
        temp_num = self.num * other.den - other.num * self.den
        temp_den = self.den * other.den
        # return "{}/{}".format(temp_num, temp_den)

        def simplyfy(temp_num, temp_den):
            l = [temp_num, temp_den]
            for i in range(2, max(l)):
                while temp_num % i == 0 and temp_den % i == 0:
                    temp_num = temp_num // i
                    temp_den = temp_den // i
            return f"{temp_num}/{temp_den}"

        return simplyfy(temp_num, temp_den)

    def __mul__(self, other):
        temp_num = self.num * other.num
        temp_den = self.den * other.den

        def simplyfy(temp_num, temp_den):
            l = [temp_num, temp_den]
            for i in range(2, max(l)):
                while temp_num % i == 0 and temp_den % i == 0:
                    temp_num = temp_num // i
                    temp_den = temp_den // i
            return f"{temp_num}/{temp_den}"

        return simplyfy(temp_num, temp_den)

    def __truediv__(self, other):
        temp_num = self.num * other.den
        temp_den = self.den * other.num

        def simplyfy(temp_num, temp_den):
            l = [temp_num, temp_den]
            for i in range(2, max(l)):
                while temp_num % i == 0 and temp_den % i == 0:
                    temp_num = temp_num // i
                    temp_den = temp_den // i
            return f"{temp_num}/{temp_den}"

        return simplyfy(temp_num, temp_den)


x = Fraction(4, 2)
y = Fraction(6, -2)

print(x + y)
