// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
    console.log(res);
    const topics = Object.values(res.data.articles);
    console.log(topics);
    for (art of topics) {
        console.log(art);
        art.forEach(art => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        headline.textContent = art.headline;
        img.src = art.authorPhoto;
        authorName.textContent = art.authorName;
        
        imgContainer.append(img);
        author.append(imgContainer, authorName);
        card.append(headline, author);
        document.querySelector('.cards-container').append(card);
        });       
    }
}).catch(err => {
    console.log(err);
});