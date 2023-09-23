document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from your Go backend
    fetch("/api/getbuses") // Replace with the actual API endpoint
        .then((response) => response.json())
        .then((data) => {
            // Create bus elements
            const dynamicContentContainer = document.getElementById("busResults");
            data.forEach((bus, index) => {
                const busElement = document.createElement("div");
                busElement.classList.add("bus-details");

                const button = document.createElement("button");
                button.classList.add("button-div");

                const div1 = document.createElement("div");
                div1.classList.add("name-source");

                const spanBusName = document.createElement("span");
                spanBusName.classList.add("bus-name");
                spanBusName.textContent = bus.name;

                const spanFrequency = document.createElement("span");
                spanFrequency.classList.add("frequency");
                spanFrequency.textContent = "Frequency: " + getFrequencyLabel(bus.stopages);

                div1.appendChild(spanBusName);
                div1.appendChild(spanFrequency);

                button.appendChild(div1);

                // Create a link to check status
                const link = document.createElement("a");
                link.href = "check-status.html";

                link.appendChild(button);

                busElement.appendChild(link);

                dynamicContentContainer.appendChild(busElement);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    // Function to determine frequency label based on stopages
    function getFrequencyLabel(stopages) {
        const totalStopages = stopages.length;
        if (totalStopages <= 2) {
            return "high";
        } else if (totalStopages <= 4) {
            return "average";
        } else {
            return "low";
        }
    }
});
