// create a global variable to store place
let dates 

// fetch data and append html when the website first loads
fetch("dates.json").then(response => response.json())
    .then(json => {
        console.log(json)
        dates = json
        // for(let i = 0; i < places.length; i++) {
        //     let place = places[i]
        //     displayPlace(place)
        // }
        displayDate(dates[0])
    })
    .catch(error => console.log("error", error))


// a function for generating the stuff on the left side
function displayDate(date) {
    document.querySelector("#day").textContent = date.when
    // let imgBox = document.querySelector("#imgBox")
    // imgBox.innerHTML = ""
    // let imgGenerate = document.createElement("img");
    //     imgGenerate.src = place.path;
    //     document.querySelector("#imgBox").appendChild(imgGenerate);
}

// button.addEventListener() for the places buttons to display the content

document.querySelector(".section-grid-places").addEventListener("click", function (event) {
    let button = event.target.closest("button[data-dates]")
    let dayName = button.dataset.dates
    let selectedDate = dates.find(dates => dates.when === dayName)
    displayDate(selectedDate)
}
)