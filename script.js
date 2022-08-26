async function getData(){
    document.getElementById("container").innerHTML = ""
    await fetch("https://man-movies-api.herokuapp.com/movies")
    .then((res)=>res.json())
    .then((data1)=>data1.movies)
    .then((data)=>{console.log(data)
    data.forEach(ele => {

        document.getElementById("container").innerHTML+=`
        <div id="card">
        <img src=${ele.poster} alt=${ele.title}/>
        <h3>Title: ${ele.title} </h3>
        <h4>Released: ${ele.released}</h4>
        <p>Actor's: ${ele.actors}</p>
        <P>IMDG Rating: ${ele.imdbrating}</P>
        <p><b>Synopsis</b>: ${ele.plot}</p>
        <h6>id: ${ele._id}</h6>
    </div>
    `
        
    });
    })
}











async function postData(){

    var postMovie = document.getElementById("postmovie").value;

    await fetch("https://man-movies-api.herokuapp.com/movies",{
        method:'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            title: `${postMovie}`,
        })
    })
    .then(res=>res.json())
    .then((data)=>{console.log(data)})

    

    getData();

    var postMovie = null;

    
}



async function deleteData(){

    let deleteMovie = document.getElementById("deletemovie").value;


    let url = `https://man-movies-api.herokuapp.com/movies/${deleteMovie}`
    await fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

    

    getData();

    deleteMovie = null;

    

}






