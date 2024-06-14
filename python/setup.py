from cx_Freeze import setup, Executable

setup(
    name="Meu Programa",
    version="0.1",
    description="Meu programa exemplo",
    executables=[Executable("scrpt.py")],
)