//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

//Brewer list
const brewers = [
    {
        name: 'Emily DeWitt',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Hartwell, Georgia`,
        favoriteBeers: ['Wiseacre Tiny Bomb', 'Red Stripe', 'Tecate'],
    },
    {
        name: 'Josh Pantana',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Atlanta, Georgia`,
        favoriteBeers: ['Miller Lite', 'Old Speckled Hen', 'Dos Equis'],
    },
    {
        name: 'Keith Walker',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Chicago, Illinois`,
        favoriteBeers: ['Fullers ESB', 'Budweiser', 'Newcastle Brown Ale'],
    },
    {
        name: 'Austin Casey',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Nashville, Tennessee`,
        favoriteBeers: ['Chicken Scratch', 'Peanut Butter Milk Stout', 'Jackalope'],
    },
];

//This function prints the map showing the location of the brewery to the DOM of the Taproom page
const printMap = () => {
    const mapContainer = document.getElementById('mapContainer');
    if(mapContainer === null){
        return;
    } else {
    let domString = ``;
    domString += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.393140738528!2d-86.75879268470213!3d36.13263981268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646609ffab37eb%3A0x528b2eab4ef5110e!2s500+Interstate+Blvd+S%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1553963381330!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;
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
    domString += '<div class="row">';
    brewers.forEach((brewer) => {
        domString += `<div class="card text-center col-6 brewerCard">`; //CARD
        domString +=   `<div class="brewerPhotoAndDescriptionWrap">`; //PHOTO AND DESCRIPTION WRAP
        domString +=     `<img class="brewerPhotoWrap" src="${brewer.photo}">`; //BREWER PHOTO
        domString +=     `<div class="brewerDescriptionWrap">`; //DESCRIPTION WRAP
        domString +=       `<h4>${brewer.name}</h4>`;
        domString +=       `<h5>Hometown: ${brewer.hometown}</h5>`;
        domString +=       `<h5>Favorite beers: ${brewer.favoriteBeers}</h5>`;
        domString +=     `</div>`; //END DESCRIPTION WRAP
        domString +=   `</div>` //END PHOTO AND DESCRIPTION WRAP
        domString +=  `</div>`; //END CARD
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
const beerCartArray = [];


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
            const aId = document.getElementById(`link${beerArray[i].id}`);
            beerCartArray.push(shoppingCartArray);
            idTxt.innerHTML = 'Added!';
            aId.style.visibility='visible';
        };
    };
};

const addToCartListeners = () => {//~~~~~~~~~~~ADD TO CART LISTENERS~~~~~~~~~~~~~//
    for(i=0; i<beerArray.length; i++){
        const btnId= document.getElementById(`add${beerArray[i].id}`);
        btnId.addEventListener('click', addToCart);
    }
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

// const beerInCart = [];


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
    let newDrinker = {
        fullName: document.getElementById('fullnameSubscribe').value,
        email: document.getElementById('exampleInputEmail1').value,
    }
    subscribeEmail.push(newDrinker);
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ IMAGE CAROUSEL INDEX.HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const imagesArray = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/6.jpg', './imgs/6.jpg', './imgs/7.jpg', './imgs/8.jpg', './imgs/9.jpg', './imgs/10.jpg'];
let time = 3500;



const changeImg = () => {
    let imgString = ''; 
    imagesArray.forEach((image, i) => {
        setTimeout(() => {
            imgString = `<img class="myCarousel" src=${image}>`;
            console.log(image);
            printToDom('carouselLoop', imgString);
        }, time * i);
        return;
    });
};

const eventListeners = () => {
    document.getElementById('scheduleTour').addEventListener('click', scheduleAlert);
};

const init = () =>{
    printCart();
    printMap();
    beerCardBuilder(beerArray);
    printContactInfo();
    printBrewerTitle();
    printBrewerPhotos();
    eventListeners();
    changeImg();
};

init();
