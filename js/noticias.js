let containerNoticias = document.querySelector ("#listaDeNoticias");
//let containerCarrosel = document.querySelector ("#carrosselDeNoticias");
async function getNoticias() {
    let resposta = await fetch ("http://newsapi.org/v2/top-headlines?apiKey=f3cc6c8c530a4a9c814ab1807c454a18&country=br");

    let noticias = await resposta.json();

    //for (let j=0; j < 3; j++) {
    //  let noticia = noticias.articles[j];
      //let carroselNoticia = `
      //<div class="carousel-inner">
        //<div class="carousel-item active">
          //<img class="d-block w-100" src="${noticia.urlToImage}" alt="Primeiro Slide">
          //<div class="carousel-caption d-none d-md-block">
            //<h5>${noticia.title}</h5>
            //<p>${noticia.description}</p>
            //<a href="${noticia.url}">Notícia completa</a>
          //</div>
        //</div>
      //</div>
      //`;
      //containerCarrosel.innerHTML += carroselNoticia;
    //}
    

    for (let i = 0; i< noticias.articles.length; i++) {
        let noticia = noticias.articles[i];

        let cardNoticia = `
        <div class="col-md-3 mb-3">   
                <div class="card" style="height:700px">
                    <img src="${noticia.urlToImage}" 
                    class="card-img-top" alt="...">
                    
                    <div class="card-body">
                      <h5 class="card-title">${noticia.title}</h5>
                      <p class="card-text" ">${noticia.description}</p>
                    </div>
                    <div class="card-footer">
                      <a href="${noticia.url}" class="btn btn-primary">Ver notícia completa</a>
                    </div>
                    
                </div>
            </div> 
        `;
        containerNoticias.innerHTML += cardNoticia;
    }
}

getNoticias();