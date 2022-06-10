"use strict";
// boolean
let isOpen;
isOpen = true;
// string
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ["oi", "tchau"];
let values;
values = [1, 2, 3];
// tuple
let title;
title = [1, "oi"];
// enum para por nomes mais claros em valores...um apelido
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any ;-;
let coisa;
coisa = [1];
// void(vazio)
function logger() {
    console.log('foo');
}
// never 
function error() {
    throw new Error('error');
}
// object
let cart;
cart = {
    key: 'fi'
};
// Type Inference
let message2 = "mensagem definida";
message2 = "string nova";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
