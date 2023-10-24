livros = list('GCBADEF')
livrosOrg = sorted(livros)
tamLivros = len(livros)
livrosLidos = []; DSstudent = 0

print('Org:', end=' ')
for i in range(tamLivros):
    print(livrosOrg[i], end=' ')
print('\nDes:', end=' ')
for i in range(tamLivros):
    print(livros[i], end=' ')
print('')

for i in range(tamLivros):
    print(f'Estou verificando agora {livrosOrg[i]}')
    if livrosOrg[i] != livros[i]:
        print(f'{livros[i]} esta na posicao errada')
        posCerta = livrosOrg.index(livros[i]); posAtual = i
        DSstudent = 0
        while posAtual < posCerta:
            # print(posAtual)
            [livros[posAtual], livros[posAtual + 1]] = [livros[posAtual + 1], livros[posAtual]]
            print(f'Mudei {livros[posAtual + 1]} com {livros[posAtual]}')
            posAtual += 1
            livrosLidos.append(livros[posAtual])
            DSstudent += 1
            print(f'DSstudent: {DSstudent}')
            for i in range(tamLivros):
                print(livros[i], end=' ')
            print('\n')

print(livrosLidos)
print('A Database Systems student read a book.' if DSstudent > 5 else f'{5}')




# for i in range(tamLivros):
#     if livrosOrg[i] != livros[i]:
#         # print(f'{livrosOrg[i]} esta na posicao errada')
#         posCerta = i; posAtual = livros.index(livrosOrg[i])
#         DSstudent = 0
#         while posAtual > posCerta:
#             # print(posAtual)
#             [livros[posAtual - 1], livros[posAtual]] = [livros[posAtual], livros[posAtual - 1]]
#             print(f'Mudei {livros[posAtual - 1]} com {livros[posAtual]}')
#             posAtual -= 1
#             livrosLidos.append(livros[posAtual])
#             DSstudent += 1
#             print(f'DSstudent: {DSstudent}')
#             if DSstudent > 5:
#                 break
#             for i in range(tamLivros):
#                 print(livros[i], end=' ')
#             print('\n')