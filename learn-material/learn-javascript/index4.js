let human = {
    name: 'julia',
    height: 10,
    weight: 50,
    live: 'Tanjung Pinang',
    job: ['facebook', 'twitter', {
        name: 'apple',
        location: 'kepri'
    }],
    pet: {
        name: 'blacky',
        height: 20,
        weight: 29,
        live: 'brazil',
    },
    // run in google chrome type: human.
    printNameAndDogName: function () {
        const myName = this.name
        const dogName = this.pet.name
        debugger;
        console.log(`my name is ${myName}& my dog name is ${dogName}`)
        // run in google chrome type: human.printNameAndDogName(console.log).
        // result: my name is julia& my dog name is blacky.
    },
    printJob: (urutan) => {
        console.log('parameter')
        const job = human.job[0]
        console.log(`my job is ${job}`);
    }
    // run in google chrome type: human.printJob(console.log).
    // parameter.
    // my job is facebook.
}
console.log(human.name); // julia.
console.log(human.live[1]); // a.
let petName = human.pet.name // blacky.

let building = {
    name: 'batam pos',
    floor: 21,
    printNameAndFloor: function () {
        const name = this.name;
        const floor = this.floor;
        console.log(`${name} building have ${floor}`)
    },
    printOther: otherInfo => console.log(otherInfo),
    printSecond:(otherInfo)=>{
        console.log(otherInfo)
        console.error('danger')
    }
}
//json.stringify make JSON(javascript object notation)/ javascript object to string
let jsonString = JSON.stringify(building)
// result =>"{"name":"Batam Pos", "Floor":21};
// it will get value like string, integer, boolean and float.

//JSON.Parse make JSON berbentuk string kembali ke asalnya/ke object
let jsonParse = JSON.parse(jsonString)
console.log(jsonParse)
// run in google chrome type: JSON.parse(jsonString);
// result.
/*
{
    "name":"Batam Pos",
    "floor": "21"
}
*/