/*
    This - this

    this em inglês significa => este, esta, isto...

    No Javascript, o this faz referência.

    Node => module.exports
    web => window

    Escopo:
        => Global => Quando começamos a escrever nossa aplicação.
            no contexto global, o this faz referência  ao objeto global.
            que é o objeto window no navegador de internetou ao objeto global no Node.js.

        => Local => Por exemplo, dentro de uma função:
        */

        const name = 'Marlon' // escopo global

        const person = {
            name: 'Marlon',
            age: 29,
            talk: function(){
                console.log(this.name)
            }
        }

        


person.talk()