const subscribeIndexEmail = [];
const imagesArray = ['./imgs/carousel1.jpg', './imgs/carousel2.jpg', './imgs/carousel3.jpg', './imgs/carousel4.jpg', './imgs/carousel6.jpg', './imgs/carousel7.jpg', './imgs/carousel8.jpg', './imgs/carousel9.jpg', './imgs/carousel10.jpg'];
let time = 5000;


//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

//Brewer list
const brewers = [
    {
        name: 'Tony Andrews',
        photo: `../imgs/brewer1.jpg`,
        hometown: `Hartwell, Georgia`,
        favoriteBeers: [
            {
                faveBeerName: 'Duck Duck Gooze',
                faveBeerBrewery: 'The Lost Abbey'
            },
            {
                faveBeerName: 'Orval Trappist Ale',
                faveBeerBrewery: `Brasserie d'Orval`
            },
            {
                faveBeerName: 'Headroom',
                faveBeerBrewery: 'Trillium' 
            },
        ]
        },
    {
        name: 'Sara Smith',
        photo: `../imgs/brewer2.jpg`,
        hometown: `Atlanta, Georgia`,
        favoriteBeers: [
            {
                faveBeerName: 'Darkness',
                faveBeerBrewery: 'Surly Brewing Company'
            },
            {
                faveBeerName: 'The Abyss',
                faveBeerBrewery: 'Deschutes Brewing Company'
            },
            {
                faveBeerName: 'Double Barrel Jesus',
                faveBeerBrewery: 'Evin Twin Brewing'
            },
        ]
    },
    {
        name: 'Amy Johnson',
        photo: `../imgs/brewer3.jpg`,
        hometown: `Chicago, Illinois`,
        favoriteBeers: [
            {
                faveBeerName: 'Bourbon Paradise Ale',
                faveBeerBrewery: 'Prairie Artisan Ales'
            },
            {
                faveBeerName: 'Chocolate Cupcake Stout',
                faveBeerBrewery: 'Angry Chair Brewing'
            },
            {
                faveBeerName: 'Atrial Rubicite',
                faveBeerBrewery: 'Jester King'
            },
        ]
    },
    {
        name: 'Andrew Ayers',
        photo: `../imgs/brewer4.jpg`,
        hometown: `Nashville, Tennessee`,
        favoriteBeers: [
            {
                faveBeerName: 'Omnipollo Yellow Belly',
                faveBeerBrewery: 'Buxton Brewery'
            },
            {
                faveBeerName: 'Fuzzy',
                faveBeerBrewery: 'Side Project'
            },
            {
                faveBeerName: 'Imperium Prunum',
                faveBeerBrewery: 'Browar Kormoran'
            },
        ]
    },
];

//This function prints the map showing the location of the brewery to the DOM of the Taproom page
const printMap = () => {
    const mapContainer = document.getElementById('mapContainer');
    if(mapContainer === null){
        return;
    } else {
    let domString = ``;
    domString += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.393140738528!2d-86.75879268470213!3d36.13263981268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646609ffab37eb%3A0x528b2eab4ef5110e!2s500+Interstate+Blvd+S%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1553963381330!5m2!1sen!2sus" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>`;
    printToDom('mapContainer', domString);
    };
};

//This function prints the address and contact information of the brewery beside the map on the taproom key
const printContactInfo = () => {
    const contactInfoContainer = document.getElementById('contactInfoContainer');
    if (contactInfoContainer === null) {
        return;
    } else {
        let domString = ``;
        domString += `<div id="contactText">`
        domString +=    `<h2>Visit our Brewery</h2>`
        domString +=    `<p>Kiss the Goat Brewery</p>`;
        domString +=    `<p>500 Interstate Blvd South</p>`;
        domString +=    `<p>Nashville, Tennessee 37210</p>`;
        domString +=    `<p>Phone: (615) 736-0000</p>`;
        domString +=    `<button class="btn" id="scheduleTour">Click here to schedule a tour</button>`
        domString += `</div>`

        printToDom('contactInfoContainer', domString)
    }
};

//This causes an alert to appear when someone clicks the 'Schedule a Tour' button on the Taproom page
const scheduleAlert = () => {
    const scheduleTour = document.getElementById('scheduleTour');
    if (scheduleTour === null) {
        return;
    } else {
    alert("Your request to schedule a brewery tour has been received. We'll be in touch shortly!");
    }
};

