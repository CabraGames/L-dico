const nxt = document.querySelectorAll('.btn-nxt');
const playBtn = document.getElementById('btn-play-5m')
const audio = document.getElementById('5m')
const vSlide = document.getElementById




nxt.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'step-' + this.getAttribute('data-nxt')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})