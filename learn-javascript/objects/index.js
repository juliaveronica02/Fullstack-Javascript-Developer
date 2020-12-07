var myCars = {
    "p1" : "120 kmph",
    "gallardo" : "350 kmph",
    "veyron" : " 290 kmph"
}
console.log(myCars);
console.log(typeof(myCars));

var mAgera = {
    name : "Argera",
    manufacture: {
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    apllyBrakes: function(){
        setTimeout(function(){
            console.log("Car Stopped");
        }, 5000)
    }
}
console.log(mAgera.name);
console.log(mAgera.topSpeed);
console.log(mAgera.manufacture);
console.log(mAgera.manufacture.name);
console.log(mAgera.apllyBrakes());
console.log(mAgera.apllyBrakes);
