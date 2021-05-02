let starwars_data = 
[
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/"
        ],
        "species": [
            "https://swapi.dev/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "http://swapi.dev/api/people/2/"
    },
    {
        "name": "Obi-Wan Kenobi", 
        "height": "182", 
        "mass": "77", 
        "hair_color": "auburn, white", 
        "skin_color": "fair", 
        "eye_color": "blue-gray", 
        "birth_year": "57BBY", 
        "gender": "male", 
        "homeworld": "http://swapi.dev/api/planets/20/", 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/", 
            "http://swapi.dev/api/films/4/", 
            "http://swapi.dev/api/films/5/", 
            "http://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [
            "http://swapi.dev/api/vehicles/38/"
        ], 
        "starships": [
            "http://swapi.dev/api/starships/48/", 
            "http://swapi.dev/api/starships/59/", 
            "http://swapi.dev/api/starships/64/", 
            "http://swapi.dev/api/starships/65/", 
            "http://swapi.dev/api/starships/74/"
        ], 
        "created": "2014-12-10T16:16:29.192000Z", 
        "edited": "2014-12-20T21:17:50.325000Z", 
        "url": "http://swapi.dev/api/people/10/"
    }
]

document.getElementById('submit').addEventListener("click", e => {
    e.preventDefault();
    extract(0, document.getElementById('input1').value);
});

document.getElementById('submit2').addEventListener("click", e => {
    e.preventDefault();
    extractMany(document.getElementById('select').value, "name", "height", "mass");
    console.log("CLICK");
});

function extract(index, property) {
    document.getElementById('property').textContent = "";
    console.log("Data: " + starwars_data[index][property])
    document.getElementById('property').textContent = starwars_data[index][property];
}

function extractMany(index, ...properties) {
    document.getElementById('property2').textContent = "";

    for(let i = 0; i < properties.length; i++) {
        if(properties[i] == "name") {
            document.getElementById('property2').textContent += "Name: " + starwars_data[index][properties[i]] + " ";
            console.log("TEST");
        }

        if(properties[i] == "height") {
            document.getElementById('property2').textContent += "Height: " + starwars_data[index][properties[i]] + " ";
        }

        if(properties[i] == "mass") {
            document.getElementById('property2').textContent += "Mass: " + starwars_data[index][properties[i]] + " ";
        }
    }
}