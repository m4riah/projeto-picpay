const listaOpcoe = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoe.addEventListener("click", indentificarOpcoes)

function indentificarOpcoes(event){

    const elemento = event.target 

    if(event.target.tagName == "LI"){

        const id = elemento.id
         console.log(id)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

       removeClasseMostrar()

       secaoEscolha.classList.add("mostrar")
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}