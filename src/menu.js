import sushiImage from "./sushi.jpg";
import tomYamImage from "./TomYam.jpg";
import ramenImage from "./ramen.jpg";
import jiaoziImage from "./jiaozi.jpg";
import kimchiImage from "./kimchi.jpg";
import yakinikuImage from "./Yakiniku.jpg";

function showMenu() {
    const content = document.getElementById("content");
    content.classList.add("menu-content");

    const header = document.createElement("h1");
    header.textContent = "Here you can find our menu";

    content.appendChild(header);

    const container = document.createElement("div");
    container.classList.add("container");

    const div1 = document.createElement("div");
    container.appendChild(div1);
    const image1 = document.createElement("img");
    image1.src = sushiImage;
    div1.appendChild(image1);
    const description1 = document.createElement("div");
    description1.textContent = "$14.99 Sushi";
    div1.appendChild(description1);

    const div2 = document.createElement("div");
    container.appendChild(div2);
    const image2 = document.createElement("img");
    image2.src = tomYamImage;
    div2.appendChild(image2);
    const description2 = document.createElement("div");
    description2.textContent = "$29.99 Tom Yam";
    div2.appendChild(description2);

    const div3 = document.createElement("div");
    container.appendChild(div3);
    const image3 = document.createElement("img");
    image3.src = ramenImage;
    div3.appendChild(image3);
    const description3 = document.createElement("div");
    description3.textContent = "$39.99 Ramen";
    div3.appendChild(description3);

    const div4 = document.createElement("div");
    container.appendChild(div4);
    const image4 = document.createElement("img");
    image4.src = jiaoziImage;
    div4.appendChild(image4);
    const description4 = document.createElement("div");
    description4.textContent = "$22.99 Jiaozi";
    div4.appendChild(description4);

    const div5 = document.createElement("div");
    container.appendChild(div5);
    const image5 = document.createElement("img");
    image5.src = kimchiImage;
    div5.appendChild(image5);
    const description5 = document.createElement("div");
    description5.textContent = "$44.99 Kimchi";
    div5.appendChild(description5);

    const div6 = document.createElement("div");
    container.appendChild(div6);
    const image6 = document.createElement("img");
    image6.src = yakinikuImage;
    div6.appendChild(image6);
    const description6 = document.createElement("div");
    description6.textContent = "$55.99 Yakiniku";
    div6.appendChild(description6);


    content.appendChild(container);
}

export default showMenu;