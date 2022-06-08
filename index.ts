const input1 = document.getElementById('numb1') as HTMLInputElement;
const input2 = document.getElementById('numb1') as HTMLInputElement;
const button = document.getElementById('button')!;

function sum(a: number, b: number){
    return a + b
}

button.addEventListener("click", () => {
    console.log(Number(input1.value), Number(input2.value))
})