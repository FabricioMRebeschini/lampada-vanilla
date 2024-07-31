const imagem = document.querySelector('#imagem');
const ligar = document.querySelector('#ligar');
const desligar = document.querySelector('#desligar');
const quebrar = document.querySelector('#quebrar');
const aviso = document.querySelector('.aviso')
let isBroke = false;

function resetAndPlayAudio(audio){
    //se nao estiver pausado
    if(!audio.paused){
        //pause
        audio.pause()
        //e reinicie o audio
        audio.currentTime = 0
    }
    //se não só executar o audio
    audio.play()
}

function turnOn(){
    if(isBroke !== true){
        imagem.src ='img/ligada-semfundo.png'
        document.body.style.backgroundColor = 'white'
        const ligar = document.querySelector('#interruptor')
        resetAndPlayAudio(ligar)

    }

}

function turnOff(){
    if(isBroke !== true){
        imagem.src = 'img/desligada-semfundo.png'
        const desligar = document.querySelector('#interruptor')
        resetAndPlayAudio(desligar)
        ligar.style.backgroundColor = '#ccc'
        document.body.style.backgroundColor = '#ccc'
    }
    
}

function broken(){
    imagem.src = 'img/quebrada-semfundo.png'
    document.body.style.backgroundColor = '#ccc'
    const audio = document.querySelector('#audioLampada')
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