// An array of quote object
let quote = [
  { text: "Don't wish for it work for it", category:"Motivation"},
  { text:"One day all those late night and early morning will pay off.", category:"Life"}
];

// function to disply random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quote.length );
  const randomQuote =quotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Create Form
const form = document.createElement('form');
form.innerHTML = `<div>
<input id="newQuoteText" type="text" placeholder="Enter a new quote" />
<input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
<button onclick="addQuote()">Add Quote</button>
</div>`;

// Add the form to the page
document.body.appendChild(form);

//Function to addNew quote
function createAddQuoteForm(){
  const  newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById ('newQuoteCategory').value;

}
  // Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault()});

  //new quote local storage
  localStorage.setItem("newQuoteText",JSON.stringify(newQuotesText));

//loading quotes from local storage on initialization
const newQuotesText =JSON.parse (localStorage.getItem('newQuotesText'));



const exportButton = document.getElementById('exportQuotes');
exportButton.addEventListener('click', function() {
  const jsonString = JSON.stringify(quotes, null, 2); // Add indentation for readability
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Create a link and trigger a download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'quotes.json';
  link.click();

  // Release the URL object
  URL.revokeObjectURL(url);
});