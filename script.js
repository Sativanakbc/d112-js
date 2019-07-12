// for(let i = 0; i <= 100; i+=2){
//     console.log(i)
// }

// for(let i = 0; i <= 100; i++){
//     i % 2 === 0 ? console.log(i) : null;
// }

// for(let i = 0; i < 100; i++){
//     console.log(i++)
// }

// let nomes = ['Rafael', 'Leonardo', 'Ana']
// for(let nome of nomes){
//     console.log(nome);
// }; // Exibes o nome do array NOMES

// for(let nome in nomes){
//     console.log(nome);
// }; // Exibe os índices de cada valor do array NOMES

let nomes = ['Rafael', 'Leonardo', 'Ana']
function procurarPalavra(busca){
    for(let nome of nomes){
        if(nome === busca){
            return true
        }
    }
    return false
}