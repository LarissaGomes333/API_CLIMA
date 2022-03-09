
function temperatura() {
    var cidade = document.getElementById("cidade").value;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=e6d0f8c8a9bbcbef9f9953cefd2d966f`


    let info = {
        method: 'GET',
        MODE: 'cors',
        cache: 'default'
    }

    fetch(url, info)
        .then((response) => response.json())
        .then(data => preencher(data))
        .then((data) => console.log(data))

        .catch(erro => alert("Cidade não encontrada"))

    const preencher = (tempo) => {
        for (const campo in tempo) {
            document.getElementById("celsius").innerText = Math.floor(tempo.main.temp) + "°C"
            document.getElementById("info").innerText = tempo.weather[0].description.toUpperCase()
            console.log(tempo.weather[0].description)
        }
    }
    document.getElementById("nome").innerText = cidade
}

