const eat = function (){
    return {
        eat: () => {
            console.log("I am eating");
        }
    }
}
const swim = function() {
    return {
        swim: () => {
            console.log("I am swimming");
        }
    }
}
const trick = function() {
    return {
        trick: () => {
            console.log("I am doing a trick");
        } 
    }
}
const superMagician = () => {
    return Object.assign(
        {},
        eat(),
        trick()
    )
}
const noviceMagician = () => {
    return Object.assign(
        {},
        eat(),
        swim()
    )
}