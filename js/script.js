// document.querySelector('.tecla_psh').onclick = tecla_psh;
// document.querySelector('.tecla_tic').onclick = tecla_tic;
// document.querySelector('.tecla_toim').onclick = tecla_toim ;
// document.querySelector('.tecla_splash').onclick = tecla_splash ;
// document.querySelector('.tecla_puff').onclick = tecla_puff;
// document.querySelector('.tecla_tim').onclick = tecla_tim;
// document.querySelector('.tecla_tom').onclick = tecla_tom;
// document.querySelector('.tecla_pom').onclick = tecla_pom;
// document.querySelector('.tecla_clap').onclick = tecla_Clap;

// function tecla_pom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// function tecla_Clap() {
//     document.querySelector('#som_tecla_clap').play();
// }

// function tecla_tim() {
//     document.querySelector('#som_tecla_tim').play();
// }

// function tecla_puff() {
//     document.querySelector('#som_tecla_puff').play();
// }

// function tecla_splash() {
//     document.querySelector('#som_tecla_splash').play();
// }

// function tecla_toim() {
//     document.querySelector('#som_tecla_toim').play();
// }

// function tecla_psh() {
//     document.querySelector('#som_tecla_psh').play();
// }

// function tecla_tic() {
//     document.querySelector('#som_tecla_tic').play();
// }

// function tecla_tom() {
//     document.querySelector('#som_tecla_tom').play();
// }

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


var listaDeTeclas = document.getElementsByClassName('tecla');
for (var i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`;
  
  //pega o clic da tela
  tecla.onclick= function(){
    tocaSom(idAudio);
  }

    tecla.onkeydown = function() {
         tecla.classList.add('Ativa')   
    }
    
}

