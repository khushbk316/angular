// API KEY : 0cb39dee747b72cb91946e0a94331d95
var app = document.getElementById('app');
app.className = app;
fetch("https://developers.zomato.com/api/v2.1/search", {
    headers: {
        'Accept': "application/json",
        'user-key': '0cb39dee747b72cb91946e0a94331d95'
    }
}).then(data => {
    data.json().then(restaurants => {

        console.log(restaurants)
        restaurants.restaurants.map(e => {
            console.log(e.restaurant)
            

            var card = document.createElement('div')
            var img = document.createElement('img')
            var cardBody = document.createElement('div');
            var cardTitle = document.createElement('h5');
            var cardText = document.createElement('p');
            var anchor = document.createElement('a');

            cardTitle.innerHTML = e.restaurant.name
            cardText.innerHTML = e.restaurant.cuisines
            anchor.innerText = "Details"
            // console.log(app)

            card.className = "card";
            cardBody.className = "card-body";
            cardTitle.className = "card-title";
            cardText.className = "card-text";
            anchor.className =  "btn btn-primary"
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(anchor)
            card.appendChild(img);
            card.appendChild(cardBody);
            app.appendChild(card);



        })

    })
})