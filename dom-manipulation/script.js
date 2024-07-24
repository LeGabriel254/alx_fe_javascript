// An array of quote object
let quote = [
  { text: "Don't wish for it work for it", category:"Motivation"},
  { text:"One dayall those late night and early morning will pay off.", category:"Life"}
];

// function to disply random quote
function showRandomQuote() {
  const randomIndex = Math.floor(math.random() * quote.length );
  const randomQuote =quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerText = `"${randomQuote.text}" - ${randomQuote.category}`;
}