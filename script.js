let travelData = {};

// Load JSON data
fetch("travel.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
    })
    .catch(error => console.log("Error loading data:", error));


// Search function
function searchPlaces() {

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    // Search destinations
    if (travelData.destinations) {
        travelData.destinations.forEach(place => {

            if (
                place.name.toLowerCase().includes(keyword) ||
                place.country.toLowerCase().includes(keyword) ||
                place.description.toLowerCase().includes(keyword)
            ) {

                resultsContainer.innerHTML += `
                <div class="card">
                    <h3>${place.name}</h3>
                    <p><strong>Country:</strong> ${place.country}</p>
                    <p>${place.description}</p>
                </div>
                `;
            }

        });
    }

    // Search beaches
    if (keyword.includes("beach") && travelData.beaches) {

        travelData.beaches.forEach(beach => {

            resultsContainer.innerHTML += `
            <div class="card">
                <h3>${beach.name}</h3>
                <img src="${beach.image}" width="300">
                <p><strong>Location:</strong> ${beach.location}</p>
                <p>${beach.description}</p>
            </div>
            `;
        });

    }

    // Search temples
    if (keyword.includes("temple") && travelData.temples) {

        travelData.temples.forEach(temple => {

            resultsContainer.innerHTML += `
            <div class="card">
                <h3>${temple.name}</h3>
                <img src="${temple.image}" width="300">
                <p><strong>Location:</strong> ${temple.location}</p>
                <p>${temple.description}</p>
            </div>
            `;
        });

    }

    // Show countries
    if (keyword.includes("country")) {

        travelData.destinations.forEach(place => {

            resultsContainer.innerHTML += `
        <div class="card">
            <h3>${place.country}</h3>
            <img src="${place.image}" width="300">
            <p>${place.description}</p>
        </div>
        `;

        });

    }

}


// Clear results
function clearResults() {

    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";

}

