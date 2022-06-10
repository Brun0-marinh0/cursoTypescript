// boolean
let isOpen: boolean
isOpen = true

// string
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ["oi", "tchau"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, "oi"]

// enum para por nomes mais claros em valores...um apelido
enum Colors {
    white = '#fff',
    black = '#000'
}

// any ;-;
let coisa: any
coisa = [1]

// void(vazio)
function logger(){
    console.log('foo')
}

// null / undefined
type bla = string | undefined

// never 
function error(): never{
    throw new Error('error')
}

// object
let cart: object
cart = {
    key: 'fi'
}

// Type Inference
let message2 = "mensagem definida"
message2 = "string nova"

window.addEventListener("click", (e) => {
    console.log(e.target)
})