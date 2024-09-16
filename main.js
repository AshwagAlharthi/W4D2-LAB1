let url = 'https://fakestoreapi.com/products';

let container = document.getElementById("container");


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.map(product => {
            console.log(product);
            let div = document.createElement("div");
            let text = document.createElement("h3");
            let img = document.createElement("img");
            let value = document.createElement("h4");

            // container.innerHTML = '';
            text.textContent = product.title;
            img.src = product.image;
            value.textContent = product.price + ' SAR';

            div.classList.add("box")
            img.classList.add("image");

            div.appendChild(text);
            div.appendChild(img);
            div.appendChild(value);
            container.appendChild(div);
        })
    })
