// Filmek tömbje



const filmek = [
    {
      cím: "Hereditary",
      ev: 2018,
      mufaj: "Horror",
      kep: "/kepek/hereditary.jpg"
    },
    {
      cím: "Midsommar",
      ev: 2019,
      mufaj: "Horror",
      kep: "/gallery/midsommar.jpg"
    },
    {
      cím: "X",
      ev: 2017,
      mufaj: "Horror",
      kep: "/gallery/x.jpg"
    },
    {
      cím: "Brutalist",
      ev: 2024,
      mufaj: "Thriller",
      kep: "/gallery/brutalist.jpeg"
    },
    {
        cím: "Good Time",
        ev: 2017,
        mufaj: "Thriller",
        kep: "/kepek/good_time.jpg"
    },
    {
        cím: "The Witch",
        ev: 2015,
        mufaj: "horror",
        kep: "/gallery/witch.jpg"
    },
    {
        cím: "The Lighthouse",
        ev: 2019,
        mufaj: "Dráma",
        kep: "/kepek/lighthouse.jpg"
    },
    {
        cím: "Beau Is Afraid",
        ev: 2023,
        mufaj: "Comedy",
        kep: "/kepek/beau.jpeg"
    },
    {
        cím: "Everything everywhere all at once",
        ev: 2022,
        mufaj: "Comedy",
        kep: "/gallery/everything.jpg"
    },
  ]; 



function randomFilm() {
    const randomI = Math.floor(Math.random() *filmek.length);
    const film = filmek[randomI];
    document.getElementById("selected-film-cim").innerHTML = `Cím: ${film.cím}<br>`;
    document.getElementById("selected-film-ev").innerHTML = `Év: (${film.ev})`;
    document.getElementById("selected-film-mufaj").innerHTML = `Műfaj:${film.mufaj}`;
    document.getElementById("selected-film-img").src = film.kep;
    document.getElementById("random_t").style.border="3px solid black"
}


document.getElementById("random-film-btn").addEventListener("click",randomFilm)


