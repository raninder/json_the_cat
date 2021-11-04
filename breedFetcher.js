const request = require('request');
const args = process.argv;
const breedName = args[2];
url = "https://api.thecatapi.com/v1/breeds/search?q="
newURL = url+breedName;
console.log(newURL);
request(newURL, (error, response, body) => {
    if(error) {
        console.log("error:" ,error );
    }
    else {
    let data = JSON.parse(body);
    
    if(data.length) {
        let data = JSON.parse(body);
        console.log(data[0].description);
        
    }
    else {
        console.log('Breed not found');
     }
    }
});