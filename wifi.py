import subprocess
from ignorar import redes
informacoes = subprocess.check_output(["netsh", "wlan", "show", "profiles"], encoding='cp860').split("\n")

perfis = [i.split(":")[1][1:] for i in informacoes if "Todos os Perfis de Usuários" in i]
for item in perfis:
    if item not in redes:
        results = subprocess.check_output(["netsh", "wlan", "show", "profile", item, "key=clear"], encoding="cp860").split("\n")

        #print(results)
        results = [b.split(":")[1][1:] for b in results if "Conteúdo da Chave" in b]
        try:
            print(f"Rede: {item}, Senha: {results[0]}")
        except IndexError:
            print(f"Rede: {item}, Sem senha")