menu = ''
let user = prompt(`Nome do seu personagem`)

function character(user){
    const user = {
        name: prompt(`digite o nome do seu personagem`),
        gender: prompt(`Qual o gênero dele?`),
        inventory: prompt(`Escolha`)
    }
}

do{
 menu = prompt(`Bem vindo ${user}, este é um rpg funcional de multiplas escolhas \n 1-Personalize seu personagem\n 2- se aventurar\n 3- sair e excluir tudo`)

switch(menu){
    case '1':
        character()
    case '2':
    case '3':
        alert(`Você escoljeu sair`)
    default:
        alert(`opção inválida`)



    }
}
while(menu !== '3')