function showMenu() {
    const content = document.getElementById("content");
    content.classList.add("menu-content");

    const header = document.createElement("h1");
    header.textContent = "Here you can find our menu";

    content.appendChild(header);
}

export default showMenu;