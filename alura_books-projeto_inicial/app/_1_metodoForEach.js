const sectionLivros = document.querySelector("#livros");


function exibirosLivrosNaTela(ListaDelivros){
    // usando forEach para criar elemento na tela 
    ListaDelivros.forEach(dadosDoLivro => {
        sectionLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${dadosDoLivro.imagem}" alt="${dadosDoLivro.alt}" />
        <h2 class="livro__titulo">
          ${dadosDoLivro.titulo}
        </h2>
        <p class="livro__descricao">Flávio Almeida</p>
        <p class="livro__preco" id="preco">R$${dadosDoLivro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${dadosDoLivro.categoria}</span>
        </div>
        </div>
        `
    });
}

export default exibirosLivrosNaTela