let map = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
}

console.log("John K. Miller's phone number is: " + map["John K. Miller"]);

Object.keys(map).forEach(function(e) {
    if (map[e] === "307-687-2982"){
        console.log(e + "is the owner of the number "+ map[e]);
    }
})

console.log("Do we know Chris E. Myers' phone number? " + map.hasOwnProperty("Chris E. Myers"));