# Without REGEX library checking for the valid Email

# email = input("What's your email? ").strip()

# userName , domainName = email.split("@")

# if userName and domainName.endswith(".edu"):
#     print("Valid")
# else:
#     print("Invalid")

import re 

email = input("What's your email? ")

if re.search(r"^\w+@(\w+\.)?\w+\.edu$", email, re.IGNORECASE):
    print("Valid")
else:
    print("Invalid")

