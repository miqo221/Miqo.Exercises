
let array = [];

function randomNumberGenerator(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIdGenerator() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

function sortArray() {
    array = array.sort((a, b) => { return a.value - b.value });
}

function createCard() {
    const randomNumber = randomNumberGenerator(1, 1000);
    const randomId = randomIdGenerator();
  
    createDiv(randomId, randomNumber);
    addCardData(randomId, randomNumber);

}

function addCardData(id, number) {
    const data = {
        id: id,
        value: number,
    };

    array.push(data);
}

function createDiv(id, number) {
    const newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.innerHTML = number;
    newCard.id = id;
    document.querySelector('.numbers').appendChild(newCard);
    const closeButton = document.createElement('p');
    closeButton.classList.add('closebtn');
    closeButton.innerHTML = '&times';
    newCard.appendChild(closeButton);

    closeButton.addEventListener("click", clickHandler);
    function clickHandler() {
        newCard.parentElement.removeChild(newCard);
        const divID = this.parentNode.id;
        console.log(divID);
        for (let j = 0; j < array.length; j++) {
            if (array[j].id === divID) {
               array.splice(j, 1);
            }
        }
    };

}


function removeDom() {
    const items = document.getElementsByClassName('card');
    for (let i = 0; i < array.length; i++) {
        while (items.length > 0) {
            items[i].parentNode.removeChild(items[i])
        }
    }
}

function removeAll() {
    removeDom();
    array = [];
}

function sortCards() {
    removeDom();
    sortArray();
    createDivsFromArray();
}

function createDivsFromArray() {
    for (let i = 0; i < array.length; i++) {
        const data = array[i];
        createDiv(data.id, data.value);
    }
}