
let array = [];

function randomNumberGenerator(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomIdGenerator() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

function sortArray() {
    array = array.sort(function (a, b) { return a.value - b.value });
}

const newArray = [];

function createDiv() {
    const number = randomNumberGenerator(1, 1000);
    const id = randomIdGenerator();
    const newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.innerHTML = number;
    newCard.id = id;
    document.querySelector('.numbers').appendChild(newCard);
    const closeButton = document.createElement('p');
    closeButton.classList.add('closebtn');
    closeButton.innerHTML = '&times';
    newCard.appendChild(closeButton);

    closeButton.addEventListener("click", myFunction);
    function myFunction() {
        newCard.parentElement.removeChild(newCard);
        const divID = this.parentNode.id;
         for(let j = 0; j < array.length;j++) {
             if(array[j].id === divID) {
                 array.splice(array[j],1);
             }
         }
    };

    const cardObject = {
        id: id,
        value: number,
    };

    array.push(cardObject);
}

function addCard() {
    createDiv()
}

function removeAll() {
    const items = document.getElementsByClassName('card');
    for (let i = 0; i < array.length; i++) {
        while (items.length > 0) {
            items[i].parentNode.removeChild(items[i])
        }
    }
    array.length = 0;
}

function removeDom() {
    const elements = document.querySelectorAll(".card");
    for (let i = 0; i < array.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}

function sortDivs() {
    sortArray();
    removeDom();
    for (let j = 0; j < array.length; j++) {
        let divs = document.createElement('div');
        divs.classList.add("card");
        divs.innerHTML = array[j].value;
        document.querySelector('.numbers').appendChild(divs);
        const closeButton = document.createElement('p');
        closeButton.classList.add('closebtn');
        closeButton.innerHTML = '&times';
        divs.appendChild(closeButton);
        closeButton.addEventListener("click", myFunction);
        function myFunction() {
            divs.parentElement.removeChild(divs);
        };
    }
}