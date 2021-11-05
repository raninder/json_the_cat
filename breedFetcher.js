const request = require('request');



const fetchBreedDescription = function (breedName, callback) {
    const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

    request(url, (error, response, body) => {
        if (error) {
            callback(error, null);
        }
        else {
            let data = JSON.parse(body);
            let breed = data[0];
            // if(data.length) {
            //     let data = JSON.parse(body);
            //     console.log(data[0].description); 
            // }
            // else {
            //     console.log('Breed not found');
            //  }
            //console.log(data);
            if (breed) {
                callback(null, breed.description);
            }
            else {
                callback("breed not found", null);
            }
        }
    });
}
module.exports = { fetchBreedDescription };