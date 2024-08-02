import { Product, taxCalculation, } from './06-function-destructuring';


const notebook : Product = {
    description: "Notebook DELL Ryzen 5",
    price: 700
}

const shoppingCart : Product[] = [notebook];

console.log([notebook]);

const [total, totalTax] = taxCalculation({tax :0.15, products : shoppingCart});

console.log("Notebook sin tax : " + total); 
console.log("Notebook con tax :" + total + totalTax);





