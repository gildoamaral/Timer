
//PRIMEIRO: Pegar setores do HTML
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//SEGUNDO: Formatar .relogio de forma que exiba formatação de H:M:S
//obs: ele vai aparecer formatado independente do que estiver no .relogio (sendo assim, o que está escrito no .relogio é apenas um placeholder)
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}

//TERCEIRO: Definir a função contador e seta-la
let segundos = 0;
let timer;
function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);

}




//QUARTO: Chamar a função
iniciar.addEventListener('click', function (event) {
  clearInterval(timer);
  relogio.style.color = "black";
  //poderia ter criado uma class no CSS 'pausado' e usado relogio.classList.remove('pausado')
  iniciaRelogio();
});

//Pausa a função
pausar.addEventListener('click', function (event) {
  clearInterval(timer);
  relogio.style.color = "red";
  //poderia ter criado uma class no CSS 'pausado' e usado relogio.classList.add('pausado')
});

//Zera o intervalo
zerar.addEventListener('click', function (event) {
  clearInterval(timer);
  segundos = 0
  relogio.innerHTML = criaHoraDosSegundos(segundos);
  relogio.style.color = "black";
});





//QUARTO: Modo alternativo
//obs.: dessa forma, nem são necessários os botões que peguei com querySelector

// document.addEventListener('click', function(e) {
//   const elemento = e.target; //.target diz qual elemento está sendo clicado, salvando ele no elemento.

//   if (elemento.classList.contains('zerar')) { //"se a constante 'elemento' conter a classe 'zerar'..."
//     clearInterval(timer);
//   segundos = 0
//   relogio.innerHTML = criaHoraDosSegundos(segundos);
//   relogio.style.color = "black";
//   }

//   if (elemento.classList.contains('pausar')) {
//     clearInterval(timer);
//   relogio.style.color = "red";
//   }

//   if (elemento.classList.contains('iniciar')) {
//     clearInterval(timer);
//   relogio.style.color = "black";
//   iniciaRelogio();
//   }
// })



//NOTA: Poderia pegar tudo isso e jogar numa função, de forma que não tocasse o escopo global (tabu de programador, pelo visto)