
export interface Product {
    description: string;
    price: number;

}


const phone : Product = {
    description : "iPhone 14 Pro MAX",
    price: 1000,
}

const tablet : Product = {
    description : "iPad Air",
    price: 400,
}

const shoppingCart : Product[] = [phone, tablet];
const tax = 0.15;

// --
export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


function taxCalculation(options:TaxCalculationOptions) : number[] {
    let total = 0;
    options.products.forEach(prod => {
        const {price } = prod;
        total += price;
    });

    total += total * tax;

return [total, total * options.tax];


};

export const [total, totalTax] = taxCalculation({
   tax,
   products: shoppingCart
});


shoppingCart.forEach( ({description, price}) => {

    console.log(`Total de el producto ${description} : $.price} | Con impuesto : ${price +totalTax}`);
    console.log(`Total de compra: ${(total + totalTax)}`);    
    
})


export { taxCalculation, tax };

