



var destination = {
    destinations: [
        {str: "Tokyo, Japan", val: "tokyo", map:"Tokyo,Japan", zoom:11},
        {str: "Barcelona, Spain", val: "barcelona", map:"Barcelona,Spain", zoom:10},
        {str: "Berlin, Germany", val: "berlin", map:"Berlin,Germany", zoom:11}, 
        {str: "Brussels, Belguim", val: "brussels", map:"Brussels,Belguim", zoom:12}, 
        {str: "Copenhagen, Denmark", val: "copenhagen", map:"Copenhagen,Denmark", zoom:12}
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

    ], 

    barcelona: [
        {
            name: "Exiample",
            nid: "1649520",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production33/d96/09ad4e90-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Its lavish avenue, Passeig de Gracia, is the place to check out Barcelona's chic fashion boutiques, but there's another reason Eixample is a must-see district: Gaudi. The trailblazing architect's uniquely organic-looking buildings – which look more grown than built – can be seen here, including Casa Mila and the cactus-like spires of Sagrada Familia, Gaudi's great church which is as much a symbol of Barcelona as the Eiffel Tower is of Paris.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 41.3917125306436, lng: 2.16478080087517}, 
            polygon: [
                {lng: 2.15985, lat: 41.396445},
                {lng: 2.15594, lat: 41.395352},
                {lng: 2.144598, lat: 41.392381},
                {lng: 2.143025, lat: 41.385619},
                {lng: 2.14286, lat: 41.380937},
                {lng: 2.14976, lat: 41.375452},
                {lng: 2.160581, lat: 41.3751},
                {lng: 2.168085, lat: 41.374848},
                {lng: 2.16294, lat: 41.378556},
                {lng: 2.163789, lat: 41.3854},
                {lng: 2.164417, lat: 41.386042},
                {lng: 2.169833, lat: 41.385745},
                {lng: 2.173479, lat: 41.38931},
                {lng: 2.175866, lat: 41.389123},
                {lng: 2.177332, lat: 41.390185},
                {lng: 2.179734, lat: 41.391141},
                {lng: 2.181364, lat: 41.392271},
                {lng: 2.182271, lat: 41.391592},
                {lng: 2.186654, lat: 41.394723},
                {lng: 2.186908, lat: 41.403213},
                {lng: 2.17563, lat: 41.411884},
                {lng: 2.168901, lat: 41.406997},
                {lng: 2.172395, lat: 41.404334},
                {lng: 2.167759, lat: 41.400871},
                {lng: 2.166556, lat: 41.401711},
                {lng: 2.15985, lat: 41.396445}
            ],  
            staticMapUrl: "41.396445,2.15985|41.395352,2.15594|41.392381,2.144598|41.385619,2.143025|41.380937,2.14286|41.375452,2.14976|41.3751,2.160581|41.374848,2.168085|41.378556,2.16294|41.3854,2.163789|41.386042,2.164417|41.385745,2.169833|41.38931,2.173479|41.389123,2.175866|41.390185,2.177332|41.391141,2.179734|41.392271,2.181364|41.391592,2.182271|41.394723,2.186654|41.403213,2.186908|41.411884,2.17563|41.406997,2.168901|41.404334,2.172395|41.400871,2.167759|41.401711,2.166556|41.396445,2.15985"
        }, 

        {
            name: "Gracia",
            nid: "1649519",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production138/d597/0a136360-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "With its bohemian, village-like vibe, Gracia is popular with artists, hipsters, and party animals alike. Chill out in the relaxing Placa Rius i Taulet by day, and head to the jumping Placa del Sol at night to mingle at the many bars and clubs. But the most famous attraction has to be Park Guell – a wonderland of flowing stone arches and columns resembling tree trunks, designed by visionary architect Gaudi.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 41.4100383180624, lng: 2.15295973672355}, 
            polygon: [
                {lng: 2.129748, lat: 41.420453},
                {lng: 2.140708, lat: 41.411737}, 
                {lng: 2.145131, lat: 41.411119}, 
                {lng: 2.14977, lat: 41.406038}, 
                {lng: 2.151552, lat: 41.400509}, 
                {lng: 2.156448, lat: 41.395546}, 
                {lng: 2.159842, lat: 41.396458}, 
                {lng: 2.166572, lat: 41.401738}, 
                {lng: 2.167731, lat: 41.400905}, 
                {lng: 2.172412, lat: 41.404347}, 
                {lng: 2.164218, lat: 41.410522}, 
                {lng: 2.161588, lat: 41.414196}, 
                {lng: 2.159403, lat: 41.414466}, 
                {lng: 2.157575, lat: 41.416874}, 
                {lng: 2.155257, lat: 41.415105}, 
                {lng: 2.151957, lat: 41.418076}, 
                {lng: 2.151689, lat: 41.420419}, 
                {lng: 2.149772, lat: 41.420555}, 
                {lng: 2.149326, lat: 41.421894}, 
                {lng: 2.144956, lat: 41.421187}, 
                {lng: 2.140628, lat: 41.422563}, 
                {lng: 2.13987, lat: 41.420856}, 
                {lng: 2.129748, lat: 41.420453}
            ], 
            staticMapUrl: "41.420453,2.129748|41.411737,2.140708|41.411119,2.145131|41.406038,2.14977|41.400509,2.151552|41.395546,2.156448|41.396458,2.159842|41.401738,2.166572|41.400905,2.167731|41.404347,2.172412|41.410522,2.164218|41.414196,2.161588|41.414466,2.159403|41.416874,2.157575|41.415105,2.155257|41.418076,2.151957|41.420419,2.151689|41.420555,2.149772|41.421894,2.149326|41.421187,2.144956|41.422563,2.140628|41.420856,2.13987|41.420453,2.129748"
        }, 
        {
            name: "Sarria-Sant Gervasi",
            nid: "1808316",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production90/d277/0a81dca0-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Balancing the buzz of downtown Barcelona, Sarria-Sant Gervasi is an upscale oasis of calm. Think relaxing cafes and leafy sun-dappled gardens, while if you're feeling more energetic you can head up to Mount Tibidabo where there's a popular theme park as well as the neo-Gothic extravagance of Sagrat Cor church. For chic boutiques, enticing eateries, and Catalan charm, have a wander along Major de Sarria, the area's main boulevard.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 41.4055389456722, lng: 2.12858485951083}, 
            polygon: [
                {lng: 2.15647, lat: 41.395512},
                {lng: 2.15153, lat: 41.400492},
                {lng: 2.149779, lat: 41.406024},
                {lng: 2.145053, lat: 41.411157},
                {lng: 2.140719, lat: 41.411737},

                {lng: 2.119438, lat: 41.428642},
                {lng: 2.104954, lat: 41.400423},
                {lng: 2.115662, lat: 41.395676},

                {lng: 2.117512, lat: 41.395273},
                {lng: 2.118532, lat: 41.39403},
                {lng: 2.117512, lat: 41.392135},

                {lng: 2.120978, lat: 41.390089},
                {lng: 2.130305, lat: 41.392384},
                {lng: 2.139025, lat: 41.391192},

                {lng: 2.144879, lat: 41.392439},
                {lng: 2.15647, lat: 41.395512}
            ], 
            staticMapUrl: "41.395512,2.15647|41.400492,2.15153|41.406024,2.149779|41.411157,2.145053|41.411737,2.140719|41.428642,2.119438|41.400423,2.104954|41.395676,2.115662|41.395273,2.117512|41.39403, 2.118532|41.392135,2.117512|41.390089,2.120978|41.392384,2.130305|41.391192,2.139025|41.392439,2.144879|41.395512,2.15647"
        },
        {
            name: "Sants-Montjuic",
            nid: "1649518",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production56/d1570/0af31500-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "For a taste of the great outdoors in Barcelona, take a cable car up Montjuic hill. Along with gasp-inducing views, you can also visit a museum dedicated to Joan Miro. Elsewhere in the sprawling Sants-Montjuic district you can wander Carrer de Sants, a buzzing shopping area. Camp Nou, home of Barcelona FC, is a place of pilgrimage for footie fans – the Barca Museum's one of the most popular in Spain.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 41.3529539840538, lng: 2.14819198825082}, 
            polygon: [
                {lng: 2.127778, lat: 41.370934},
                {lng: 2.130442, lat: 41.369298},
                {lng: 2.133454, lat: 41.363728},
                {lng: 2.134906, lat: 41.361959},
                {lng: 2.132365, lat: 41.359644},
                {lng: 2.126013, lat: 41.354825},
                {lng: 2.13361, lat: 41.347493},
                {lng: 2.110265, lat: 41.338934},
                {lng: 2.158922, lat: 41.320729},
                {lng: 2.177623, lat: 41.370186},
                {lng: 2.177841, lat: 41.374291},
                {lng: 2.170484, lat: 41.374725},
                {lng: 2.169568, lat: 41.375066},
                {lng: 2.149761, lat: 41.374824},
                {lng: 2.158922, lat: 41.375483},
                {lng: 2.142801, lat: 41.38093},
                {lng: 2.14293, lat: 41.384799},
                {lng: 2.122579, lat: 41.375773},
                {lng: 2.124026, lat: 41.373567},
                {lng: 2.127778, lat: 41.370934}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        }

    ], 

    berlin: [
        {
            name: "Charlottenburg",
            nid: "1701329",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production17/d1829/c77b40f0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "This western district of Berlin is full of elegance and luxury. To get a sense of its regal history, visit the huge, turquoise-domed Charlottenburg Palace, which sits grandly overlooking a lake. Then head to Kurfürstendamm, Berlin’s luxurious shopping artery, which attracts well-heeled locals to its stretch of designer stores. For those looking for a rural retreat, Charlottenburg also offers easy access to Berlin’s Grunewald Forest, the perfect place for hiking.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 52.5128298131606, lng: 13.2683378017187}, 
            polygon: [
                {lng: 13.339509, lat: 52.499286},
{lng: 13.341092, lat: 52.502353},
{lng: 13.34247, lat: 52.504699},
{lng: 13.346108, lat: 52.506348},
{lng: 13.335223, lat: 52.508312},
{lng: 13.322219, lat: 52.512649},
{lng: 13.32929, lat: 52.522987},
{lng: 13.324108, lat: 52.525394},
{lng: 13.319818, lat: 52.524749},
{lng: 13.317475, lat: 52.535899},
{lng: 13.326338, lat: 52.537258},
{lng: 13.327648, lat: 52.54093},
{lng: 13.315454, lat: 52.548129},
{lng: 13.281389, lat: 52.548518},
{lng: 13.272593, lat: 52.546134},
{lng: 13.274131, lat: 52.54207},
{lng: 13.272856, lat: 52.539062},
{lng: 13.275728, lat: 52.537409},
{lng: 13.276846, lat: 52.532849},
{lng: 13.281067, lat: 52.530182},
{lng: 13.266157, lat: 52.529021},
{lng: 13.253488, lat: 52.526692},
{lng: 13.247269, lat: 52.528386},
{lng: 13.246791, lat: 52.524459},
{lng: 13.241128, lat: 52.526012},
{lng: 13.228849, lat: 52.525913},
{lng: 13.226537, lat: 52.525575},
{lng: 13.222231, lat: 52.526204},
{lng: 13.219523, lat: 52.521371},
{lng: 13.220641, lat: 52.515064},
{lng: 13.215304, lat: 52.509316},
{lng: 13.212433, lat: 52.509658},
{lng: 13.207811, lat: 52.502527},
{lng: 13.19204, lat: 52.497923},
{lng: 13.188157, lat: 52.482528},
{lng: 13.256125, lat: 52.486401},
{lng: 13.276577, lat: 52.50083},
{lng: 13.285002, lat: 52.495287},
{lng: 13.289256, lat: 52.497018},
{lng: 13.311468, lat: 52.501144},
{lng: 13.314201, lat: 52.499358},
{lng: 13.324514, lat: 52.499522},
{lng: 13.331171, lat: 52.500194},
{lng: 13.335701, lat: 52.499119},
{lng: 13.339509, lat: 52.499286}
            ],  
            staticMapUrl: "41.396445,2.15985|41.395352,2.15594|41.392381,2.144598|41.385619,2.143025|41.380937,2.14286|41.375452,2.14976|41.3751,2.160581|41.374848,2.168085|41.378556,2.16294|41.3854,2.163789|41.386042,2.164417|41.385745,2.169833|41.38931,2.173479|41.389123,2.175866|41.390185,2.177332|41.391141,2.179734|41.392271,2.181364|41.391592,2.182271|41.394723,2.186654|41.403213,2.186908|41.411884,2.17563|41.406997,2.168901|41.404334,2.172395|41.400871,2.167759|41.401711,2.166556|41.396445,2.15985"
        }, 

        {
            name: "Prenzlauer Berg",
            nid: "1662712",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production90/d172/c77b40f1-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "A central Berlin district, just north of Mitte, Prenzlauer Berg has a relaxed atmosphere and beautiful historic buildings. Once downtrodden under East German rule, the Belle Epoque facades have been cleaned and brightened and an influx of the young middle class has caused a boom in independent cafés where you can sit on a sunny pavement and sip coffee. To understand the area’s heritage, visit the Rykestrasse Synagogue, Germany's largest.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 52.5396389946329, lng: 13.4294736458981}, 
            polygon: [
                {lng: 13.415305, lat: 52.554634},{lng: 13.413884, lat: 52.556041},{lng: 13.414277, lat: 52.557182},{lng: 13.397319, lat: 52.558015},{lng: 13.398903, lat: 52.550827},{lng: 13.402556, lat: 52.542132},{lng: 13.404726, lat: 52.540513},{lng: 13.39901, lat: 52.539133},{lng: 13.40118, lat: 52.536319},{lng: 13.405716, lat: 52.535008},{lng: 13.407389, lat: 52.53578},{lng: 13.40867, lat: 52.534523},{lng: 13.413697, lat: 52.532969},{lng: 13.410643, lat: 52.529072},{lng: 13.41577, lat: 52.527573},{lng: 13.430306, lat: 52.522983},{lng: 13.433356, lat: 52.523236},{lng: 13.4375, lat: 52.523379},{lng: 13.45065, lat: 52.527259},{lng: 13.456494, lat: 52.528314},{lng: 13.460730999999999, lat: 52.529571},{lng: 13.467734, lat: 52.53802},{lng: 13.448523, lat: 52.546961},{lng: 13.430092, lat: 52.55182},{lng: 13.429599, lat: 52.551281},{lng: 13.42743, lat: 52.552534},{lng: 13.421021, lat: 52.553374},{lng: 13.420827, lat: 52.554156},{lng: 13.415305, lat: 52.554634}
            ], 
            staticMapUrl: "41.420453,2.129748|41.411737,2.140708|41.411119,2.145131|41.406038,2.14977|41.400509,2.151552|41.395546,2.156448|41.396458,2.159842|41.401738,2.166572|41.400905,2.167731|41.404347,2.172412|41.410522,2.164218|41.414196,2.161588|41.414466,2.159403|41.416874,2.157575|41.415105,2.155257|41.418076,2.151957|41.420419,2.151689|41.420555,2.149772|41.421894,2.149326|41.421187,2.144956|41.422563,2.140628|41.420856,2.13987|41.420453,2.129748"
        }, 
        {
            name: "Kreuzberg",
            nid: "1701328",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production0/d1365/c77610d0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Just south of Mitte, Kreuzberg is one of the most culturally rich and contrasting districts of Berlin. Much of Berlin’s turbulent history is concentrated here, with Checkpoint Charlie and the longest intact section of the Berlin wall to see, but the district is also forward-thinking, with modern architecture and science museums. To relax, head to the riverbank and take a leisurely canal cruise, or sit and picnic in the park.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 52.4954180601255, lng: 13.4063850551749}, 
            polygon: [
                {lng: 13.443586, lat: 52.502325},{lng: 13.433309, lat: 52.506932},{lng: 13.429489, lat: 52.508309},{lng: 13.426138, lat: 52.505399},{lng: 13.419702, lat: 52.505693},{lng: 13.417483, lat: 52.504504},{lng: 13.41511, lat: 52.505081},{lng: 13.414021, lat: 52.504419},{lng: 13.411817, lat: 52.505098},{lng: 13.410031, lat: 52.506905},{lng: 13.404596, lat: 52.508093},{lng: 13.400738, lat: 52.509419},{lng: 13.399257, lat: 52.508418},{lng: 13.379853, lat: 52.506926},{lng: 13.377898, lat: 52.507762},{lng: 13.375385, lat: 52.50393},{lng: 13.377121, lat: 52.501721},{lng: 13.373185, lat: 52.502909},{lng: 13.371733, lat: 52.502298},{lng: 13.37087, lat: 52.500044},{lng: 13.369756, lat: 52.498743},{lng: 13.36859, lat: 52.496772},{lng: 13.36872, lat: 52.492931},{lng: 13.372668, lat: 52.492357},{lng: 13.371499, lat: 52.485376},{lng: 13.389915, lat: 52.484584},{lng: 13.406496, lat: 52.482443},{lng: 13.407663, lat: 52.47844},{lng: 13.41095, lat: 52.477726},{lng: 13.413645, lat: 52.478092},{lng: 13.41352, lat: 52.478625},{lng: 13.418932, lat: 52.477969},{lng: 13.419626, lat: 52.479615},{lng: 13.421311, lat: 52.479991},{lng: 13.422023, lat: 52.486531},{lng: 13.424599, lat: 52.485909},{lng: 13.425662, lat: 52.487623},{lng: 13.424835, lat: 52.490093},{lng: 13.423337, lat: 52.491124},{lng: 13.422729, lat: 52.493217},{lng: 13.420977, lat: 52.495335},{lng: 13.42267, lat: 52.495106},{lng: 13.439988, lat: 52.489515},{lng: 13.446351, lat: 52.494443},{lng: 13.447831, lat: 52.494713},{lng: 13.455088, lat: 52.498692},{lng: 13.443586, lat: 52.502325}
            ], 
            staticMapUrl: "41.395512,2.15647|41.400492,2.15153|41.406024,2.149779|41.411157,2.145053|41.411737,2.140719|41.428642,2.119438|41.400423,2.104954|41.395676,2.115662|41.395273,2.117512|41.39403, 2.118532|41.392135,2.117512|41.390089,2.120978|41.392384,2.130305|41.391192,2.139025|41.392439,2.144879|41.395512,2.15647"
        },
        {
            name: "Friedrichshain",
            nid: "1662709",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production158/d919/c75b35d0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "With the bouncing clubs, vibrant bars, and buzzing pubs of Boxhagener Platz and Simon-Dach Strasse, the bohemian district of Frederichshain is where Berlin's coolest citizens go to party, unwind, and revel into the wee hours. But there are also fascinating windows into East Berlin's beguiling past, the most evocative being the East Side Gallery, a stretch of the Berlin Wall covered in colorful, politically-charged murals.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 52.5111988763599, lng: 13.4543032613299}, 
            polygon: [
                {lng: 13.458623, lat: 52.526292},{lng: 13.456549, lat: 52.528331},{lng: 13.451687, lat: 52.527457},{lng: 13.437419, lat: 52.523284},{lng: 13.430169, lat: 52.523038},{lng: 13.427701, lat: 52.517219},{lng: 13.423242, lat: 52.512219},{lng: 13.429618, lat: 52.508244},{lng: 13.433284, lat: 52.506939},{lng: 13.443564, lat: 52.502332},{lng: 13.45448, lat: 52.498842},{lng: 13.472879, lat: 52.491909},{lng: 13.477815, lat: 52.489485},{lng: 13.482674, lat: 52.488416},{lng: 13.487689, lat: 52.489577},{lng: 13.47941, lat: 52.494816},{lng: 13.471527, lat: 52.49904},{lng: 13.468102, lat: 52.499761},{lng: 13.469536, lat: 52.504033},{lng: 13.470732, lat: 52.505198},{lng: 13.475354, lat: 52.510091},{lng: 13.47607, lat: 52.511594},{lng: 13.475356, lat: 52.513728},{lng: 13.476234, lat: 52.515084},{lng: 13.474163, lat: 52.518824},{lng: 13.470498, lat: 52.522263},{lng: 13.467868, lat: 52.523724},{lng: 13.461172, lat: 52.525077},{lng: 13.458623, lat: 52.526292}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        },
        {
            name: "Mitte",
            nid: "1662710",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production167/d450/c7765ef0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Berlin's center, the Mitte district is decorated with some of Europe's greatest structures, from the Neo-Classical grandeur of Brandenburg Gate to the jewel-like dome of the Berliner Dom Cathedral, which stands amid the cluster of world-class museums on the aptly-named Museum Island. No visit to Berlin would be complete without a wander around Potsdamer Platz, the vast square which has survived the ravages of World War Two and division by the Berlin Wall.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 52.5319975820869, lng: 13.367916366914}, 
            polygon: [
                {lng: 13.422902, lat: 52.512205},{lng: 13.427606, lat: 52.517594},{lng: 13.430136, lat: 52.523028},{lng: 13.410501, lat: 52.529028},{lng: 13.413342, lat: 52.53289},{lng: 13.408462, lat: 52.53454},{lng: 13.407016, lat: 52.535749},{lng: 13.405569, lat: 52.534977},{lng: 13.401048, lat: 52.536084},{lng: 13.39888, lat: 52.539055},{lng: 13.404668, lat: 52.540592},{lng: 13.402501, lat: 52.542026},{lng: 13.398345, lat: 52.551264},{lng: 13.396181, lat: 52.561605},{lng: 13.389127, lat: 52.566553},{lng: 13.384964, lat: 52.567769},{lng: 13.378993, lat: 52.56601},{lng: 13.377, lat: 52.560396},{lng: 13.371572, lat: 52.560508},{lng: 13.372114, lat: 52.5571},{lng: 13.365239, lat: 52.558302},{lng: 13.365541, lat: 52.562571},{lng: 13.354162, lat: 52.561857},{lng: 13.339902, lat: 52.566335},{lng: 13.331763, lat: 52.562042},{lng: 13.327058, lat: 52.561929},{lng: 13.322908, lat: 52.549829},{lng: 13.314947, lat: 52.551916},{lng: 13.311694, lat: 52.548614},{lng: 13.315675, lat: 52.548504},{lng: 13.327801, lat: 52.541251},{lng: 13.326359, lat: 52.537293},{lng: 13.317463, lat: 52.535892},{lng: 13.319853, lat: 52.524773},{lng: 13.324201, lat: 52.525408},{lng: 13.329264, lat: 52.522987},{lng: 13.322281, lat: 52.512649},{lng: 13.335239, lat: 52.508322},{lng: 13.346105, lat: 52.506338},{lng: 13.342465, lat: 52.504709},{lng: 13.341083, lat: 52.502366},{lng: 13.351174, lat: 52.500167},{lng: 13.352182, lat: 52.501632},{lng: 13.355591, lat: 52.501776},{lng: 13.362171, lat: 52.499679},{lng: 13.369737, lat: 52.49878},{lng: 13.370844, lat: 52.500061},{lng: 13.371683, lat: 52.502322},{lng: 13.373186, lat: 52.502964},{lng: 13.37702, lat: 52.501782},{lng: 13.37534, lat: 52.503924},{lng: 13.377882, lat: 52.507807},{lng: 13.37987, lat: 52.50696},{lng: 13.399221, lat: 52.508476},{lng: 13.400726, lat: 52.509473},{lng: 13.404634, lat: 52.508152},{lng: 13.410064, lat: 52.506932},{lng: 13.411869, lat: 52.505057},{lng: 13.414036, lat: 52.504395},{lng: 13.415122, lat: 52.505057},{lng: 13.417469, lat: 52.504508},{lng: 13.41964, lat: 52.50571},{lng: 13.426145, lat: 52.505385},{lng: 13.429403, lat: 52.508353},{lng: 13.422902, lat: 52.512205}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        }

    ], 
    brussels: [
        {
            name: "Brussels Grand Place",
            nid: "1705509",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production59/d266/d3f73500-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "While in the City Center, you shouldn't miss Grand Place. This historic square is illuminated by fine silvery-grey and white Gothic architecture – the Town Hall and City Museum are particularly magnificent sights. Stop off in one of its cafés, nestled inside arches, and hear the satisfying crunch of your fork sinking into a warm traditional Belgian waffle glazed with caramelized sugar. After, giggle at the quirky Belgian statue Manneken Pis.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 50.846724265067, lng: 4.352484320099}, 
            polygon: [
                {lng: 4.368913, lat: 50.847326},{lng: 4.361538, lat: 50.851967},{lng: 4.356385, lat: 50.854074},{lng: 4.343963, lat: 50.856284},{lng: 4.337901, lat: 50.848672},{lng: 4.342249, lat: 50.840831},{lng: 4.343823, lat: 50.833669},{lng: 4.357488, lat: 50.837689},{lng: 4.364762, lat: 50.841025},{lng: 4.368913, lat: 50.847326}
            ],  
            staticMapUrl: "41.396445,2.15985|41.395352,2.15594|41.392381,2.144598|41.385619,2.143025|41.380937,2.14286|41.375452,2.14976|41.3751,2.160581|41.374848,2.168085|41.378556,2.16294|41.3854,2.163789|41.386042,2.164417|41.385745,2.169833|41.38931,2.173479|41.389123,2.175866|41.390185,2.177332|41.391141,2.179734|41.392271,2.181364|41.391592,2.182271|41.394723,2.186654|41.403213,2.186908|41.411884,2.17563|41.406997,2.168901|41.404334,2.172395|41.400871,2.167759|41.401711,2.166556|41.396445,2.15985"
        }, 

        {
            name: "Ixelles",
            nid: "1706926",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production139/d1546/d3f07e40-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Elsene – west of Ixelles’ Avenue Louise – is a bustling shopping quarter dotted with designer shops and jewelers. Behind illuminated storefronts, wanderers will find quaint bookshops, cool independent record stores, and tasty ethnic restaurants. Bright fabrics fluttering in the breeze, exotic grocers, and batik shops give this neighborhood an irresistible vibrancy – try a walking tour with a guide from the Kuumba cultural center.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 50.8245420140277, lng: 4.3623551317068}, 
            polygon: [
                {lng: 4.36059, lat: 50.839045},{lng: 4.357577, lat: 50.837692},{lng: 4.343795, lat: 50.833611},{lng: 4.337994, lat: 50.830029},{lng: 4.362016, lat: 50.809306},{lng: 4.371422, lat: 50.814435},{lng: 4.367486, lat: 50.823041},{lng: 4.363084, lat: 50.825603},{lng: 4.35819, lat: 50.82869},{lng: 4.354167, lat: 50.830722},{lng: 4.351469, lat: 50.831241},{lng: 4.348718, lat: 50.832809},{lng: 4.35751, lat: 50.83732},{lng: 4.361252, lat: 50.834171},{lng: 4.360966, lat: 50.831733},{lng: 4.364922, lat: 50.827461},{lng: 4.371674, lat: 50.821228},{lng: 4.373619, lat: 50.814948},{lng: 4.377297, lat: 50.815197},{lng: 4.381195, lat: 50.819203},{lng: 4.383437, lat: 50.826153},{lng: 4.369168, lat: 50.835674},{lng: 4.362121, lat: 50.837487},{lng: 4.36059, lat: 50.839045}
            ], 
            staticMapUrl: "41.420453,2.129748|41.411737,2.140708|41.411119,2.145131|41.406038,2.14977|41.400509,2.151552|41.395546,2.156448|41.396458,2.159842|41.401738,2.166572|41.400905,2.167731|41.404347,2.172412|41.410522,2.164218|41.414196,2.161588|41.414466,2.159403|41.416874,2.157575|41.415105,2.155257|41.418076,2.151957|41.420419,2.151689|41.420555,2.149772|41.421894,2.149326|41.421187,2.144956|41.422563,2.140628|41.420856,2.13987|41.420453,2.129748"
        }, 
        {
            name: "Brussels Rogier Square",
            nid: "1705511",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production36/d742/d3ee8270-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "The busy hub of Rogier Square is located in Saint-Josse-ten-Noode, which may be the smallest district in Brussels but it's also one of the busiest. An exciting cocktail of cultures, it's the very picture of a modern melting-pot. One minute you're among smart, sleek office blocks, the next you're mingling in the Turkish neighborhoods. Delicious restaurants reflecting the various nationalities abound, making it a foodie haven.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 50.8618938216999, lng: 4.37200040013236}, 
            polygon: [
                {lng: 4.344018, lat: 50.856315},{lng: 4.356351, lat: 50.854112},{lng: 4.361625, lat: 50.85195},{lng: 4.368956, lat: 50.847347},{lng: 4.385518, lat: 50.8482},{lng: 4.389513, lat: 50.85319},{lng: 4.395214, lat: 50.868845},{lng: 4.367287, lat: 50.878625},{lng: 4.359152, lat: 50.871946},{lng: 4.346217, lat: 50.859231},{lng: 4.344018, lat: 50.856315}
            ], 
            staticMapUrl: "41.395512,2.15647|41.400492,2.15153|41.406024,2.149779|41.411157,2.145053|41.411737,2.140719|41.428642,2.119438|41.400423,2.104954|41.395676,2.115662|41.395273,2.117512|41.39403, 2.118532|41.392135,2.117512|41.390089,2.120978|41.392384,2.130305|41.391192,2.139025|41.392439,2.144879|41.395512,2.15647"
        },
        {
            name: "European Quarter",
            nid: "1642409",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production158/d919/c75b35d0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Mingle with the diplomats and European Union employees in the cafes and bars of the European Quarter – the most buzzing hotspot has to be Place du Luxembourg, which is close to to Espace Leopold, where the European Parliament convenes. To bask and relax, there's also the green oasis of Leopold Park, while Cinquantenaire Park boasts the Royal Military Museum as well as the Cinquantenaire Art Museum.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 50.8393230805852, lng: 4.38809550074323}, 
            polygon: [
                {lng: 4.369147, lat: 50.847312},{lng: 4.364811, lat: 50.841001},{lng: 4.360633, lat: 50.839072},{lng: 4.362176, lat: 50.8376},{lng: 4.369348, lat: 50.835701},{lng: 4.377049, lat: 50.824298},{lng: 4.420069, lat: 50.840284},{lng: 4.389582, lat: 50.853053},{lng: 4.385591, lat: 50.848118},{lng: 4.369147, lat: 50.847312}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        }
    ], 

    copenhagen: [
        {
            name: "Christianshavn",
            nid: "1648932",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production47/d396/3935aa20-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Christianshavn, set near central Copenhagen, is a relaxed, eclectic neighborhood steeped in history. Dominated by quaint canals, lined with pink, blue, and white buildings with flower-flecked balconies, Christianshavn is perfect for an enchanting amble. Spiraling Baroque church towers occupy the streets, where a blend of academics, businessmen, and artists enjoy the resplendent café culture, cool bars, and ritzy restaurants, all infused with an alternative, welcoming atmosphere.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 55.6766433245241, lng: 12.5996288251645}, 
            polygon: [
                {lng: 12.578091, lat: 55.669047},{lng: 12.587393, lat: 55.665936},{lng: 12.597507, lat: 55.668764},{lng: 12.6003, lat: 55.669751},{lng: 12.609889, lat: 55.673927},{lng: 12.614044, lat: 55.679985},{lng: 12.613977, lat: 55.683172},{lng: 12.613125, lat: 55.685296},{lng: 12.606895, lat: 55.689787},{lng: 12.603157, lat: 55.688667},{lng: 12.596387, lat: 55.679053},{lng: 12.5881, lat: 55.674668},{lng: 12.578091, lat: 55.669047}
            ],  
            staticMapUrl: "41.396445,2.15985|41.395352,2.15594|41.392381,2.144598|41.385619,2.143025|41.380937,2.14286|41.375452,2.14976|41.3751,2.160581|41.374848,2.168085|41.378556,2.16294|41.3854,2.163789|41.386042,2.164417|41.385745,2.169833|41.38931,2.173479|41.389123,2.175866|41.390185,2.177332|41.391141,2.179734|41.392271,2.181364|41.391592,2.182271|41.394723,2.186654|41.403213,2.186908|41.411884,2.17563|41.406997,2.168901|41.404334,2.172395|41.400871,2.167759|41.401711,2.166556|41.396445,2.15985"
        }, 

        {
            name: "Amager",
            nid: "1742279",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production139/d1546/d3f07e40-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Amager is a large, energetic district of Copenhagen on an island to the east of the center, that blends an infinitely diverse range of entertainment and leisure activities. In the enthralling streets, framed by stately medieval and white Baroque buildings, a thriving café culture abounds, many of which transform into cool, cultured bars at night. To the west of Amager, luscious stretches of open parks and greenery offer natural beauty.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 55.6487991147381, lng: 12.5908771957645}, 
            polygon: [
                {lng: 12.565858, lat: 55.660666},{lng: 12.552847, lat: 55.642262},{lng: 12.524816, lat: 55.622315},{lng: 12.55991, lat: 55.621318},{lng: 12.644044, lat: 55.649929},{lng: 12.637163, lat: 55.669085},{lng: 12.624332, lat: 55.678602},{lng: 12.614408, lat: 55.676034},{lng: 12.610031, lat: 55.673739},{lng: 12.58689, lat: 55.666008},{lng: 12.578266, lat: 55.668968},{lng: 12.565858, lat: 55.660666}
            ], 
            staticMapUrl: "41.420453,2.129748|41.411737,2.140708|41.411119,2.145131|41.406038,2.14977|41.400509,2.151552|41.395546,2.156448|41.396458,2.159842|41.401738,2.166572|41.400905,2.167731|41.404347,2.172412|41.410522,2.164218|41.414196,2.161588|41.414466,2.159403|41.416874,2.157575|41.415105,2.155257|41.418076,2.151957|41.420419,2.151689|41.420555,2.149772|41.421894,2.149326|41.421187,2.144956|41.422563,2.140628|41.420856,2.13987|41.420453,2.129748"
        }, 
        {
            name: "Orestad",
            nid: "1764449",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production44/d773/39302be0-74ad-11e4-a6db-d89d672bd508.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "Orestad is a booming city area with unique and futuristic urban beauty set in central Amager Island. Perfectly placed between the captivating alternative scene of nearby Christianshavn and the stretches of the island’s natural greenery, Orestad offers an eclectic taste of all that Copenhagen has to offer. It has a youthful, cultured atmosphere due to the nearby universities, and boasts contemporary bars and glitzy restaurants.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 55.6296743459483, lng: 12.5731983780256}, 
            polygon: [
                {lng: 12.577052, lat: 55.618517},{lng: 12.585003, lat: 55.640609},{lng: 12.569321, lat: 55.641231},{lng: 12.561568, lat: 55.618063},{lng: 12.577052, lat: 55.618517}
            ], 
            staticMapUrl: "41.395512,2.15647|41.400492,2.15153|41.406024,2.149779|41.411157,2.145053|41.411737,2.140719|41.428642,2.119438|41.400423,2.104954|41.395676,2.115662|41.395273,2.117512|41.39403, 2.118532|41.392135,2.117512|41.390089,2.120978|41.392384,2.130305|41.391192,2.139025|41.392439,2.144879|41.395512,2.15647"
        },
        {
            name: "Nyhavn - Amalienborg",
            nid: "1742223",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production149/d222/392d93d0-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "The second you step into the centre of the Amalienborg courtyard, surrounded on all sides by the breathtaking Rococo palace buildings, and gaze upon Frederik's Church's ornate dome, you'll see exactly why the Danish royals call this beautiful harborside home. For an authentic slice of Old Denmark, take a leisurely stroll down the stunning Nyhavn harbor, where 17th Century townhouses rub shoulders with cutting-edge eateries, all alongside the soothing canal.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 55.6824418080129, lng: 12.5917197471526}, 
            polygon: [
                {lng: 12.599243, lat: 55.688397},{lng: 12.5901, lat: 55.687194},{lng: 12.584846, lat: 55.68148},{lng: 12.587973, lat: 55.674968},{lng: 12.596292, lat: 55.680609},{lng: 12.599243, lat: 55.688397}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        },
        {
            name: "Frederiksberg",
            nid: "1638116",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production149/d222/392d93d0-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Shopping, Food, Museums",
            transport: [
                {name: "Tokyo (HND-Haneda)", type: "airport"},
                {name: "Tokyo Yotsua Station", type: "train"},
                {name: "Akasaka-Mitsuke Station", type: "train"},
            ],
            description: "When you see the beautiful Baroque views of the Frederiksberg Palace, or stride down the main thoroughfare Gammel Kongevej, lined with designer stores and vibrant bars, you'll see exactly why Frederiksbergs one of the city's most exclusive boroughs. For a glorious change of pace, check out the charming residents of Copenhagen Zoo or stretch out across the grass in Frederiksberg Park, which features its own small waterfall.",
            landmarks: "Akasaka ACT Theatre, Akasaka Palace, Akasaka Sacas",
            center: {lat: 55.6800464588246, lng: 12.5237573788893}, 
            polygon: [
                {lng: 12.557952, lat: 55.683346},{lng: 12.551766, lat: 55.687314},{lng: 12.543162, lat: 55.688291},{lng: 12.534579, lat: 55.695705},{lng: 12.520317, lat: 55.693793},{lng: 12.500537, lat: 55.687038},{lng: 12.491415, lat: 55.680293},{lng: 12.49251, lat: 55.674303},{lng: 12.493038, lat: 55.670823},{lng: 12.498018, lat: 55.668152},{lng: 12.514967, lat: 55.668169},{lng: 12.528458, lat: 55.666902},{lng: 12.542348, lat: 55.671789},{lng: 12.554822, lat: 55.673896},{lng: 12.557952, lat: 55.683346}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
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