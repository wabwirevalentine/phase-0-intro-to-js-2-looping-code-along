// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

//writeCards
function writeCards(names, event) {
  const thankYouMsg = [];
  for (let i = 0; i < names.length; i++) {
    // const message = names[i];
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    thankYouMsg.push(message);
  }
  return thankYouMsg;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));

function countDown(params) {
  while (params >= 0) {
    console.log(params);
    params--;
  }
}
console.log(countDown(10));
