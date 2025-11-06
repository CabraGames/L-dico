const nxt = document.querySelectorAll('.btn-nxt');

nxt.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'step-' + this.getAttribute('data-nxt')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    
    })
})
