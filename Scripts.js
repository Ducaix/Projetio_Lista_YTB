const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task')

let minhaLista = [];



function adicionarNovaTarefa(){
    minhaLista.push({
        tarefa: input.value,
        status: false
    });

    input.value = ''

    MostrarTarefas();
}

function MostrarTarefas(){

    let novaLi = ''

    minhaLista.forEach(( item, posicao) => {
        novaLi = novaLi + `
    <ul class="list-task" >
        <li class="task ${item.status && "done"}"> 
            <img src="./assets/checked.png" alt="" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./assets/trash.png" alt="" onclick="deletarItem(${posicao})">
        </li>

    </ul>
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista));
} 
function recarregarTarefas(){
    const tarefasDoLocal = localStorage.getItem('lista');
    if(tarefasDoLocal){
    minhaLista = JSON.parse(tarefasDoLocal);
    }

    MostrarTarefas();
}

function concluirTarefa(posicao){
    console.log(posicao);

    minhaLista[posicao].status = !minhaLista[posicao].status

    MostrarTarefas();
}

function deletarItem(posicao){
    console.log(posicao);
    minhaLista.splice(posicao,1);
    MostrarTarefas();
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);