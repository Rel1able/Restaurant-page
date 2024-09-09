function showContacts() {
    const content = document.getElementById("content");
    content.classList.add("contacts-content");

    const header = document.createElement("h1");
    header.textContent = "Contact us";

    content.appendChild(header);
    const phoneNumber = document.createElement("div");
    phoneNumber.textContent = "Call us: 999 - 999 - 999 - 999";
    content.appendChild(phoneNumber);
    const email = document.createElement("div");
    email.textContent = "Write us: randomemail@somerandom.com";
    content.appendChild(email);
    const address = document.createElement("div");
    address.textContent = "Visit us: random country, random street 222";
    content.appendChild(address);
}

export default showContacts;