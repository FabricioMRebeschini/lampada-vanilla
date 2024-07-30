const imagem = document.querySelector('#imagem');
const ligar = document.querySelector('#ligar');
const desligar = document.querySelector('#desligar');
const quebrar = document.querySelector('#quebrar');
const aviso = document.querySelector('.aviso')
let isBroke = false;



function turnOn(){
    if(isBroke !== true){
        imagem.src ='img/ligada-semfundo.png'
        document.body.style.backgroundColor = 'white'
    }

}

function turnOff(){
    if(isBroke !== true){
        imagem.src = 'img/desligada-semfundo.png'
        ligar.style.backgroundColor = '#ccc'
        document.body.style.backgroundColor = '#ccc'
    }
    
}

function broken(){
    imagem.src = 'img/quebrada-semfundo.png'
    document.body.style.backgroundColor = '#ccc'
    const audio = document.querySelector('audio')
    audio.play()
    isBroke = true;
    if(isBroke){
        aviso.style.display = 'flex'
    }


}


ligar.addEventListener('click',turnOn)
desligar.addEventListener('click',turnOff)
quebrar.addEventListener('click',broken)
//quando mause tiver em cima
imagem.addEventListener('mouseover',turnOn)
//quando touch mobile
imagem.addEventListener('touchstart',turnOn)
// se não tiver em cima 
imagem.addEventListener('mouseleave',turnOff)
//touch mobile
imagem.addEventListener('touchend',turnOff)
//duplo click
imagem.addEventListener('dblclick',broken)