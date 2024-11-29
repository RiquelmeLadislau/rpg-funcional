let option
let inventory = []

let name = prompt(`Digite o nome do seu personagem`)
do{
alert(`Bem vindo, aqui é meu projeto de um rpg funcional!!`)
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