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
    alert("Your request to schedule a brewery tour has been received. We'll be in touch shortly!");
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

//~~~~~~~~~~     PRODUCT PAGE: CARD PRINTER     ~~~~~~~~~~//
const beerCardBuilder = (arrayToPrint) => {
    const productPage = document.getElementById('productCon');
    if(productPage === null) {//page conditional
        return;
    }
    else {
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

const printCart = () => {
    let domString = '';
    let i = 0;
    if(document.body.id === 'checkoutPage') {
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
    } else {
        return;
    };
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
};

init();
