const signInButton = document.getElementById('signInButton');
            const emailInput = document.getElementById('emailInput');
            const passwordInput = document.getElementById('passwordInput');
            const errorMessage = document.getElementById('errorMessage');
          
            signInButton.addEventListener('click', function() {
              if (emailInput.value === '' || passwordInput.value === '') {
                errorMessage.style.display = 'block';
              } else {
                // Perform login functionality
              }
            });

            function openForm(formId) {
                document.getElementById('overlay').style.display = 'block';
                document.getElementById(formId).classList.add('active');
              }
            
              function closeForm(formId) {
                document.getElementById('overlay').style.display = 'none';
                document.getElementById(formId).classList.remove('active');
              }
            
              function submitForm(formId) {
                // Handle form submission
                // ...
              }
function toggleForm(formId) {
      var formContainer = document.getElementById(formId + "-container");
      var overlay = document.getElementById("overlay");
      formContainer.style.display = "block";
      overlay.style.display = "block";
    }
    function closeForm(formId) {
      var formContainer = document.getElementById(formId + "-container");
      var overlay = document.getElementById("overlay");
      formContainer.style.display = "none";
      overlay.style.display = "none";
    }




// Function to create a medication form box HTML
function createMedicationFormBox() {
    const drugsSection = document.getElementById("drugs");
  
    const formBoxHTML = `
      <div class="food-item">
        <!-- Add your medication form fields here -->
        <form id="medicationForm">
          <label for="medicationName">Medication Name:</label>
          <input type="text" id="medicationName" name="medicationName">
  
          <label for="dosage">Dosage:</label>
          <input type="text" id="dosage" name="dosage">
  
          <!-- Add any other form fields you need -->
        </form>
      </div>
    `;
  
    // Append the form box HTML to the drugs section
    drugsSection.innerHTML += formBoxHTML;
  }
  
  // Call the function to create medication form boxes on page load
  createMedicationFormBox();