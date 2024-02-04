import requests
import sys
import json

if len(sys.argv) !=2:
    sys.exit()

reponse = requests.get(f"https://itunes.apple.com/search?entity=song&limit=5&term={sys.argv[1]}")

# for pretty printing
# print(json.dumps(reponse.json(),indent=2))

o = reponse.json()

for result in o["results"]:
    print(result['trackName'])