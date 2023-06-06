const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM'
  }
};

fetch(url, options)
  .then(res => res.json())
    .then(json => {
        if (json.results.length >= 1) {
          const randomMovie = getRandom(1, 20)
          const data = json.results[randomMovie]
          const createdMarkup = createMarkup( {data});
           upcomingRender.insertAdjacentHTML('beforeend', createdMarkup);
          //createMarkup(data);
          console.log(data.title)
          console.log(data.overview)
        console.log(json.results.length);
      }console.log(json)
    })
  .catch(err => console.error('error:' + err));
  
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log (getRandom(1,20))   
const upcomingRender = document.querySelector(".container-upcoming");


function createMarkup( {data} )
{ 
  return `<div class="upcoming-card">
 <div class="upcoming-foto">
<picture class="upcoming-load-foto">
      <source srcset="https://image.tmdb.org/t/p/original/${data.backdrop_path}" media="(min-width: 1200px)" class="upcoming-foto-desktop" loading="lazy"/>
      <source srcset="https://image.tmdb.org/t/p/original/${data.backdrop_path}" media="(min-width: 768px)" class="upcoming-foto-tablet" loading="lazy"/>
      <source srcset="https://image.tmdb.org/t/p/original/${data.poster_path}" media="(min-width: 320px)" class="upcoming-foto-mobile" loading="lazy"/>
      <img src="./images/12364241.jpg" alt="wwwwww" style="" loading="lazy"/>
    </picture>
</div>
  </div>
  <div class="upcoming-info">
          <h2 class="upcoming-title-film">${data.title}</h2>
 <div class="upcoming-movie">
                <div class="upcoming-info-left">
                    <div class="upcoming-release">
                        <ul class="upcoming-ul-text">
                        <div class="upcoming-colomb">
                         <li class="upcoming-li-text"><p class="upcoming-text"> <span class ="upcoming-black">Release date</span> <span class="">${data.release_date}</span></p></li>
                        <li class="upcoming-li-text"><p class="upcoming-text"><span class ="upcoming-black">Vote/Votes</span>
<div class="upcoming-info-votes"><span class="upcoming-white">${data.vote_average}</span> <span
                                class="slash">/</span>
                            <span class="upcoming-white">
                               ${data.vote_count}</span> </div> </p></li>
                        </div>
                        <div>
                        <li class="upcoming-li-text"> <p class="upcoming-text"> <span class ="upcoming-black">Popularity</span> <span class="">${data.popularity}</span> </p></li>
                        <li class="upcoming-li-text"> <p class="upcoming-text"><span class ="upcoming-black">Genre</span> <span class="">${data.genreNames}</span> </p></li>
                        </ul>
                        </div>
            <h2 class="upcoming-about">ABOUT</h2>
            <p class="upcoming-overview">${data.overview}</p>
            <button class="upcoming-button" type="button">Add to Library</button>
        </div>`;

}