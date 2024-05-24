const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
const btns = document.querySelectorAll('.btn');

btns.forEach(botao => botao.addEventListener('click', ))

btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivrosDeFront(livros){
    let livrosFiltrados = livros.filter(livros => livros.categoria == 'frontd-end')
    console.table(livrosFiltrados)
}

export default filtrarLivrosDeFront;