const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
import aplicarDesconto from './_2_metodoMap.js';
import exibirosLivrosNaTela from './_1_metodoForEach.js';

let livros = []

async function getBuscarLivrosDaAPi(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);
    exibirosLivrosNaTela(livrosComDesconto);
};





getBuscarLivrosDaAPi();