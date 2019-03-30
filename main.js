const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const printNavBar = () => {
    let domString = ``;
    domString +=
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
        </div>
    </nav>`
    printToDom('navBar', domString);
};

const printMap = () => {
    let domString = ``;
    domString += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.393140738528!2d-86.75879268470213!3d36.13263981268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646609ffab37eb%3A0x528b2eab4ef5110e!2s500+Interstate+Blvd+S%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1553963381330!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;
    printToDom('mapContainer', domString);
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
    if(document.body.id === 'checkoutPage'){
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
} else 
{ return };
};

beerInCart.push(document.getElementById().value);

const init = () =>{
        printCart();
        printMap();
        printNavBar();
};

init();