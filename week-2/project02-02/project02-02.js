/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Kaitlyn Kelly
      Date:   08/24/2025

      Filename: project02-02.js
 */

      // Set up form values
      function verifyForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        // Test that values are included for all inputs
        (document.getElementById("name").value) && (document.getElementById("email").value) && (document.getElementById("phone").value) ? window.alert("Thank You!") : window.alert("Please fill in all fields");
      }

      // Add event listener when form submitted
      document.getElementById("submit").addEventListener("click",verifyForm);
