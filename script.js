key = "#######";
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) 
    {
        result.innerHTML = `<h3>Please Enter A Movie Name</h3>`;
    }
    else 
    {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response == "True") {
                    result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <h4>Rating : ${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>`;
                }
                else {
                    result.innerHTML = `<h3>${data.Error}</h3>`;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
