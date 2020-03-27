const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/721098d427504aaa34f98ebe78b35395/'+ latitude +','+ longitude 
    request(url,(error,response) => {
        const dataParse = JSON.parse(response.body)
        if(error){
            callback('Unable to connect to waether service',undefined)
        }else if(dataParse.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,'It is currently ' + dataParse.currently.temperature + ' degress out. There is a ' + dataParse.currently.precipProbability + '% chance of rain.' )
        }
    })
}
module.exports = forecast