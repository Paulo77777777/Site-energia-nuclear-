
var altura;
var largura;

function tamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

tamanhoTela();

if (altura > 762 && largura > 384 ) {
    var usina = document.getElementById('usina');
    usina.style.width = "60%";
}

//game 2 inicio

var atomo = document.querySelector('.atomo');
var atomo1 = document.querySelector('.atomo1');
var atomo2 = document.querySelector('.atomo2');
var energia = document.querySelector('.energia');
var neutron = document.querySelector('.neutron1');

if (atomo && atomo1 && atomo2) {
  function empurrar_atomo () {
    
    // Resetar estados iniciais antes de começar a nova animação
    atomo.classList.remove('andar');
    atomo1.classList.remove('andar1');
    atomo2.classList.remove('andar2');
    atomo1.classList.remove('parar');
    atomo2.classList.remove('parar'); 
    energia.classList.remove('explosao');
    // Forçar reflow para garantir que as classes sejam removidas antes de adicionar novamente
    void atomo.offsetWidth;

    atomo.classList.add('andar');
    
    
    
    var intervalId = setInterval(() => {
    var atomoPosition = atomo.offsetLeft;
      if (atomoPosition >= 125) {
        
        atomo1.classList.add('parar');
        atomo2.classList.add('parar');
        
        energia.classList.add('explosao');
        
        setTimeout(() => {
        atomo1.classList.remove('parar');
        atomo2.classList.remove('parar');  
        
        atomo1.classList.add('andar1');
        atomo2.classList.add('andar2');
        neutron.classList.add('neu');
        
        energia.classList.remove('explosao');
        
        neutron.classList.add('neu');
        
        }, 2800);
        
        clearInterval(intervalId);  // Parar de verificar após a condição ser satisfeita
      }
    }, 100);  // Verifica a cada 100ms

    // Remover a classe 'andar' após 5 segundos
    setTimeout(() => {
      atomo.classList.remove('andar');
      neutron.classList.remove('neu');
     
    }, 5000);
    
  }
}


//game 2 fim
//game 1 inicio
const particles = document.querySelectorAll('.particle');
const dropZones = document.querySelectorAll('.drop-zone');

particles.forEach(particle => {
    particle.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.className);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const particle = document.querySelector(`.${data.split(' ')[1]}`);
    event.target.appendChild(particle);
    checkSuccess();
}

function checkSuccess() {
    const nucleus = document.querySelector('#nucleu');
    const orbit = document.querySelector('#orbita');
    
    const protonsInNucleus = nucleus.querySelectorAll('.proton').length;
    const neutronsInNucleus = nucleus.querySelectorAll('.neutron').length;
    const electronsInOrbit = orbit.querySelectorAll('.electron').length;
    
    if (protonsInNucleus > 0 && neutronsInNucleus > 0 && electronsInOrbit > 0) {
        nucleus.classList.add('success');
        orbit.classList.add('success');
    }
}
//game 1 fim