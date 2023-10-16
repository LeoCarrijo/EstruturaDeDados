livros = 'DFGNMHRQSYVZ'
livrosOrganizados = sorted(livros)
vezesLido = 0; flag = False

print(livros)
print(livrosOrganizados)

for i in range(len(livros)):
    livroAtual = livros[i]
    diff = livros.index(livroAtual) - livrosOrganizados.index(livroAtual)
    
    if diff > 5:
        print('A Database System student read a book\n')
        flag = True
        break
    if diff > 0:
        print(f'O livro {livroAtual} foi lido {diff} vezes')
        vezesLido += diff
if not flag:
    print(vezesLido)