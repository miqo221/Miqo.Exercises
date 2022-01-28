
let array = [];
let number = 0;
let id = "";

function randomNumberGenerator(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIdGenerator() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

function sortArray() {
    array = array.sort((a, b) => { return a.value - b.value });
}

function createDiv() {
    number = randomNumberGenerator(1, 1000);
    id = randomIdGenerator();
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
        for (let j = 0; j < array.length; j++) {
            if (array[j].id === divID) {
                array.splice(array[j], 1);
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
    array.length = 0;
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
        closeButton.addEventListener("click", clickHandler);
        function clickHandler() {
            divs.parentElement.removeChild(divs);
            const divID = this.parentNode.id;
            for (let j = 0; j < array.length; j++) {
                if (array[j].id === divID) {
                    array.splice(array[j], 1);
                }
            }
        };
    }
}