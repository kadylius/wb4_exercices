'Use strict';

let products = [

    {
        name: "Amina",
        description: "oval bag",
        brand: "Style Avenue",
        color: "Green",
        price: 29.99
    },
    
    {
        name: "vacation",
        description: "two piece set",
        brand: "Style Avenue",
        color: "Blue",
        price: 39.99
    },

    {
        name: "Diva",
        description: "dress",
        brand: "Style Avenue",
        color: "yellow",
        price: 29.99
    },

    {
    name: "sketch",
    description: "sneakers",
    brand: "nike",
    color: "Grey",
    price: 99.99
}
]

    console.log(`The product ${products[2].name} cost $${products[2].price}. The brand is ${products[2].brand} and it is a ${products[2].color} ${products[2].description}`);


// function display product

//example: function DisplayProduct(_product) {
 //   console.log(`${_product.title} by ${_product.artist} costs $${_product.price}.`)     };
// DisplayProduct(products[2]);

function DisplayProduct(_products) {
    console.log(`${_products.name} by ${_products.brand} costs $${_products.price}.`)
};

//DisplayProduct(products[2]);
// product 1 parameter
// function products(x) {
 //    console.log(x.price);
// };
// calling argament
// products(product[2])
// products(product[0])

// let book = {
   // title: "Eat that frog",
   //  price: 19.95,
  //   displayInformation: function() {
   //     return `Title: ${this.title} and price ${this.price}`
  //  }
// }
// document.getElementById(`book`).innerHTML = book2.displayInformation();

// console.log(book.displayInformation());

let person = {
    firstname: 'kadi',
    lastname: 'barry',
    fullname: function () {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

let person2 = {
    firstname: 'brad',
    lastname: 'pitt',
    fullname: function () {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

//This look at the object we are referencing to
// person.fullname();
// person2.fullname();
// let firstname = 'kadi';
// let lastname = 'barry';

let person6 = {
    firstname: 'Remsey',
    lastname: 'Mailjard',
    fullname: function() {
        //this outputs it
        console.log(`${this.firstname} ${this.lastname}`)
    }
    
}
person6.fullname();

console.log("Hi from person 1 the fullname is " + person6.fullname())

let person5 = {
    firstname: 'Remsey',
    lastname: 'Mailjard',
    fullname: function() {
        //this outputs it
        return `${this.firstname} ${this.lastname}`;
    }
    
}

let savedTheFullName = person5.fullname();
console.log("Hi from person 5 the fullname is " + savedTheFullName)

let book = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();
book.totalValue();

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);

