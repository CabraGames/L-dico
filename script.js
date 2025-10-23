const nxt = document.querySelectorAll('.btn-next')

nxt.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const nxtStep = 'step-' + this.getAtributte('data-next')

        atual.classList.remove('.ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})