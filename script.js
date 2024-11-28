let option
let inventory = {
    armor: [],
    sword: [],
    magicItems: [],
    bow: [],
    potions: []


}
let name = prompt(`Digite o nome do seu personagem`)

alert(`Bem vindo, aqui é meu projeto de um rpg funcional!!`)

function andar (){
    const walkAnyWay = prompt(`Você deseja andar para Qual lado ex:frente,trás,lado esquerdo,lado direito?`)
    if(walkAnyWay === 'frente'){
        alert(`você andou para frente`)
    
    } else if(walkAnyWay === 'trás'){
        alert(`você andou para trás`)
    } else if(walkAnyWay === 'lado esquerdo'){
        alert(`Você andou para o lado esquerdo`)
    } else {
        alert(`Você andou para o lado direito`)
    }
}
function inventory (){
    if(inventory.length === 0){
        alert(`Não há nada no seu inventário, ande para conseguir itens`)
    }
}
do{
    option = prompt(`Selecione uma das opções para o seu personagem 
        1- Andar
        2- Inventário
        3- Dados 
        4- Lista de ataques 
        5- Elementos 
        6- Inimigos descobertos
        7- Exit`)
    switch(option){
        case '1':
            andar()
            break
        case '2':
            break
        case '3':
            break
        case '4':
            break
        case '5':
            break
        case '6':
            break
        case '7':
            break
        default:
            alert(`Opção inválida`)
            break
    }
}while(option !== '7')