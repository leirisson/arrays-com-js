const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
const allBtns = document.querySelectorAll('.btn');

allBtns.forEach(btn => btn.addEventListener('click',filtrarLivros));


function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    console.log(elementoBtn)
    const categoria = elementoBtn.value

   
}

export default filtrarLivros;