// example 1 using if-else.
var currentDay = "Tuesday"
if(currentDay === "Monday") {
    console.log("Timings: 10:00-06:00");
}
else if(currentDay === "Tuesday") {
    console.log("Timings: 09:00 - 07:00");
}
else if(currentDay === "Wednesday") {
    console.log("Timings: 09:00 - 08:00");
}
else if(currentDay === "Thursday") {
    console.log("Timings: 09:00 - 09:00");
}
else if(currentDay === "Friday") {
    console.log("Timings: 09:00 - 01:00");
}
else if(currentDay === "Saturday") {
    console.log("Timings: 09:00 - 02:00");
}
else if(currentDay === "Sunday") {
    console.log("Timings: 09:00 - 03:00");
}
// result: Timings: 09:00 - 07:00.
// as we see this very long code.

// example 2: switch to clean code.
switch(currentDay){
    case "Monday":
        console.log("Timings: 10:00-06:00");
        break;
    case "Tuesday":
        console.log("Timings: 09:00 - 07:00");
        break;
    case "Wednesday":
        console.log("Timings: 09:00 - 08:00");
        break;
    case "Thursday":
        console.log("Timings: 09:00 - 09:00");
        break;
    case "Friday":
        console.log("Timings: 09:00 - 01:00");
        break;
    case "Saturday":
        console.log("Timings: 09:00 - 02:00");
        break;
    case "Sunday":
        console.log("Timings: 09:00 - 03:00");
        break;
    default:
}
// result: Timings: 09:00 - 07:00.