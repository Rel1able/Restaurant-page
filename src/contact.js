function showContacts() {
    const content = document.getElementById("content");
    content.classList.add("contacts-content");

    const header = document.createElement("h1");
    header.textContent = "Contact us";

    content.appendChild(header);

}

export default showContacts;