// An array of quote object
let quote = [
  { text: "Don't wish for it work for it", category:"Motivation"},
  { text:"One day all those late night and early morning will pay off.", category:"Life"}
];

// function to disply random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quote.length );
  const randomQuote =quote[randomIndex];
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


function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

//Populate Categories Dynamically
let category =quote.map();

document.getElementById('fileInput').addEventListener('change', handleFileSelect);
document.addEventListener('DOMContentLoaded',() =>  {
    populateCategories();
    categoryFilter();
    fetchQuotesFromServer();
    setInterval(fetchQuotesFromServer, 60000); // Periodically fetch quotes every 60 seconds
   

})


// Assuming you have a dropdown element with this id
let categoryDropdown = document.getElementById('categoryDropdown');

categories.forEach(category => {
    let option = document.createElement('option');
    option.textContent = category;
    categoryDropdown.appendChild(option);
});
//Remember selected filter
localStorage.setItem('lastCategory', category);
let lastCategory = localStorage.getItem('lastCategory');

function filterQuotes(category){
  let filteredQuotes =selectedCategory === 'all' ? quotes : quotes.filter(
    quote => quote.category === selectedCategory);
  }

  function addQuote(quote) {
    quotes.push(quote);
    categories = quotes.map(quote => quote.category).filter((value, index, self) => self.indexOf(value) === index);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    localStorage.setItem('categories', JSON.stringify(categories));
}

axios.get('https://jsonplaceholder.typicode.com/posts')
.let (response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error fetching data: ', error);
});

setInterval(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    localStorage.setItem('quotes', JSON.stringify(response.data));
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
}, 60000); // checks for new data every minute

// Simulate Server interaction
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("Fetched data from server:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch data from server", error);
  }
};
// Periodic data fetching
async function postQuotesToServer(quote) {
  await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(quote),
  });
}

async function syncQuotes() {
  const serverQuotes = await fetchQuotesFromServer();
  const serverQuoteTexts = serverQuotes.map(quote => quote.text);
  const localQuoteTexts = quotes.map(quote => quote.text);

  // Implementing  Data Syncing
  const newQuotes = serverQuotes.filter(quote => !localQuoteTexts.includes(quote.text));
  if (newQuotes.length > 0) {
      quotes.push(...newQuotes);
      saveQuotes();
      populateCategories();
      showNotification("Quotes synced with server!");
  }
  const newLocalQuotes = quotes.filter(quote => !serverQuoteTexts.includes(quote.text));
  for (const quote of newLocalQuotes) {
      await postQuotesToServer(quote);
  }
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
      notification.style.display = 'none';
  }, 5000);
}
