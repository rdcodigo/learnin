let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL"

fetch (url).then(
    (res)=>{
        return res.json()
    }
).then(
    (data)=>{
        console.log(data)
    }
)