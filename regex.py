import re

class regex:
    pattern_tuple = list()

    def __init__(self):
        with open("regex.txt", 'r') as f:
            for line in f:
                s = line.split(maxsplit=1)
                if len(s) == 2 and s[0][0] != '#':
                    if s[1][-1:] == '\n':
                        s[1] = s[1][:-1]
                    try:
                        self.pattern_tuple.append( (s[0], re.compile(s[1])) )
                    except:
                        print("Error parsing regex file of line: {}".format(line))

    def match(self, text):
        result = []
        for pat in self.pattern_tuple:
            if pat[1].search(text) is not None:
                result.append(pat[0])
        return result