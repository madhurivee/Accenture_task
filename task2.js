/**
 * To-do:
    1)	Print the city for lat/long 51.5074 and 0.1278 in console
    2)	Print the weather for lat/long 51.5074 and 0.1278
    3)	Print the weather and currency for a given city (London)
 */

class Provider {
    static getWeather(city) {
        return Promise.resolve(`The weather of ${city} is Cloudy`)
    }

    static getLocalCurrency(city) {
        return Promise.resolve(`The local currency of ${city} is GBP`)
    }

    static findCity(long, lat) { 
        return Promise.resolve(`London`)
    }
}
const locator = async (long, lat) => {
    
    const city = await Provider.findCity(long, lat)
    console.log(`City is ${city}. Long: ${long} Lat: ${lat}`)
    
    console.log(await Provider.getWeather(city))
    console.log(await Provider.getLocalCurrency(city))
}

locator(51.5074, 0.1278)
