class Customer:
    def __init__(self, name, gender, address):
        self.name = name
        self.gender = gender
        self.address = address

    def edit_profile(self, new_name, new_city, new_state, new_pincode):
        self.name = new_name
        self.address.change_address(new_city, new_state, new_pincode)


class Address:
    def __init__(self, city, state, pincode):
        self.city = city
        self.pincode = pincode
        self.state = state

    def change_address(self, new_city, new_state, new_pincode):
        self.city = new_city
        self.state = new_state
        self.pincode = new_pincode


add = Address("Mathura", "Uttar Pradesh", "281001")
cust = Customer("Rohit", "Male", add)

print(cust.address.city)

cust.edit_profile("Ajay", "Delhi", "Delhi-NCR", "280011")

print(cust.address.city)
