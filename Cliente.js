let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear() + 1;
let dataCompleta = dia + "/" + mes + "/" + ano;
 

const clientePerfil = {
    nome: "Lucia",
    endereço: "Rua dois, N° 52",
    senhaCliente: "5252ana",
    animal: null,
    autenticado: null
}

const animal1 = {
    nome: "Bolina",
    tipoAnimal: "Cachorro",
    vacinasJaAplicadas: ["Leishmaniose", "Giárdia", "Gripe canina"],
    vacinasAgendadas: ["Antirrábica" , "V10"],
    dono: null
}


const animal2 = {
    nome: "Garfield",
    tipoAnimal: "Gato",
    vacinasJaAplicadas: ["V3", "v5 "],
    vacinasAgendadas: ["v4"],
    dono: "Lucia"
}


function adicionarAnimal(cliente, animal){
    cliente.animal = animal;
    animal.dono = cliente;
}


adicionarAnimal(clientePerfil, animal1);


function loginCliente(cliente , senha){
    if(senha == cliente.senhaCliente){
        cliente.autenticado = true;
    }else{
        cliente.autenticado = false;
    }
}


function listarHistoricoVacinas(cliente, animal){
    if(animal.vacinasJaAplicadas != null && cliente.autenticado){

        const vacinas = animal.vacinasJaAplicadas; 
        console.log(`O(a) ${animal.nome} recebeu as seguintes vacinas: \n ${vacinas}`);

        lembreteDeVacinas(animal1);

        if(animal.vacinasAgendadas != null){
            const proximasVacinas = animal.vacinasAgendadas
            console.log(`As seguintes vacinas estão agendadas: ${proximasVacinas}`);
        }
        
    }else if(cliente.autenticado && animal.vacinasJaAplicadas == null ){
        console.log("Não há vacinas no histórico");

    }else{
        console.log("É preciso estar logado para consultar histórico")
    }
    
}

function lembreteDeVacinas(animal){
    const vacina = animal.vacinasJaAplicadas;

    vacina.map(element => {
        console.log(`A vacina ${element} deve ser aplicada 1 vez no ano -> Próxima dose está prevista para ${dataCompleta}`) //por um date aq
    });

 
}

loginCliente(clientePerfil, "5252ana");
listarHistoricoVacinas(clientePerfil, animal1);


const fs = require('fs');
const dadosJSON = JSON.stringify(animal2);
const nomeDoArquivo = 'cadastroAnimal2.json';

fs.writeFile(nomeDoArquivo,dadosJSON,(err)=> {
    if(err) { console.error('ocoreu um erro na gravação', err);
    return;
    }
        console.log("Arquivo json criado");
    })

    