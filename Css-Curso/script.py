import wmi
import platform
import psutil
import os

txt = 'info.txt'

def info():
    versaoso = platform.platform()
    init = wmi.WMI()
    nó = platform.node()
    usuario = os.getlogin()
    disco = psutil.disk_usage('/')
    total = disco.total / (1024 ** 3)
    mem = psutil.virtual_memory()


    for processor in init.Win32_Processor():
        print('Nome do processador: ', processor.Name)
        break


    print('Nome: ', nó)
    print(f'Usuário Logado: {usuario}')
    print(F'Versão do SO: {versaoso}')
    print(f'Disco: {total:.2f}GB')
    print(f'Uso do disco: ', disco.percent, '%')
    print(f'Memória total: {mem.total / (1024 ** 3):.2f}GB')
    print(f'Memória em uso: {mem.used / (1024 ** 3):.2f}GB')

info()

    # with open(txt, 'w') as arquivo:
    #    arquivo.write(f'{infor}')   
    # print(f'As informações foram salvas em "{txt}"')





    # memoria
    # ultimo usuário logado