import string

p = ('26 maiusculas').split()
n = int(p[0])
alfabeto = string.ascii_lowercase if p[1] == 'minusculas' else string.ascii_uppercase
tam = len(alfabeto)

for i in range(1, n + 1):
    print((tam - i) * '.', end='')
    print("".join(alfabeto[:i]))