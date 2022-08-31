const quotesUrl = "http://localhost:3000/quotes";

const quoteForm = document.querySelector("#quote-form")
console.log(quoteForm)
quoteForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit (event) {
    event.preventDefault();
    let quoteObj = {
        quote: event.target.quote.value,
        author: event.target.author.value,
        category: event.target.category.value,
        likes: 0
    }
    event.target.reset(); //Reset the form
    renderQuoteDetails(quoteObj);
    createQuote(quoteObj);
}

//Fetch Quote Details
function fetchQuoteDetails () {
    return fetch(quotesUrl)
    .then(response => response.json())
}

fetchQuoteDetails().then(quotes => {
    quotes.forEach((quote => {
        renderQuoteDetails(quote);
    }))
})

//Display Quotes
function renderQuoteDetails (quote) {
    const quoteSection = document.querySelector(".card-group");
    const quoteCard = document.createElement("div");
    quoteCard.className= "card mt-5";
    quoteCard.id = "card"
    quoteCard.innerHTML = `
    <div class="card-body">
        <div class="icon">
            <i class="fa-solid fa-quote-right"></i>
        </div>
        <h3>"${quote.quote}"</h3>
        <p>
            <span> Author: </span>${quote.author}
        </p>
        <p>
            <span> Category: </span>${quote.category}</p>
        <p>
            <button id="like-button" class="like-button">♥</button>
            <span class="quote-count">${quote.likes}</span> likes
        </p>
        <i class="fa fa-trash"></i>
    </div>`
    
    //Add Quote Likes
    quoteCard.querySelector("#like-button").addEventListener("click", () => {
        quote.likes += 1;
        quoteCard.querySelector(".quote-count").innerHTML = quote.likes;
        updateLikes(quote);
    })

    //Delete quote card
    quoteCard.querySelector(".fa-trash").addEventListener("click", () => {
        quoteCard.remove();
        const dangerAlert = document.getElementById("danger");
        dangerAlert.style.display = "block"  //Display deleted message
        deleteQuote(quote.id);
    })

    //Add quotes card to DOM
    quoteSection.appendChild(quoteCard);
}