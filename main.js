//BEER OBJECT LIST 
const beerArray = [
    {
        name: 'beer 1',
        id: 'beer1',
        img: 'https://picsum.photos/200/300/?random',
        abv: '4.8%',
        description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
        price: 9.99,
        ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
        quantity: 1
    },
    {
      name: 'beer 2',
      id: 'beer2',
      img: 'https://picsum.photos/200/300/?random',
      abv: '12%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 15.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 3',
      id: 'beer3',
      img: 'https://picsum.photos/200/300/?random',
      abv: '9%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 7.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 4',
      id: 'beer4',
      img: 'https://picsum.photos/200/300/?random',
      abv: '5%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 13.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 5',
      id: 'beer5',
      img: 'https://picsum.photos/200/300/?random',
      abv: '10%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 16.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 6',
      id: 'beer6',
      img: 'https://picsum.photos/200/300/?random',
      abv: '7%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 24.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 7',
      id: 'beer7',
      img: 'https://picsum.photos/200/300/?random',
      abv: '18%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 29.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  },
  {
      name: 'beer 8',
      id: 'beer8',
      img: 'https://picsum.photos/200/300/?random',
      abv: '10%',
      description: 'lorem ipsum ipsum lorem lorem lorem ipsum',
      price: 12.99,
      ing: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4'],
      quantity: 1
  }
];
const beerCartArray = [];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

//~~~~~~~~~~     PRODUCT PAGE    ~~~~~~~~~~//


const beerCardBuilder = (arrayToPrint) => {//~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARD BUILDER FUNCTION~~~~//
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
        `<div class="card productCard col-2">
            <img class="card-img-top" src="${beer.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${beer.name}</h5>
                <p class="card-text">${beer.description}</p>
                <br>
                <p>ABV: ${beer.abv}</p>
                <br>
                <p>Price: $${beer.price}</p>
                    <button class="btn btn-primary seeMore" type="button" data-toggle="collapse" data-target="#seeMore${beer.id}" aria-expanded="false" aria-controls="collapseExample">
                        See More
                    </button>
                    <button class="btn btn-primary addToCart" type="button" id="add${beer.id}">
                        Add To Cart
                    </button>
                    <a href="./checkoutPage.html" class="linkCo link${beer.id}" id="link${beer.id}">Checkout Here!</a>
                <div class="collapse" id="seeMore${beer.id}">
                    <ul class="list-group list-group-flush">
                    <h6>Ingredients</h6>
                    ${ingList}
                    </ul>
                </div>
            </div>
        </div>`;
        ingList=``;
    })
    printToDom('productCon', stringToPrint);
    addToCartListeners();
}};


const addToCart = (e) =>{//~~~~~~~~~~~~~~~~~~~~ADD TO CART ARRAY PUSH~~~~~~~~~~~~~~//
    const id = e.target.id;
    let idTxt = e.target;

    for(i=0;i<beerArray.length; i++){
        if(id===`add${beerArray[i].id}`){
            const cartItem = beerArray[i];
            const aId = document.getElementById(`link${beerArray[i].id}`)
            beerCartArray.unshift(cartItem);
            idTxt.innerHTML = 'Added!'
            aId.style.visibility='visible';
        };
    };
};
const addToCartListeners = () => {//~~~~~~~~~~~ADD TO CART LISTENERS~~~~~~~~~~~~~//
    for(i=0; i<beerArray.length; i++){
        const btnId= document.getElementById(`add${beerArray[i].id}`);
        btnId.addEventListener('click', addToCart);
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


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
    const checkoutPage = document.getElementById('checkout-card-container');
    if(checkoutPage===null){
        return;
    } else{
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
        };
        i++
    });
    printToDom('checkout-card-container', domString);
};
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
const EventListeners2 = () => {
    const subscribeFunction = (e) => {
        e.preventDefault();
        $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
    };
    
    document.getElementById('subscribeBtn').addEventListener('click', subscribeFunction);
};



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
    EventListeners2();
};
init();
