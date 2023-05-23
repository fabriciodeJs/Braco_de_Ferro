const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const saida = document.querySelector('#slide');

const carrosel = [img1, img2, img3, img4];
var posicao = 0;

function exebirImg() {
  img1.style.display = 'none'
  img2.style.display = 'none'
  img3.style.display = 'none'
  img4.style.display = 'none'

  carrosel[posicao].style.display = 'block';

  posicao = (posicao + 1) % carrosel.length 
  
}
setInterval(exebirImg, 3000);

const list = document.querySelectorAll('.menu');

function ativarLink() {
  list.forEach((item) => {
    item.classList.remove('ativo');
    this.classList.add('ativo');
  });
}

list.forEach((item) => item.addEventListener('click', ativarLink));
