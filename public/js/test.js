//document.querySelector("body > div.popular_films")


//**************************************************************************
//                              TMDB API
//**************************************************************************

//Fetch popular movies
let movies = [];
const fetchMovie = async () => {
    await fetch("http://api.themoviedb.org/3/movie/popular/?api_key=84483b5fbf72908a4d3869434376a6ba&language=fr&page=1")
    .then((res) => res.json())
    .then((data) => movies =data.results);

    console.log(movies);
    
};
//Movie Display
const movieDisplay = async () => {
  await  fetchMovie();
  //Parser la date
  const dateParser = (date) => {
      let newDate = new Date(date).toLocaleDateString("fr-FR", {
          year: "numeric",
        //   month: "long",
        //   day: "numeric",
      });
      return newDate;
  }
  //Injection de l'inner html dans le Dom
  document.querySelector(".wrapper-flex").innerHTML = movies.map(
        (movie) =>
    `  
        
        <div class="container_cards">
        <div class='banner-img'>
        <img src="https://www.themoviedb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}">
        </div>
        <div class="rate">${movie.vote_average}</div>
        <p class="name">${movie.title}</p>
        <p class="description">${dateParser(movie.release_date)}</p>
            <a href="#modalA" class="modal-open">
                        en savoir plus
            </a>
    
  
    </div>
       <section class="modal bg--purple" role="dialog" id="modalA" aria-labelledby="modalA-title" aria-describedby="modalA-description">
            <a href="#" class="modal-exit" title="close">&times;</a>
            <p id="modalA-description" class="modal-description">test</p>
        </section>
     
    `
    //retirer les virhules
    ).join("");
};
movieDisplay();


//Fetch popular movies
let movies2 = [];
const fetchMovie2 = async () => {
    await fetch("http://api.themoviedb.org/3/movie/top_rated/?api_key=84483b5fbf72908a4d3869434376a6ba&language=fr&page=1")
    .then((res) => res.json())
    .then((data) => movies2 =data.results);

    console.log(movies2);
    
};
//Movie Display
const movieDisplay2 = async () => {
  await  fetchMovie2();
  //Parser la date
  const dateParser = (date) => {
      let newDate = new Date(date).toLocaleDateString("fr-FR", {
          year: "numeric",
        //   month: "long",
        //   day: "numeric",
      });
      return newDate;
  }
  //Injection de l'inner html dans le Dom
  document.querySelector(".wrapper-flex2").innerHTML = movies2.map(
        (movie2) =>
    `  
        
        <div class="container_cards">
        <div class='banner-img'>
        <img src="https://www.themoviedb.org/t/p/w1280${movie2.poster_path}" alt="${movie2.title}">
        </div>
        <div class="rate">${movie2.vote_average}</div>
        <p class="name">${movie2.title}</p>
        <p class="description">${dateParser(movie2.release_date)}</p>
            <a href="#modalA" class="modal-open">
                        en savoir plus
            </a>
    
  
    </div>
       <section class="modal bg--purple" role="dialog" id="modalA" aria-labelledby="modalA-title" aria-describedby="modalA-description">
            <a href="#" class="modal-exit" title="close">&times;</a>
            <p id="modalA-description" class="modal-description">test</p>
        </section>
     
    `
    //retirer les virhules
    ).join("");
};
movieDisplay2();