//This function prints 'Meet Our Brewers' above the photos of brewers on the taproom page
const printBrewerTitle = () => {
    const brewerTitleContainer = document.getElementById('brewerTitleContainer');
    if (brewerTitleContainer === null) {
        return
    } else {
    let domString = ``;
    domString += `<h2 id="meetTheBrewersTitle">Meet our Brewers</h2>`;
    printToDom('brewerTitleContainer', domString);
    }
};

//this function prints the photos of the brewers on the Taproom page
const printBrewerPhotos = () => {
    const brewerCardContainer = document.getElementById('brewerCardContainer');
    if (brewerCardContainer === null) {
        return
    } else {
    let domString = ``;
    brewers.forEach((brewer) => {
        let faveBeerString = '';
        brewer.favoriteBeers.forEach((beer) => {
            faveBeerString += `<li>${beer.faveBeerName}, ${beer.faveBeerBrewery}</li>`
        });
        domString += `<div class="col-lg-6 col-sm-12 col-md-12"`
        domString +=  `<div class="card text-center brewerCard">`; //CARD
        domString +=   `<div class="brewerPhotoAndDescriptionWrap">`; //PHOTO AND DESCRIPTION WRAP
        domString +=     `<img class="brewerPhotoWrap" src="${brewer.photo}">`; //BREWER PHOTO
        domString +=     `<div class="brewerDescriptionWrap">`; //DESCRIPTION WRAP
        domString +=       `<h4>${brewer.name}</h4>`;
        domString +=       `<h5>Hometown: ${brewer.hometown}</h5>`;
        domString +=       `<h5>Favorite beers: </h5>`;
        domString +=       `<ul class="faveBeerList list-unstyled text-center">`;
        domString +=            `${faveBeerString}`;
        domString +=       `</ul>`;
        domString +=     `</div>`; //END DESCRIPTION WRAP
        domString +=   `</div>` //END PHOTO AND DESCRIPTION WRAP
        domString +=  `</div>`; //END CARD
        domString += `</div>`; //END COLUMN
        printToDom('brewerCardContainer', domString);
      });
    }
};

//BEER OBJECT LIST 
const beerArray = [
    {
        name: 'PERMANENT FUNERAL',
        id: 'beer1',
        img: '../imgs/beer1.png',
        abv: '10.5%',
        description: 'The wolf inside this pale ale is trying to walk upright. This bright and aromatic beer was brewed with our friends in the band Pig Destroyer.',
        price: 9.99,
        ing: ['Water', 'Hops', 'Yeast', 'Wolf Guts'],
        quantity: 1
    },
    {
      name: 'ZOMBIE DUST',
      id: 'beer2',
      img: '../imgs/beer2.png',
      abv: '6.2%',
      description: 'This intensely hopped and gushing undead Pale Ale will be one’s only respite after the zombie apocalypse. Created with our marvelous friends in the comic industry.',
      price: 15.99,
      ing: ['Water', 'Hops', 'Yeast', 'Brains', 'Zombie Guts'],
      quantity: 1
  },
  {
      name: 'APOCALYPSE COW',
      id: 'beer3',
      img: '../imgs/beer3.png',
      abv: '8.6%',
      description: 'This complex double India Pale Ale has an intense citrus and floral hop aroma balanced by a velvety malt body augmented with lactose milk sugar. With this different take on an IPA we have brewed an ale that is both pleasing to drink and once again “not normal."',
      price: 7.99,
      ing: ['Water', 'Hops', 'Yeast', 'Flower Stuff', 'Milk'],
      quantity: 1
  },
  {
      name: 'YUM YUM',
      id: 'beer4',
      img: '../imgs/beer4.png',
      abv: '5.5%',
      description: 'Welcome to flavor country. This Pale Ale has just the right malt backbone to support an explosive juicy hop profile. Derived from a new blend of proprietary hops. We hope you’ll enjoy it. Cheers!',
      price: 13.99,
      ing: ['Water', 'Hops', 'Yeast', 'Flavor Town'],
      quantity: 1
  },
  {
      name: 'BEHEMOTH',
      id: 'beer5',
      img: '../imgs/beer5.png',
      abv: '10.5%',
      description: 'A huge, sweet Barley Wine with complex caramel malt notes, balanced by generous hopping and a high alcohol content. This fruity and malty beer is best enjoyed while keeping warm in the brutal winter months. January release.',
      price: 16.99,
      ing: ['Water', 'Hops', 'Yeast', 'Malts', 'Time'],
      quantity: 1
  },
  {
      name: 'SPACE STATION MIDDLE FINGER',
      id: 'beer6',
      img: '../imgs/beer6.png',
      abv: '6%',
      description: 'From the dawn of time, humans have looked to the sky for answers. Space Station Middle Finger replies to all from its eternal orbit. Behold and enjoy Space Station Middle Finger, a bright golden American Pale Ale.',
      price: 24.99,
      ing: ['Water', 'Hops', 'Yeast', 'Aliens'],
      quantity: 1
  },
  {
      name: 'GUMBALLHEAD',
      id: 'beer7',
      img: '../imgs/beer7.png',
      abv: '5.6%',
      description: 'An American wheat ale brewed with white wheat and dry hopped with hand-selected hops from the Yakima Valley. Bright and refreshing with a lemony finish.',
      price: 29.99,
      ing: ['Water', 'Hops', 'Yeast', 'Wheat', 'Lemons', 'Gum From Under The Table At IHOP'],
      quantity: 1
  },
  {
      name: 'DARK LORD',
      id: 'beer8',
      img: '../imgs/beer8.png',
      abv: '15%',
      description: 'A demonic Russian-Style Imperial Stout brewed with coffee, Mexican vanilla and Indian sugar, this beer defies description.',
      price: 12.99,
      ing: ['Water', 'Hops', 'Yeast', 'Coffee', 'Mexican Vanilla', 'Indian Sugar', 'Souls Of The Innocent'],
      quantity: 1
  }
];
const shoppingCartArray = [];


