document.addEventListener("DOMContentLoaded", function () {
    const busForm = document.getElementById("busForm");
  
    busForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const source = document.getElementById("source").value;
      const destination = document.getElementById("destination").value;
  
      fetch(`/api/getbuses?source=${source}&destination=${destination}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // Encode the JSON data and pass it as a URL parameter
          const jsonData = encodeURIComponent(JSON.stringify(data));
  
          // Construct the URL with source, destination, and jsonData parameters
          const url = `/app/check-Bus.html?source=${encodeURIComponent(
            source
          )}&destination=${encodeURIComponent(destination)}&jsonData=${jsonData}`;
  
          // Redirect to check-Bus.html with source, destination, and jsonData parameters
          window.location.href = url;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle the error as needed
        });
    });
  });
  