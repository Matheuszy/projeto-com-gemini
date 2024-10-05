function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if(!campoPesquisa) {
        section.innerHTML = 'Nenhum filme ou série foi encontrado';
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = '';
    let titulo = '';
    let sinopse = '';

    // Itera sobre cada item de dado
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        sinopse = dado.sinopse.toLocaleLowerCase();
        if (dado.titulo.includes(campoPesquisa) || dado.sinopse.includes(campoPesquisa)) {
            // Constrói o HTML para cada item de resultado
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.sinopse}</p>
          <a href=${dado.links} target="_blank">Assista ao filme</a>
        </div>
      `;
        }
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

