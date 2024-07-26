
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