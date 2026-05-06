function getCountryByCode(code,callback){
    setTimeout(() => {
        callback(null,{code:code,name:"Rwanda"})
    }, 3000);
}

function getProvinces(country,callback){
    setTimeout(() => {
        const provinces = [
            {country:country, id:1, name:'West'},
            {country:country, id:2,name:"Kigali"},
        ]
        callback(null,provinces)
    }, 3000)
}

function getDistricts(province,callback){
    setTimeout(() => {
        const districts = [
            {province:province,id:1,name:'Nyabihu'},
            {province:province,id:2,name:"karongi"},
        ]
        callback(null,districts)
    }, 3000);
}
function getSectors(district,callback){
    setTimeout(() => {
        const sectors = [
            {district:district,id:1,name:"Mukamira"},
            {district:district,id:2,name:"rambura"},
        ]
        callback(null,sectors)
    }, 3000);
}

let myCountry
getCountryByCode(250,(error,country)=>{
    if(error)
        console.log(error)
    console.log(country)
    myCountry = country.name

    getProvinces(myCountry,(error,provinces) => {
        if(error)
            console.log(error)
        console.log(provinces)

        let west = provinces[0].name
        getDistricts(west,(error,districts) => {
            if(error)
                console.log(error)
            console.log(districts)

            let nyabihu = districts[0].name
            getSectors(nyabihu,(error,sectors) => {
                if(error)
                    console.log(error)
                console.log(sectors)
                
                // Exit after all callbacks complete
                process.exit(0)
            })
        })
    })
})

// Keep the process alive long enough for callbacks to complete
setTimeout(() => {
    console.log('Timeout reached - callbacks may not have completed')
    process.exit(1)
}, 15000) // 15 seconds should be enough for all 4 callbacks (4 * 3 seconds)