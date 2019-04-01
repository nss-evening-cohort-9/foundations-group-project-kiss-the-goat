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
        // let beerId = `${beer.name}`;
        // beerId= beerId.replace(/ /g, '');
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
// IGNORE THIS
// const addToCart = () => {
//     for(i=0; i<beerArray.length; i++){
//         let btnId = `addToCart${beerArray[i].name}`;
//         btnId = btnId.replace(/ /g, '');
//         let btnIdSelector = document.getElementById(`${btnId}`)
//         btnIdSelector.addEventListener('click',)
//     }
// };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// const printNavBar = () => {

//     let domString = ``;
//     domString +=
//     `<nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//                 <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//                 <a class="nav-item nav-link" href="#">Features</a>
//                 <a class="nav-item nav-link" href="#">Pricing</a>
//                 <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </div>
//         </div>
//     </nav>`
//     printToDom('navBar', domString);
// };

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

const shoppingCartArray = [
    {
        name: 'Beer 1 name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 1.99,
        quantity: 1,

    },
    {
        name: 'Beer 2 name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 2.99,
        quantity: 2,
    },
    {
        name: 'Beer 3 name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 3.99,
        quantity: 3,
    },
    {
        name: 'Beer 4 name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 4.99,
        quantity: 4,
    },
    {
        name: 'Beer 5 name',
        imgUrl: 'https://via.placeholder.com/148',
        pricePer: 5.99,
        quantity: 5,
    }
];

const printCart = () =>{
    const checkoutPage = document.getElementById('checkout-card-container');
    if(checkoutPage===null){
        return;
    } else{
    let domString = '';
    shoppingCartArray.forEach((beer)=> {
        //if(beer.quantity >= 1){
            domString += `<div class="col-sm-6">`;
            domString += `  <div class="card">`;
            domString += `     <div class="card-body">`;
            domString += `      <img class='card-img-top' src=${beer.imgUrl}>`;
            domString += `      <p class="card-text">${beer.name}</p>`;
            domString += `      <p class="card-text">$${beer.pricePer} per pack.</p>`;
            domString += `      <p class="card-text">Current quantity: ${beer.quantity} packs</p>`;
            domString += `      <a href="#" class="btn btn-primary">Change</a>`;
            domString += `     </div>`;
            domString += `  </div>`;
            domString += `</div>`;
          
        //};
    });
    printToDom('checkout-card-container', domString);
}
};

const init = () =>{
    printCart();
    // printNavBar();
    printMap();
    beerCardBuilder(beerArray);
};
init();