const beerCardBuilder = (arrayToPrint) => {//~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARD BUILDER FUNCTION~~~~//
    const productPage = document.getElementById('productCon');
    if(productPage === null) {//page conditional
        return;
    }
    else {
        let stringToPrint = '';
        let ingList = '';
    arrayToPrint.forEach((beer) =>{
        for(let i=0; i<beer.ing.length; i++){
            ingList += ` / ${beer.ing[i]} / `;
        };
        stringToPrint += 
        `<div class="card productCard">
            <img class="card-img-top" src="${beer.img}" alt="Card image cap">
            <div class="card-body productCardBody">
                <h1 class="card-title productCardH">${beer.name}</h1>
                <p class="card-text productCardP">${beer.description}</p>
                <a href="./checkoutPage.html" class="linkCo link${beer.id}" id="link${beer.id}">Checkout Here!</a>
                <button class="btn addToCart productBtn" type="button" id="add${beer.id}">
                    Add To Cart
                </button>
                    <br>
                <button class="btn seeMore productBtn" type="button" data-toggle="collapse" data-target="#seeMore${beer.id}">
                    See More
                </button>
                <div class="collapse" id="seeMore${beer.id}">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: $${beer.price}</li>
                        <li class="list-group-item">ABV: ${beer.abv}</li>
                            <br>
                        <p>Ingredients:</p>
                        <p class="ingList">${ingList}</p>
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
            shoppingCartArray.push(cartItem);
            idTxt.innerHTML = 'Added!'
            aId.style.visibility='visible';
            localStorage.setItem('shoppingCartArray', JSON.stringify(shoppingCartArray));
        };
    };
    // JP DO NOT DELETE
    localStorage.setItem('beerCartArray2', JSON.stringify(shoppingCartArray));
    console.log(JSON.parse(localStorage.getItem("beerCartArray2")));
    cartIconCounter(); // JP line for cart counter
};


const addToCartListeners = () => {//~~~~~~~~~~~ADD TO CART LISTENERS~~~~~~~~~~~~~//
    for(i=0; i<beerArray.length; i++){
        const btnId= document.getElementById(`add${beerArray[i].id}`);
        btnId.addEventListener('click', addToCart);
    }
};




let cartCounter = [];

const cartIconCounter = () => {
    if (document.getElementById('indexPage') === null) {
        return;
    } else {
    console.log('          cart icon counter running');
    let cartCounter = JSON.parse(localStorage.getItem("beerCartArray2"))

    let domString = '';
    if (cartCounter.length !== -1) {
        console.log('item getting through');
        domString += `<span id="lblCartCount" class="badge badge-light">${cartCounter.length}</span>`;
        printToDom('cartCounter2', domString);
    } else {
        return;
    }
    }
};

/*let shoppingCartArray = [
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
];*/

const beerInCart = JSON.parse(localStorage.getItem('shoppingCartArray'));


const printCart = () =>{
    let beerTotal = 0;
    
    const checkoutPage = document.getElementById('checkout-card-container');
    if(checkoutPage===null){
        return;
    } else{
    let domString = '';
    beerInCart.forEach((beer)=> {
        
        if(beer.quantity >= 1){
            domString += `<div class="col-sm-3">`;
            domString += `  <div class="card">`;
            domString += `     <div class="card-body">`;
            domString += `      <img class='card-img-top' src=${beer.img}>`;
            domString += `      <p class="card-text">${beer.name}</p>`;
            domString += `      <p class="card-text">$${beer.price} per pack.</p>`;
            domString += `      <p class="card-text">Current quantity: ${beer.quantity} pack(s)</p>`;
            domString += `     </div>`;
            domString += `      <form>`;
            domString += `          <div class="form-group">`;
            domString += `              <label for="${beer.name}">Change quantity</label>`;
            domString += `              <input type="text" class="form-control w-10" id='${beer.name}form' value=''>`;
            domString += `      <button type='button' class="changeButton" id='${beer.name}'>Change</button>`;
            domString += `          </div>`;
            domString += `      </form>`;
            domString += `  </div>`;
            domString += `</div>`;
            beerTotal += (Math.round((beer.price * beer.quantity)*100)/100);
        };
    });
    document.getElementById('cart-total').innerHTML = 'Total: $' + beerTotal;
    printToDom('checkout-card-container', domString);
    addChangeEvents();
    console.log(beerTotal);
    document.getElementById('checkout-btn').addEventListener('click', clearStorage);
};
};

const addChangeEvents = () =>{
    const changeButtons = document.getElementsByClassName('changeButton');
    for(let i=0; i<changeButtons.length; i++){
        changeButtons[i].addEventListener('click', changeQuantity);
    }
  };

  const changeQuantity = (e) =>{
    const buttonId = e.target.id;
    const quantityFormInput = document.getElementById(`${buttonId}form`).value;
    beerInCart.forEach((beer, index)=>{
        if(beer.name === buttonId){
        beerInCart[index].quantity = quantityFormInput;
        };
    });
    printCart();
    addChangeEvents();
};

    


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ INDEX EMAIL SUBSCRIBE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const subscribeEmail = [];

const newSubscriber = () => {
    let newDrinker = {
        fullName: document.getElementById('fullnameSubscribe').value,
        email: document.getElementById('exampleInputEmail1').value,
    }
    subscribeEmail.push(newDrinker);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ IMAGE CAROUSEL INDEX.HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

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


// ~~~~~~~~~~~~~~~~~~~~ BEER CART ~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~ INDEX EMAIL SUBSCRIBE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const subscribeFunction = (e) => {
    let indexPage = document.getElementById('indexPage');
    if(indexPage === null){//page conditional
        return;
    }
    else {
    e.preventDefault();
    let newDrinker = {
        fullName: document.getElementById('fullnameSubscribe').value,
        email: document.getElementById('exampleInputEmail1').value,
        }
    subscribeIndexEmail.push(newDrinker);
    }
};

const clearStorage = () => {
   localStorage.removeItem('beerCartArray2');
   document.getElementById('checkout-card-container').innerHTML = "<image class='img d-flex flex-wrap w-25 h-25' src='https://i.imgur.com/JIFtb2n.jpg'>";
   alert('Enjoy your hooch :)');
};

const eventListeners = () => {
    const scheduleTour = document.getElementById('scheduleTour');
    if (scheduleTour === null) {
        return;
    } else {
    scheduleTour.addEventListener('click', scheduleAlert);
    };
    document.getElementById('subscribeBtn').addEventListener('click', subscribeFunction);
    if (document.getElementById('indexPage') !== null) {
        window.addEventListener('load', cartIconCounter);
    };
};


const init = () =>{
    printMap();
    printCart();
    beerCardBuilder(beerArray);
    printContactInfo();
    printBrewerTitle();
    printBrewerPhotos();
    eventListeners();
    changeImg();
};

init();
