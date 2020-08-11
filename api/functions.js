const API_TOKEN = "6d991e78b8msh69c679f3d407ba3p1d8966jsna6f58b6b7240"


export function getCoes(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      
    fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
          
            console.log(err);
        });

}

export function getStatistics(){
    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "6d991e78b8msh69c679f3d407ba3p1d8966jsna6f58b6b7240"
        }
    })
    .then(response => response.json())
    .catch(err => {
        console.log(err);
    });
}

export function getCountries(){

    return fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "6d991e78b8msh69c679f3d407ba3p1d8966jsna6f58b6b7240"
        }
    })
    .then(response => response.json())
    .catch(err => err);

}