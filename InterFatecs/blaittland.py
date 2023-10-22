livros = list('DFGNMHRQSYVZ')
livrosOrg = sorted(livros)
tamLivros = len(livros)

print('Org:', end=' ')
for i in range(tamLivros):
    print(livrosOrg[i], end=' ')
print('\nDes:', end=' ')
for i in range(tamLivros):
    print(livros[i], end=' ')
print('')

for i in range(tamLivros):
    if livrosOrg[i] != livros[i]:
        print(f'{livros[i]} esta na posicao errada')