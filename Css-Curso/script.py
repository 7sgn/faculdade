import wmi
import platform
import psutil
import os



def info():
    versaoso = platform.platform()
    inicia = wmi.WMI()
    nó = platform.node()
    usuario = os.getlogin()
    disco = psutil.disk_usage('/')
    total = disco.total / (1024 ** 3)
    mem = psutil.virtual_memory()
    loguser = psutil.users()
    logs = [(usuario.name) for usuario in loguser]
    txt = f'{nó}.txt'

    with open(txt, 'w') as f:
        for processor in inicia.Win32_Processor():
            f.write(f'Nome do processador: {processor.Name}\n')
            break


        f.write(f'Nome: {nó}\n')
        f.write(f'Usuário logado: {usuario}\n')
        f.write(f'Logs de user: {logs}\n')
        f.write(F'Versão do SO: {versaoso}\n')
        f.write(f'Disco: {total:.2f}GB\n')
        f.write(f'Uso do disco: {disco.percent}%\n')
        f.write(f'Memória total: {mem.total / (1024 ** 3):.2f}GB\n')
        f.write(f'Memória em uso: {mem.used / (1024 ** 3):.2f}GB\n')

info()


    







    # memoria
    # ultimo usuário logado