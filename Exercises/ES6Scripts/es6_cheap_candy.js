let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Reese's cup", price: 3.85},
    {product: "Skittles", price: 2.89},
    {product: "Snikers", price: 1.59},
    {product: "Sour Patch Kids", price: 4.29},
    {product: "Jolly Ranchers bag", price: 5.59},
    {product: "Twix", price: 2.18},
    {product: "KitKat", price: 5.39},
    {product: "StarBurst bag", price: 6.89},
    {product: "Milkyway", price: 2.65},
    {product: "Peach Rings bag", price: 7.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   //Which candies costs less than $4.00?
let cheatProducts = products.filter((p) => p.price <4);
console.log(cheatProducts);

console.log("=======================================");

//Which candies has M&M in its name?
let mmProducts = products.filter((p) => p.product.includes("M&M"));
console.log(mmProducts);

console.log("=======================================");

//Do we Carry swedish fish?

let swedishFish = products.filter((p)=> p.product == "Swedish Fish");
const answer = swedishFish ? "Yes" :"No";
console.log(answer);

