/*
    1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela
    2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                Ele irá VERIFICAR ANTES DE CADA ITERAÇÃO
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta
    
        for ([inicialização]; [condição]; [expressão final])
            seu código aqui

*/

// for(let i = 0; i < 15; i++){
//     console.log(i)
// }

const users = ['maria', 'joão', 'tiago', 'pedro', 'maria', 'joão', 'tiago', 'pedro', 'maria', 'joão', 'tiago', 'pedro',] // lenght é o tamanho do array nesse caso 13

for(let i=0; i < users.length; i++){
    console.log(users[i])
}