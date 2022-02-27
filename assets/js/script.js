// selecionando UL(lista)
const listaOpcoe = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

// adicionando escutador de eventos
listaOpcoe.addEventListener("click", indentificarOpcoes)

// executando ação depois do clique
function indentificarOpcoes(event){

    // identificando onde ocorreu o clique
    const elemento = event.target 

    // verificando se é um LI
    if(event.target.tagName == "LI"){

        // recuperando o id
        const id = elemento.id

        //  selecionando uma seção utilizando o ID (escolha do usuário)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        // removendo classe mostrar
       removeClasseMostrar()

    //    adicionar uma classe
       secaoEscolha.classList.add("mostrar")
    }
}
// função para remover as classes das divs
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}

var btn = document.querySelector('#olho-botao');
var container = document.querySelector('.secaoDetalhesConta_sobreSaldo--valor p');

btn.addEventListener('click', function() {
    if(.secaoDetalhesConta_sobreSaldo--valor p.style.display === 'block') {
      .secaoDetalhesConta_sobreSaldo--valor p.style.display = 'none';
    } else {
        .secaoDetalhesConta_sobreSaldo--valor p.style.display = 'block';

    }
    
});