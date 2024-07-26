def varias_operaçoes(op):
    def soma(*args):

        return sum(args)

    def subtrair(*args):

        resultado = args[0]

        for num in args[1:]:
            resultado -= num

        return resultado

    def multiplicar(*args):

        resultado = 1

        for num in args:
            resultado *= num

        return resultado

    def dividir(*args):

        resultado = args[0]

        for num in args[1:]:
            resultado /= num

            if num == 0:
                """
                    É usaa par alançar (ou 'raise', em inglês) uma exceção do tipo valueerror.
                    
                    Em programação, uma exceção é uma forma de sinalizar que algo inesperado
                    aconteceu durante a execução de um programa. uando uma exceção é 
                    lançada e não tratada, ela interrompe a execução do programa e produz
                    uma mensagem de erro.
                    
                    A razão pela qual lançamos essa exceção específica é porque a divisão por zerp
                    é matematicamente indefinida e resultaria em um erro se tentássemos fazer
                    isso em python (ou na maioria das linguagens de progrmaalção). Em vez de permitir 
                    que esse erro ocorra, detectamos o caso em que um número é dividido por zero e
                    lançamos uma eceção com uma mensagem explicativa.
                    
                    Em outras palavras, essa linha foi adicionada para:
                    
                        Prevenir a ocorrência de um erro de divião por zero.
                        
                        Fornecer uma mensagem de erro amigável e explicativa para o usuário
                        informando-o do problema.
                        
                    Se você remover essa linha e tentar dividir por zero, o python lançará sua
                    própria exceção de ZeroDivisionError, que pode não ser tão amigável ou específica
                    quanto à mensagem que fornecemos.
                    
                    
                """
                raise ValueError('Divisão por zero não é permitida')

            resultado /= num

        return resultado

    if op == 'soma':

        return soma

    elif op == 'subtração':

        return subtrair

    elif op == 'multiplicação':

        return multiplicar

    elif op == 'divisão':

        return dividir

    else:
        def operacao_nao_suportada(*args):

            return 'Operação não suportada'

        return operacao_nao_suportada

adicionar = varias_operaçoes('soma')
print(adicionar(5, 3, 2, 9, 4, 7))

subtrair = varias_operaçoes('subtração')
print(subtrair(5, 3, 2, 9, 4, 7))

multiplicar = varias_operaçoes('multiplicação')
print(multiplicar(5, 3, 2, 9, 4, 7))

dividir = varias_operaçoes('divisão')
print(dividir(5, 3, 2, 9, 4, 7))