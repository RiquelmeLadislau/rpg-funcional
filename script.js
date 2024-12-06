menu = ''
let user = prompt(`Nome do usuario`)

function character(){
    const user = {
        name: prompt(`digite o nome do seu personagem`),
        gender: prompt(`Qual o gênero dele?`),
        inventory: prompt(`Escolha entre \n 1. arco \n2. espada \n3.escudo  `),
    }
}

function adventure(){
    const walk
    if (walk === true){
        
    }
}

do{
 menu = prompt(`Bem vindo ${user}, este é um rpg funcional de multiplas escolhas \n 1-Personalize seu personagem\n 2- se aventurar\n 3- sair e excluir tudo`)

switch(menu){
    case '1':
        character()
    case '2':
        adventure()
    case '3':
        alert(`Você escolheu sair`)
    default:
        alert(`opção inválida`)



    }
}
while(menu !== '3')