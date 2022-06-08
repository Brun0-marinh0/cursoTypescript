var input1 = document.getElementById('numb1');
var input2 = document.getElementById('numb1');
var button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(Number(input1.value), Number(input2.value));
});
