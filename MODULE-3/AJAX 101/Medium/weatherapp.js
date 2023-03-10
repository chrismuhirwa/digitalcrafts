fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=1990269595ed358fea1e3a0cac71caa5&units=imperial"
)

    .then(response => response.json())
    .then(body => {
        document.getElementById("weather").innerHTML = body.main.temp + "°";
    })
    .catch(error => alert("Please add your api key to the fetch url"));