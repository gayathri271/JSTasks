// var Item=200;
// let Cart=[Item]
// const tax1=0.02;
// const Discount1=0.01;
// let Total=Item+tax1
// let FinalTotal=Total-Discount1

// setTimeout(()=>{
//     console.log("Ordered:",FinalTotal);
// },500)

const tax = 0.3; //30%
const Discount = 0.1; //10%
let cart = [];

function CartItem() {
  Item = {
    name: "Pizza",
    cost: 500,
  };
  let costPrice=Item.cost
  console.log(costPrice);

  let taxAmount = Item.cost * tax;
  console.log(taxAmount);
  let discountAmount = Item.cost * Discount;
  console.log(discountAmount);
  let FinalItem = Item.cost + taxAmount - discountAmount;
  cart.push(FinalItem);
  console.log("Item added successfully", cart);
  finalPrice = FinalItem;

  const final ={
    costPrice,
    taxAmount,
    discountAmount,
    finalPrice
  }
  return final;
}
let addedItem = CartItem();

setTimeout(() => {
  console.log("Ordered:", addedItem);
}, 5000);

const CartData = document.getElementById("cart");
CartData.innerHTML = `
        <h1>cart bill</h1>
        <p>ItemCost: ${addedItem.costPrice}</p>
        <p>TaxAmount: ${addedItem.taxAmount}</p>
        <p>DiscountAmount: ${addedItem.discountAmount}</p>
        <p>FinalPrice: ${addedItem.finalPrice}</p>
`;
