import wmi
import platform
import psutil

def info():
    init = wmi.WMI()
    nó = platform.node()
    disco = psutil.disk_usage('/')
    total = disco.total / (1024 ** 3)
    uso_disco = disco.percent


    for processor in init.Win32_Processor():
        print('Nome do processador: ', processor.Name)
        break


    print('Nome: ', nó)
    print(f'Disco: {total:.2f}GB')
    print(f'Uso do disco', disco.percent, '%')

info()
