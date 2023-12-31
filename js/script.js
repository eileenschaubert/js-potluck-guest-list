// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// select button that appears when guest list is full
const assignButton = document.querySelector(".assign");
// select ul for list of assigned dishes
const assignedItems = document.querySelector(".assigned-items");




// Gather the text entered in the form
addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;
    // console.log(guest);
    // Check for no input and put input into innerText of li and append to end of list
    if (guest !=="") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const clearInput = function(){
    guestInput.value = "";
};
const addToList = function(guest){
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};
// keep count and limit to 8
const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8){
       addGuestButton.classList.add("hide"); 
       guestInput.classList.add("hide"); 
       guestInputLabel.classList.add("hide"); 
       guestFull.classList.remove("hide"); 
    }
};

const assignItems = function () {
    const potluckItems = [
        "rice",
        "ramen noodles",
        "chicken",
        "avocados",
        "white wine",
        "soft cooked eggs",
        "tofu",
        "sea weed sheets",
        "pork meatballs",
        "baby bok choi",
        "edamame",
        "basil",
        "crushed peanuts"
    ];
    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    // using the random number generator to fill array index number
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
        assignedItems.append(listItem);
    // remove the food item just assigned from array
        potluckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function() {
    assignItems();
    assignButton.disabled = true;
});