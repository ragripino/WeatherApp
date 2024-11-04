document
  .getElementById("current-city")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the city name from the input field
    const cityInput = document.getElementById("city-input").value;

    // Find the element that shows the city name
    const cityNameElement = document.getElementById("city-name");

    // Update the city name on the page
    cityNameElement.textContent = cityInput;

    // Clear the input field (optional)
    document.getElementById("city-input").value = "";
  });

function updateDateTime() {
  const dateTimeElement = document.getElementById("date-time");
  const now = new Date();

  // Format date and time
  const options = {
    weekday: "long", // E.g., "Saturday"
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDateTime = now.toLocaleDateString("en-US", options);

  // Update the content of the date-time element
  dateTimeElement.textContent = formattedDateTime;
}

// Update the date and time immediately, then every second
updateDateTime();
setInterval(updateDateTime, 1000);
