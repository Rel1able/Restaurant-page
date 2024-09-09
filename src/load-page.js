function loadPage() {
    const content = document.getElementById("content");
    content.classList.add("load-content");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Reliable's sushi Restaurant.";


    content.appendChild(header);

    const description = document.createElement("p");
    description.textContent = "In this restaurant you can get useful information about healthy food, moreover we can adapt a menu personally to each customer";

    content.appendChild(description);
}

export default loadPage;