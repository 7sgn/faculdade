'''
    Funções Anônimas (Lambda)

    o  Definição de uso
    o  Limitaçoes em relação as funções regulares

    Função Lambda

    Funções lambda são funçoes anonimas de pequena extensão. Ao contrario
    de uma função definida com def, a função lambda pode ter apenas uma
    expressão e retorna implicitamente o resultado dessa expressão. Ela é
    frequentemente usada para pequenas operações que não são convenientes de
    se definir sem nomar uma função completa.


'''

# Exemplo prático 1: Definção e uso

# Função Regular para dobrar um número

def dobrar(n):

    return n * 2

print('Função Regular: ', dobrar(5))  #Saída: 10


# Função Lambda para dobrar um número

dobrar_com_lambda = lambda n: n * 2

print('Função Lambda: ', dobrar_com_lambda(5))

'''
    Exemplo Prático 2: Limitações
    
        Expressividade
    
    Função Regular para Classificar Números:
    
'''

def classsificar_numero(n):

    if n < 0:

        return 'Negativo'

    elif n == 0:

        return 'Zero'

    else:

        return 'Positivo'

print(classsificar_numero(5)) #Saída: Positivo


# Tentativa de Função Lambda para Classificar Núemros (Menos Clara):

classsificar_numero_lambda = lambda n: 'Negativo' if n < 0 else('Zero' if n == 0 else 'Positivo')

print(classsificar_numero_lambda(-5))


'''
    Nomeação
    
    Sem atrubuir a função lambda a uma variável, ela permanece anônima.
    Você pode usa-lá, por exemplo, em funções como sorted():
    
    Ordenar umas lista de strings pelo comprimento usando função lambda:
'''

lista = ['maça', 'banana', 'cereja', 'damasco']

# Função Lambda com sorted

'''
Exemplo co sorted:

Suponha que vocÊ tenha uma lista de tuplas representando
pessoas e suas idades, e você queira classifica-las pela idade:

'''

pessoas = [('João', 35), ('Maria', 25), ('Pedro', 40)]
pessoas_ordenadas = sorted(pessoas, key=lambda x: x[1])

print(pessoas_ordenadas) # Saída: [('Maria', 25), ('João', 35), ('Pedro', 40)]

# No exemplo acima, estamos usnado a função lambda
# para especificar que queremos ordenar as tuplas pela idade (indice 1)

'''
    sorted(): É uma função built-in do python que retorna uma nova
    lista contendo todos os itens da lista original em ordem crescente.
    
    Uma função built-in é uma função que já vem incluída no
    núcleo do Python, de modo que você não precisa importar nenhum móulo ou
    pacte adicional para usá-lá. Essas funções estão sempre disponíveis no namespace
    principal e ajudam a realizar tarefas comuns sem a necessidade de escrever código extra
    
    pessoas: É a lista que você deseja ordenar. No exemplo fornecido,
    pessoas é uma lista de tuplas onde cada tupla contém um nome e uma idade.
    
    key: É um argumento opcional que você pode passar para a função
    sorted(). Ele espera uma função que pode aceitar um item da 
    lista (neste caso, uma tupla) e retornar um valor que será usado
    para ordenar a lista.
    
    lambda x: x[1] : Esta é uma função lambda que aceita uma
    tupla x e retorna o segundo item da tupla (ou seja, x[1]). Neste
    contexto, isso significa que estamos pegando a idade de cada tupla.
    A função sorted() usará essas idades para ordenar a lista de tuplas.
    
Então, quando você escreve pesoas_ordenadas = sorted(pessoas, key=lambda x: x[1], )você está dizendo ao python:


    'Eu quero ordenar a lista de pessoas'
    
    'Para determinar a ordem, para cada tupla em pessoas, pegue o segundo
    item da tupla (a idade) e use-o como a chave de ordenação'
    
    'Coloque o resultado ordenado na variável pessoas_ordenadas'
    
O resultador é uma lista de tuplas ordenadas por idade
    
'''

'''
    Restrição de escopo
    
Vamos considerar um exemplo em que tentamos modificar uma variável
global usando global em uma função lambda, mas não podemos.

Função Regular Modificando uma Variável Global:
ee

'''
