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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        const javascript = data.data.articles.javascript;
        const bootstrap = data.data.articles.bootstrap;
        const technology = data.data.articles.technology;
        const jquery = data.data.articles.jquery;
        const node = data.data.articles.node;

        const articles = [javascript, bootstrap, technology, jquery, node]

        articles.forEach(article => {
            article.forEach(articleContent => {
                const cards = document.querySelector('.cards-container')
                cards.appendChild(createArticle(articleContent));
            })
        })
        console.log('Success:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    })

function createArticle(content) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    imgContainer.appendChild(img);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    card.appendChild(headline);
    card.appendChild(author);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = content.headline;
    img.src = content.authorPhoto;
    authorName.textContent = content.authorName;

    return card;
}
