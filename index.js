function get(){
    fetch("https://frontendnina-aa49.restdb.io/rest/movies?max=100", {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5e9604dd436377171a0c23a6",
            "cache-control": "no-cache"
        }
    })
    .then(e => e.json())
    .then(showMovies);
    
}

function showMovies(data){
    data.forEach(showMovie)
    console.log(data)
}
function showMovie(movie){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    const parent = document.querySelector("main");
    const img = movie.image;
    console.log(img);
    //const imgId = movie._embedded[].image;
   
    copy.querySelector("h1").textContent = movie.title;
    copy.querySelector("h2").textContent = movie.tagline;
    copy.querySelector("h3").textContent = movie.genre;
    copy.querySelector(".rating").textContent = movie.rating;
    copy.querySelector("ul").textContent = movie.rating;
    copy.querySelector(".year").textContent = movie.year;

   // const img = copy.querySelector("img.Image");

   // img.setAttribute("src", movie.image);
   // copy.querySelector("img.Image").src = movie.img;
   
    copy.querySelector("img.Image").src = img;

    parent.appendChild(copy);
    
}

get();
