with open("api_key", "r") as f:
    line = f.readline()
    print(line[-1:] == '\n')
    print(line)
