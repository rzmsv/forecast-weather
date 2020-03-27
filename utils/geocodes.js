const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicmV6YWFhYTE5ODkiLCJhIjoiY2s4NmVvMWhtMDQxczNtcHJzY2wxNHJkayJ9.QJrwmZ4yQpGk-pt1mkqSLA'
    
    request(url,(error,response)=>{
        const dataParse = JSON.parse(response.body)
        if (error){
            callback('unable to connect to location servisces.',undefined)
        }
        else if (dataParse.features.length===0){
            callback('Unable to find location. please try another search.',undefined)
        }
        else{
            callback(undefined,{
                location : dataParse.features[0].place_name,
                latitude : dataParse.features[0].center[0],
                longitude : dataParse.features[0].center[1]
            })
        }
    })

}


module.exports = geocode