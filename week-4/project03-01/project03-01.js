/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Kaitlyn Kelly
      Date:   9/5/25

      Filename: project03-01.js
*/

// Declare menuItems to contain all HTML elements with menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// Loop through all menuItem elements, listen for a click, and run the calcTotal function if clicked
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Set up calcTotal function to loop through each menuItem element and update the orderTotal if the element is checked
function calcTotal() {
  let orderTotal = 0
  for  (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal = orderTotal + Number(menuItems[i].value)
    }
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }