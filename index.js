let arr = [{
    name: 'Hovik',
    lastname: 'Shitikyan',
    age: 20,
},
{
    name: 'Miqo',
    lastname: 'Nazaryan',
    age: 23,
},
{
    name: 'Lilit',
    lastname: 'Miqaelyan',
    age: 14,
},
{
    name: 'Arshak',
    lastname: 'Sadoyan',
    age: 30,
},
{
    name: 'Vazgen',
    lastname: 'Surenyanc',
    age: 85,
},
{
    name: 'Argam',
    lastname: 'Torgomyan',
    age: 62,
}
]

for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 30) {
        delete(arr[i]);
    }
}

arr.forEach(create)

function create () {
    let x = document.createElement('div');
    x.classList.add('card');
    console.log(arr[0].age)
    document.querySelector('.main').appendChild(x);
    for (let i = 0; i < arr.length; i++) {
        x.innerHTML = arr[i].age;
    }
    
}
