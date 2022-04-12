const movies = [
    { title: "Hope", director:"Ravi"},
    { title: "The Empire",director:"Rahul"}
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie, callback){
setTimeout(() => {
    movies.push(movie);
    callback();
}, 2000);
}


createMovies({ title: "Return", director:"Shree"}, getMovies);