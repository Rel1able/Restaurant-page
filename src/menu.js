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

    const div2 = document.createElement("div");
    container.appendChild(div2);

    const div3 = document.createElement("div");
    container.appendChild(div3);

    const div4 = document.createElement("div");
    container.appendChild(div4);

    const div5 = document.createElement("div");
    container.appendChild(div5);

    const div6 = document.createElement("div");
    container.appendChild(div6);

    content.appendChild(container);
}

export default showMenu;