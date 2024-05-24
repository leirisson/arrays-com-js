let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


import exibirosLivrosNaTela from './_1_metodoForEach.js';
import aplicarDesconto from './_2_metodoMap.js'
import filtrarLivros from './_3_metodoFilter.js';


async function getBuscarLivrosDaAPi(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);
    exibirosLivrosNaTela(livrosComDesconto);
   
};


getBuscarLivrosDaAPi();