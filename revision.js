class makeBrand {
  constructor(brand, type, slogan) {
    this.brand = brand;
    this.type = type;
    this.slogan = slogan;
  }

  shout(name) {
    console.log(`Welcome Back! ${name} 😀`);
  }

  markSlogan() {
    console.log(`We own the ${this.slogan}`);
  }
}
const userName = prompt("What is your name?");
console.log(newBrand.shout(userName));

let brandName = prompt("What is the brand name?");
let productType = prompt("What do you sell now?");
let yourSlogan = prompt("What is the slogan?");

let newBrand = new makeBrand(brandName, productType, yourSlogan);
console.table(newBrand);
// console.log(newBrand.markSlogan());
