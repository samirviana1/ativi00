const botaoComecar = document.getElementById('btn_ir');

botaoComecar.addEventListener('click', () => {
  document.getElementById('description').style.display = 'none';
  setTimeout(() => {
    document.getElementById('divTable').style.display = 'block';
  }, 1000);
});

lerLocalStorage();


let valorBase = document.getElementById('valor_base');
let valorTransporte = document.getElementById('valor_transporte');
let valorAlimentacao = document.getElementById('valor_alimentacao');


let valorReceita = document.getElementById('valor_receita');



let valorAutomovel = document.getElementById('valor_automovel');
let faltas = document.getElementById('faltas');


let valorDesconto = document.getElementById('valor_descontos');


let valorTotal = document.getElementById('valor_total');


let botaoCalcular = document.getElementById('btn_calcular');

let listaInputsApp = document.getElementsByTagName('input');


botaoCalcular.addEventListener('click', calcular);

for (const elemento of listaInputsApp) {
  elemento.addEventListener('blur', calcular);
}



function calcular() {

  let totalReceitas =
    parseFloat(valorBase.value) +
    parseFloat(valorTransporte.value) +
    parseFloat(valorAlimentacao.value);
  
  valorReceita.value = totalReceitas;

  let totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);

  valorDesconto.value = totalDescontos;

  valorTotal.value = totalReceitas - totalDescontos;

  salvarLocalStorage();
}

function salvarLocalStorage() {
 
  let inputsCalculados = document.getElementsByTagName('input');
  for (const input of inputsCalculados) {
    console.log(input);
    localStorage.setItem(input.id, input.value);
  }
}

function lerLocalStorage() {
  let inputsCalculados = document.getElementsByTagName('input');
  for (const input of inputsCalculados) {
    console.log(input);
    let valorGetItemLocalStorage = localStorage.getItem(input.id);
    input.value = valorGetItemLocalStorage;
  }
}

