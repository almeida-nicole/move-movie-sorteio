const button = document.querySelector('.filmes__sortear');
const form = document.querySelector('.filmes__form');
const tituloEscolhido = document.querySelector('.filmes__titulo-escolhido');
const filmesBox = document.querySelector('.filmes__sorteado');
const buttonResetSorteio = document.querySelector('.filmes__reset')

form.addEventListener('submit', function(e){
e.preventDefault();
// pegar os filmes
const filmes = getFilmes();
// sortear os filmes
const filmeSorteado = sorteiaFilme(filmes);
// sumir com os inputs e mostrar o filme escolhido
mostrarFilmeEscolhido(filmeSorteado);

});

buttonResetSorteio.addEventListener('click', function(ev){
resetSorteio();
form.classList.remove('is-hidden');

})


function sorteiaNumero(numero) {
  return Math.ceil(Math.random() * numero);
}

function mostrarFilmeEscolhido(filme) {
  tituloEscolhido.textContent = filme;
  form.classList.add('is-hidden');
  filmesBox.classList.remove('is-hidden');
}

function getFilmes() {
  let filmes = [];
  document.querySelectorAll('.filmes__input').forEach(filme => {
    if(filme.value.length > 0){
      filmes.push(filme)
    }
  });
  return filmes;
}

function sorteiaFilme(filmes) {
  return filmes[sorteiaNumero(filmes.length) - 1].value;
}

function resetSorteio() {
  const filmesPreenchidos = document.querySelectorAll('.filmes__input');
  filmesPreenchidos = [];
  return filmesPreenchidos;
}