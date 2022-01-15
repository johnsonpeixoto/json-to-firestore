const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBQQQy8YBTAGSfFoS8eRFi8qUX5GudItGM",
    authDomain: "ionic3-basic-app.firebaseapp.com",
    projectId: "ionic3-basic-app",
});

// firebase.initializeApp({
//     apiKey: "AIzaSyDJDK96RazoV3xjQbSvK6ahLkScYszYS-8",
//     authDomain: "inassessoria.firebaseapp.com",
//     projectId: "inassessoria",
// });

var db = firebase.firestore();

var menu = [
    {
        "city": "Lamía",
        "email": "jtattam17@blogs.com",
        "instagram": "jliddicoat17",
        "short_bio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "name": "Janek",
        "nichs": "Baby",
        "phone": "503-769-4917",
        "youtube": "jswaite17",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Sierpc",
        "email": "rkilmurray18@va.gov",
        "instagram": "rzumfelde18",
        "short_bio": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "name": "Roldan",
        "nichs": "Clothing",
        "phone": "684-559-3389",
        "youtube": "rreddy18",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Juarez",
        "email": "mcoxen19@sourceforge.net",
        "instagram": "mferre19",
        "short_bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "name": "Marcile",
        "nichs": "Movies",
        "phone": "515-246-0446",
        "youtube": "mdunsleve19",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Nagcarlan",
        "email": "gtownsend1a@mayoclinic.com",
        "instagram": "gbarbe1a",
        "short_bio": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "name": "Giffy",
        "nichs": "Industrial",
        "phone": "216-532-5646",
        "youtube": "gmaryet1a",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Chefchaouene",
        "email": "pdjuricic1b@slate.com",
        "instagram": "ppolak1b",
        "short_bio": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "name": "Patric",
        "nichs": "Baby",
        "phone": "646-693-7610",
        "youtube": "pslobom1b",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Nelazskoye",
        "email": "dohartagan1c@china.com.cn",
        "instagram": "dpayle1c",
        "short_bio": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "name": "Devonne",
        "nichs": "Jewelry",
        "phone": "749-513-8325",
        "youtube": "dbaumber1c",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    },
    {
        "city": "Pingkai",
        "email": "sgoodfield1d@hp.com",
        "instagram": "smcclory1d",
        "short_bio": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "name": "Shaun",
        "nichs": "Toys",
        "phone": "560-260-2100",
        "youtube": "svoaden1d",
        "ownerId": "pTDoLs3bCka2oesS3V21oZcwAvu2"
    }
]

menu.forEach(function (obj) {
    db.collection("influencers").add({
        city: obj.city,
        email: obj.email,
        instagram: obj.instagram,
        short_bio: obj.short_bio,
        name: obj.name,
        nichs: obj.nichs,
        phone: obj.phone,
        youtube: obj.youtube,
        ownerId: obj.ownerId
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });
});
