def totals(galleons = 0, sickels = 0, knuts = 0):
    return (galleons * 17 + sickels) * 29 + knuts

# coins = [100, 50, 25]
# print(totals(*coins), "Knuts")

coins = {
    "galleons" : 100,
    "sickels" : 50,
    "knuts" : 25
}

print(totals(**coins),"Knuts")

# **coins is similar as passing 
# galleons(key_name) = 100 (value), sickels = 50, knuts = 25

# *coins --> To unpack list
# **coins --> To unpack dictinaries with the key value pair separated with "="