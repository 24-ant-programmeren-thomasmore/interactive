//functie was gevraagd zonder parameter
//als functie opgeroepen wordt zonder parameter, dan werkt ze met vandaag (new Date())

const weekend = (date = new Date()) =>
    (date.getDay() === 0 || date.getDay() === 6) ? "prettig weekend" : "fijne werkweek";

//Test
console.log(weekend()); //vandaag
console.log(weekend(new Date("2024-01-24"))); //woensdag
console.log(weekend(new Date("2024-06-23"))); //zondag
console.log(weekend(new Date("2022-10-08"))); //zaterdag
console.log(weekend(new Date("2022-11-07"))); //maandag
