"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Kaitlyn Kelly
      Date:   10/5/25

      Filename: project06-03.js
*/

"use strict";

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling); // Run copyShippingToBilling function when useShip checkbox is selected

function copyShippingToBilling() {
  if (useShip.checked) {
    // If 'Same as Shipping' box is checked, copy values from Shipping Address to Billing Address
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

let formElements = document.querySelectorAll('input[type="text"]');

let fieldCount = formElements.length;

let errorBox = document.getElementById("errorBox");

// For loop to check each formElement for invalid data, and display the error message if invalid
for (let i = 0; i < formElements.length; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Disable browser default invalid error messages & display a custom one
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}