



var destination = {
    destinations: [
        {str: "Tokyo, Japan", val: "tokyo"},
        {str: "Paris, France", val: "paris"}
    ]
}

var content = {
    tokyo : [
        {
            name: "Akasaka",
            nid: "1645687",
            hasContent: true,
            image: "https://a1.cdn-hotels.com/cos/production166/d148/22b478f0-05c0-11e4-b02d-d89d672bfba8.jpg",
            description: "It's one of the commercial centers of Tokyo, which explains why Akasaka boasts a lion's share of swanky, upmarket hotels – many of which count as attractions in their own right. Chill out in their cocktail and Champagne bars, not to mention the wealth of restaurants serving everything from exquisite tempura dishes to traditional Japanese barbecue, or yakiniku. Prices can be high, but you can bag great deals at lunchtime.",
            tags: "Shopping, Food, Museums",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            center: {lat: 35.6794862140995, lng: 139.734433905381}, 
            polygon: [
                {lng: 139.722226, lat: 35.666941},
                {lng: 139.730487, lat: 35.668363},
                {lng: 139.73818, lat: 35.669198},
                {lng: 139.742897, lat: 35.670999},
                {lng: 139.752, lat: 35.689},
                {lng: 139.722, lat: 35.689},
                {lng: 139.722226, lat: 35.666941}
            ]
        }, 
        {
            name: "Asakusa",
            nid: "1645688",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production187/d78/23269bb0-05c0-11e4-b376-d89d672c79ac.jpg",
            description: "There's one major reason why Asakusa should be on your Tokyo to-do list: the ancient Buddhist temple Senso-Ji, which is the largest in the city and dates right back to 645 AD. Entering through the iconic Thunder Gate, you'll be dazzled by the Nakamise arcade, with its colorful stalls selling everything from kimonos to decorative fans. You can also admire Senso-Ji's ornate pagoda and the nearby Asakusa Shrine.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            tags: "Shopping, Food, Museums",
            center: {lat: 35.7252128673964, lng: 139.799428428791}, 
            polygon: [
                {lng: 139.790367, lat: 35.718657},
                {lng: 139.786532, lat: 35.706503},
                {lng: 139.791005, lat: 35.706024},
                {lng: 139.795864, lat: 35.705265},
                {lng: 139.798457, lat: 35.709678},
                {lng: 139.802886, lat: 35.714142},
                {lng: 139.807572, lat: 35.718606},
                {lng: 139.809497, lat: 35.725476},
                {lng: 139.811085, lat: 35.733254},
                {lng: 139.815008, lat: 35.737012},
                {lng: 139.814489, lat: 35.740169},
                {lng: 139.810468, lat: 35.741214},
                {lng: 139.802811, lat: 35.738898},
                {lng: 139.796451, lat: 35.739518},
                {lng: 139.791284, lat: 35.741281},
                {lng: 139.790367, lat: 35.718657}
            ]
        },

        {
            name: "Ginza",
            nid: "1645689",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production20/d709/23822930-05c0-11e4-b376-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            description: "Fashionistas flock to this part of Tokyo, and with good reason. It's the place to find high-end department stores as well as boutiques emblazoned with the names of the world's best-known fashion houses. Ginza's not just about splashing the cash, though. Iconic structures can also be seen first hand, from the clocktower on the Wako Building to the towering, neon-lit glass cylinder of the San'ai Building.",
            center: {lat: 35.6712935174737, lng: 139.764315704409}, 
            polygon: [
                {lng: 139.758623, lat: 35.668233},
                {lng: 139.762164, lat: 35.666937},
                {lng: 139.763223, lat: 35.663804},
                {lng: 139.764423, lat: 35.663887},
                {lng: 139.767684, lat: 35.666851},
                {lng: 139.767752, lat: 35.668016},
                {lng: 139.771817, lat: 35.671175},
                {lng: 139.772651, lat: 35.67424},
                {lng: 139.771005, lat: 35.674602},
                {lng: 139.759778, lat: 35.676938},
                {lng: 139.755778, lat: 35.670794},
                {lng: 139.759923, lat: 35.670912},
                {lng: 139.758623, lat: 35.668233}
            ] 
        },

        {
            name: "Nihonbashi",
            nid: "1645692",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production110/d1096/23ede350-05c0-11e4-8314-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            description: "Taking its name from the Nihonbashi Bridge (stone now, but the original wooden one was built back in 1603), this is one of Tokyo's business hotspots. And you'll be able to tell that just from looking up at the magnificent buildings, including the sleek Mitsui Tower. It's also the headquarters of the Tokyo Stock Exchange, though casual travelers will probably be more interested in the district's department stores and restaurants.",
            center: {lat: 35.6841591001463, lng: 139.776211321046}, 
            polygon: [
                {lng: 139.757029, lat: 35.678017},
                {lng: 139.772685, lat: 35.674303},
                {lng: 139.772501, lat: 35.672566},
                {lng: 139.78124, lat: 35.66902},
                {lng: 139.784426, lat: 35.671865},
                {lng: 139.79369, lat: 35.68578},
                {lng: 139.788496, lat: 35.69477},
                {lng: 139.7874, lat: 35.695225},
                {lng: 139.782701, lat: 35.696672},
                {lng: 139.772851, lat: 35.69702},
                {lng: 139.766785, lat: 35.693027},
                {lng: 139.766162, lat: 35.69018},
                {lng: 139.760286, lat: 35.689531},
                {lng: 139.757029, lat: 35.678017}
            ]
        },
        
        {
            name: "Shinjuku",
            nid: "1645686",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production41/d382/244f1620-05c0-11e4-8314-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Shinjuku train station is the busiest in the world, which gives you an idea of just how buzzing this district is. It's a place of contrasts – there are the alleys of Golden Gai, whose bars are a haven for artists and musicians, and then there are the whopping skyscrapers of the Nishi-Shinjuku business zone. For serenity amid the urban sprawl, relax amid the cherry blossoms of Shinjuku Gyoen National Garden.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 35.692248403859, lng: 139.69102634108}, 
            polygon: [
                {lng: 139.663743, lat: 35.672229},
                {lng: 139.69169, lat: 35.668186},
                {lng: 139.690618, lat: 35.670129},
                {lng: 139.694411, lat: 35.679412},
                {lng: 139.697862, lat: 35.680852},
                {lng: 139.703616, lat: 35.680462},
                {lng: 139.708595, lat: 35.681304},
                {lng: 139.713994, lat: 35.680369},
                {lng: 139.718753, lat: 35.677562},
                {lng: 139.721914, lat: 35.67481},
                {lng: 139.721774, lat: 35.710064},
                {lng: 139.663778, lat: 35.710151},
                {lng: 139.663743, lat: 35.672229}
            ]
        }

    ]
}


function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}