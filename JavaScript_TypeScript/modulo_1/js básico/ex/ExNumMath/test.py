# python subprocess
import subprocess

output = subprocess.run(["powershell", "-Command", "Get-Date"], capture_output=True)
result = output.stdout.decode("utf-8")

with open('output.txt', 'w') as file:
    file.write(result)