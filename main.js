//BEER OBJECT LIST 
const beerArray = [
    {
        name: 'beer 1',
        img: 'https://picsum.photos/200/300/?random',
        abv: '4.8%',
        description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
        price: 9.99,
        ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
    },
    {
      name: 'beer 2',
      img: 'https://picsum.photos/200/300/?random',
      abv: '12%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 15.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 3',
      img: 'https://picsum.photos/200/300/?random',
      abv: '9%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 7.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 4',
      img: 'https://picsum.photos/200/300/?random',
      abv: '5%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 13.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 5',
      img: 'https://picsum.photos/200/300/?random',
      abv: '10%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 16.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 6',
      img: 'https://picsum.photos/200/300/?random',
      abv: '7%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 24.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 7',
      img: 'https://picsum.photos/200/300/?random',
      abv: '18%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 29.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  },
  {
      name: 'beer 8',
      img: 'https://picsum.photos/200/300/?random',
      abv: '10%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 12.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };


//~~~~~~~~~~     PRODUCT PAGE: CARD PRINTER     ~~~~~~~~~~//
const beerCardBuilder = (arrayToPrint) => {
    const productPage = document.getElementById('productCon');
    if(productPage === null){//page conditional
        return;
    }
    else{
        let stringToPrint = '';
        let ingList = '';
    arrayToPrint.forEach((beer) =>{
        for(let i=0; i<beer.ing.length; i++){
            ingList += ` <li class="list-group-item">${beer.ing[i]}</li>`;
        };
        stringToPrint += 
        `<div class="card productCard col-3">
            <img class="card-img-top" src="${beer.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${beer.name}</h5>
                <p class="card-text">${beer.description}</p>
                <br>
                <p>ABV: ${beer.abv}</p>
                <br>
                <p>Price: $${beer.price}</p>
            </div>
            <ul class="list-group list-group-flush">
                <h6>Ingredients</h6>
                ${ingList}
            </ul>
        </div>`;
        ingList=``;
    })
        // BUTTONS FOR FUTURE FEATURES
    //     <div class="card-body">
    //     <a href="#" class="card-link">Card link</a>
    //     <a href="#" class="card-link">Another link</a>
    //   </div>
    printToDom('productCon', stringToPrint);
}};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const printMap = () => {
    const mapContainer = document.getElementById('mapContainer');
    if(mapContainer === null){
        return;
    } else{
    let domString = ``;
    domString += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.393140738528!2d-86.75879268470213!3d36.13263981268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646609ffab37eb%3A0x528b2eab4ef5110e!2s500+Interstate+Blvd+S%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1553963381330!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;
    printToDom('mapContainer', domString);
    };
};

let shoppingCartArray = [
    {
        name: 'Beer-1-name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 1.99,
        quantity: 1,

    },
    {
        name: 'Beer-2-name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 2.99,
        quantity: 2,
    },
    {
        name: 'Beer-3-name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 3.99,
        quantity: 3,
    },
    {
        name: 'Beer-4-name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 4.99,
        quantity: 4,
    },
    {
        name: 'Beer-5-name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 5.99,
        quantity: 5,
    }
];

const beerInCart = [];

const printCart = () =>{
    let domString = '';
    let i = 0
    shoppingCartArray.forEach((beer)=> {
        
        if(beer.quantity >= 1){
            domString += `<div class="col-sm-6">`;
            domString += `  <div class="card">`;
            domString += `     <div class="card-body">`;
            domString += `      <img class='card-img-top' src=${beer.imgUrl}>`;
            domString += `      <p class="card-text">${beer.name}</p>`;
            domString += `      <p class="card-text">$${beer.pricePer} per pack.</p>`;
            domString += `      <p class="card-text">Current quantity: ${beer.quantity} packs</p>`;
            domString += `      <a href="#" class="btn btn-primary">Change</a>`;
            domString += `     </div>`;
            domString += `      <form>`;
            domString += `          <div class="form-group">`;
            domString += `              <label for="${beer.name}">Change quantity</label>`;
            domString += `              <input type="text" class="form-control" id='${i}' value='${beer.quantity}'>`;
            domString += `          </div>`;
            domString += `      </form>`;
            domString += `  </div>`;
            domString += `</div>`;
            
            
            
            //shoppingCartArray[i].quantity = document.getElementById(`${i}Beer`).value
          
        };
        i++
    });
    printToDom('checkout-card-container', domString);
    
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ INDEX EMAIL SUBSCRIBE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const subscribeEmail = [];

const newSubscriber = () => {
    let indexPage = document.getElementById('indexPage');
    if(indexPage === null){//page conditional
        return;
    }
    else {
        let newDrinker = {
        fullName: document.getElementById('fullnameSubscribe').value,
        email: document.getElementById('exampleInputEmail1').value,
        }
    }
    //validation - bootstrap covers most of this
            // let textInput = document.getElementById('fullnameSubscribe').value;
            // let textInput2 = document.getElementById('exampleInputEmail1').value;
            // if (textInput.value !== null && textInput === "") {
            //     alert('Please enter a first and last name');
            // } else if (textInput2.value !== null && textInput2 === "") {
            //     alert('You must enter a valid email address')
            // } else {
            // }
    subscribeEmail.push(newDrinker);
};


// Event listener: USE consEventListeners When MERGE time comes. copy and paste these events into that function please.
constEventListeners2 = () => {
    document.getElementById('').addEventListener('click', modalSubscribe)
};


const modalSubscribe = () => {
    let indexPage = document.getElementById('indexPage');
    if(indexPage === null){//page conditional
        return;
    }
    else {
        let modString = '';
        modString += `<div class="modal" tabindex="-1" role="dialog">`;
        modString += `   <div class="modal-dialog" role="document">`;
        modString += `       <div class="modal-content">`;
        modString += `           <div class="modal-header">`;
        modString += `        <h5 class="modal-title">Modal title</h5>`;
        modString += `    <button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
        modString += `      <span aria-hidden="true">&times;</span>`;
        modString += `   </button>`;
        modString += `  </div>`;
        modString += `  <div class="modal-body">`;
        modString += `   <p>Modal body text goes here.</p>`;
        modString += `  </div>`;
        modString += `  <div class="modal-footer">`;
        modString += `    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
        modString += `    <button type="button" class="btn btn-primary">Save changes</button>`;
        modString += `  </div>`;
        modString += `</div>`;
        modString += `</div>`;
        modString += `</div>`;
    }
    printToDom('subscribeBtn', window);

};


// document.getElementById('subscribeBtn').addEventListener('click', newSubscriber())



// ~~~~~~~~~~~~~~~~~~~~~~~~~~ IMAGE CAROUSEL INDEX.HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const imagesArray = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/6.jpg', './imgs/6.jpg', './imgs/7.jpg', './imgs/8.jpg', './imgs/9.jpg', './imgs/10.jpg'];
let time = 5000;
// let i = 0;

// THIS ONE WORKS BEST !!!!!!
const changeImg = () => {
    let indexPage = document.getElementById('indexPage');
    if(indexPage === null){//page conditional
        return;
    }
    else {
    let imgString = ''; 
    imagesArray.forEach((image, i) => {
        setTimeout(() => {
            imgString = `<img class="myCarousel" src=${image}>`;
            console.log(image);
            printToDom('carouselLoop', imgString);
        }, time * i);
        
    });
};
};


// Old for loop BUT works
// const changeImg = () => {
//     let domString = ''; 
//     for (let i = 0; i < imagesArray.length; i++) {
//         setTimeout(() => {
//             domString = `<img class="myCarousel" src=${imagesArray[i]}>`;
//             console.log(imagesArray[i]);
//             printToDom('carouselLoop', domString);
//         }, time * i);
//     };
// };


// THIS do/while also works
// const changeImg = () => {
//     let domString = '';
//     let i = 0;
//     do {
//         (function (i) {
//             setTimeout(function () {
//               domString = `<img class="myCarousel" src=${imagesArray[i]}>`;
//               console.log(imagesArray[i]);
//               printToDom('carouselLoop', domString);
//             }, 1000 * i);
//           })(i);
//           i++;     
//     } 
//     while (i < imagesArray.length);
//         // setInterval('changeImg()', time);
// };


// ~~~~~~~~~~~~~~~~~~~~ BEER CART ~~~~~~~~~~~~~~~~~~~~



const init = () =>{
    // printCart();
    printMap();
    beerCardBuilder(beerArray);
    changeImg();
};
init();
