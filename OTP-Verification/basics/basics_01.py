from twilio.rest import Client
from dotenv import load_dotenv
import os

load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
account_auth_token = os.getenv("TWILIO_AUTH_TOKEN")
verify_sid = os.getenv("VERIFY_SID")


client = Client(account_sid,account_auth_token)

otp_verification = client.verify.services(verify_sid).verifications.create(
    to="+916397053766", channel="sms"
)


print(otp_verification.status)

otp_code = int(input("OTP : "))

otp_check = client.verify.services(verify_sid).verification_checks.create(
    to = "+916397053766", code = otp_code
)

print(otp_check.status)