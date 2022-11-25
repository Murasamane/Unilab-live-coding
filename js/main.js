'use strict';
const dataAraay = [
  {
    userId: 1,
    userName: "სახელი 1",
    userLastName: "გვარი 1",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 20,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 2,
    userName: "სახელი 2",
    userLastName: "გვარი 2",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 30,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 3,
    userName: "სახელი 3",
    userLastName: "გვარი 3",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 35,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 4,
    userName: "სახელი 4",
    userLastName: "გვარი 4",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 29,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 5,
    userName: "სახელი 5",
    userLastName: "გვარი 5",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 49,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 6,
    userName: "სახელი 6",
    userLastName: "გვარი 6",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 7,
    userName: "სახელი 7",
    userLastName: "გვარი 7",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
];

const section = document.querySelector('.cards')

const cardTemplateBuilder = (obj) => {
  const htmlTemplate = `
    <div class="card__body">
    <div class="card__id--sec">${obj.userId}</div>
    <div class="card__img">
        <img src="${obj.userImage}" alt="" class="card__image">
    </div>
    <div class="card__name">
        <p class="card__para__name">Name: ${obj.userName} ${obj.userLastName}</p>
    </div>
    <div class="card__age">Age: ${obj.userAge}</div>
    <div class="card__footer">
    <ul class="card__addresses">
        <li class="addresses">${obj.userAddresses[0]}</li>
        <li class="addresses">${obj.userAddresses[1]}</li>
        <li class="addresses">${obj.userAddresses[2]}</li>
    </ul>
</div>
</div>
    `;
    section.innerHTML+=htmlTemplate;
};

const cardBuilder = arr =>{
    arr.forEach(item => cardTemplateBuilder(item))
}

cardBuilder(dataAraay);


const cardClicks = () =>{
    section.addEventListener('click',e=>{
        if(e.target.classList.contains('card__body')){
            e.target.classList.toggle('active')
        }
    })
}

cardClicks();