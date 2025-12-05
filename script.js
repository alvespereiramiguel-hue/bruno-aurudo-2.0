const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe 'ativo' do passo atual
        if (atual) {
            atual.classList.remove('ativo');
        }

        // Adiciona a classe 'ativo' ao próximo passo
        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        }
    })
})