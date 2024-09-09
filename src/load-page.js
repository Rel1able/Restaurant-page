function loadPage() {
    const content = document.getElementById("content");
    content.classList.add("load-content");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Reliable's Asian Cuisine Restaurant. ";


    content.appendChild(header);

    const description = document.createElement("p");
    description.textContent = "This is the best Asian restaurant in the world. So be sure to find some time to visit us. We are waiting for you.";

    content.appendChild(description);

    const schedule = document.createElement("div");
    schedule.textContent = "Work Hours";
    schedule.classList.add("schedule");
    content.appendChild(schedule);

    const monday = document.createElement("div");
    monday.textContent = "Monday: 8:00 - 22:00";
    schedule.appendChild(monday);

    const tuesday = document.createElement("div");
    tuesday.textContent = "Tuesday: 8:00 - 22:00";
    schedule.appendChild(tuesday);

    const wednesday = document.createElement("div");
    wednesday.textContent = "Wednesday: 8:00 - 22:00";
    schedule.appendChild(wednesday);

    const thursday = document.createElement("div");
    thursday.textContent = "Thursday: 8:00 - 22:00";
    schedule.appendChild(thursday);

    const friday = document.createElement("div");
    friday.textContent = "Friday: 8:00 - 22:00";
    schedule.appendChild(friday);

    const saturday = document.createElement("div");
    saturday.textContent = "Saturday: 9:00 - 23:00";
    schedule.appendChild(saturday);

    const sunday = document.createElement("div");
    sunday.textContent = "Sunday: 9:00 - 23:00";
    schedule.appendChild(sunday);
}

export default loadPage;