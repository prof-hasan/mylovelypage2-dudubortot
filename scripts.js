document.getElementById('voltar-topo').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('botao-secreto').onclick = function() {
          var galeria = document.getElementById('galeria');
          galeria.style.display = galeria.style.display === 'none' ? 'block' : 'none';
        };