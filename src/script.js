function displayDateTime() {
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // Format: e.g., Tuesday 16:00
  const formattedDateTime = `${day} ${hours}:${minutes}`;

  // Display the date and time in the element with class "current-time"
  document.querySelector(".current-time").textContent = formattedDateTime;
}

// Call displayDateTime once when the page loads
displayDateTime();

// Update every minute
setInterval(displayDateTime, 60000);

// Feature #2: Search Engine to Display City Name
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the city name from the search input
  const city = document.querySelector(".search-input").value.trim();

  // Display the city name in the element with class "current-city"
  if (city) {
    document.querySelector(".current-city").textContent = city;
  }
});
