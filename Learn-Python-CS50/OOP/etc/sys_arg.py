# import sys

# if len(sys.argv) == 1:
#     print("meow")
# elif len(sys.argv) == 3 and sys.argv[1] == "-n":
#     n : int = int(sys.argv[2])
#     for _ in range(n):
#         print("meow")
# else:
#     print("usage : sys_arg.py")

# ------------ Another better Way using argparse ------------------

import argparse

parser = argparse.ArgumentParser(description="Meow like a cat")

parser.add_argument("-n", default=1,help="Number of times to meow",type=int)
parser.add_argument("-a", default=1, help="number", type=int)
args = parser.parse_args()

for _ in range(args.n):
    print("meow")
for _ in range(args.a):
    print("wuff")