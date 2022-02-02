function Person(first, last, age, prof) {
    return {
        firstName: first,
        lastName: last,
        age: age,
        profession: prof,
    };
}

const professionEnum = {
    Developer: 0,
    Marketing: 1,
    QA: 2,
    Manager: 3,
    HR: 4,
};

const one = Person("Artak", "Sargsyan", 24, professionEnum.Developer);
const two = Person("Vazgen", "Simonyan", 22, professionEnum.QA);
const three = Person("Armen", "Vardanyan", 21, professionEnum.Marketing);
const four = Person("Vazgen", "Poghosyan", 19, professionEnum.Developer);
const five = Person("Hakob", "Karapetyan", 29, professionEnum.Manager);
const six = Person("Arman", "Xachatryan", 23, professionEnum.Developer);
const seven = Person("Vazgen", "Andreasyan", 26, professionEnum.Manager);
const eight = Person("Narek", "Galstyan", 30, professionEnum.HR);
const nine = Person("Sergey", "Manukyan", 27, professionEnum.HR);
const ten = Person("Davit", "Margaryan", 20, professionEnum.Developer);
const eleven = Person("Vazgen", "Minasyan", 23, professionEnum.Developer);

const personArray = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];

let newArray = [];
let little = [];
let result = [];  

function findByName(name) {
    for(let i = 0; i < personArray.length; i++) {
        if (personArray[i].firstName == name) {
            newArray.push(personArray[i]);
        }
    }
    console.log(newArray) + console.log('All Employess with the name "Vazgen".');
    checkAdult(25)
}

findByName("Vazgen")


function checkAdult(age) {
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].age < age) {
            little.push(newArray[i])
        }
    }
    console.log(little) + console.log('Young Employees');
    checkProffesion(professionEnum.Developer)
}



function checkProffesion(work) {
    for(let i = 0; i < little.length; i++) {
        if (little[i].profession == work) {
            result.push(little[i])
        }
    }
    console.log(result) + console.log('Developers.');
}
