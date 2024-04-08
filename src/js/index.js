/*
  Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML
    
    Passo 1 - Pegar o botão MOSTRAR MAIS no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - Identificar o clique no botão

    Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

  Objetivo 2 - esconder o botão de MOSTRAR MAIS

    Passo 1 - Pegar o botão e esconder ele
*/

// Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML
//    Passo 1 - Pegar o botão MOSTRAR MAIS no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos =  document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
  //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
  mostrarMaisProjetos();
  //    Objetivo 2 - esconder o botão de MOSTRAR MAIS
  //       Passo 1 - Pegar o botão e esconder ele
  esconderBotao();
});

function esconderBotao() {
  botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });
}

