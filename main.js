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

const init = () => {
    beerCardBuilder(beerArray);
};

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

init();
