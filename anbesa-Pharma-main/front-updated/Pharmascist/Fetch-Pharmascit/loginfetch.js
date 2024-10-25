const formE1 = document.getElementById('login-form');

formE1.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(formE1);
    const data = Object.fromEntries(formData);
  
    fetch('http://localhost:3004/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the response JSON
      }else {
            // Handle login error
            document.getElementById('error-message').textContent = 'Invalid email or password';
            document.getElementById('error-message').style.display = 'block';
      }
    })
    .then(data => {
      const role = data.Role;
      console.log(role);
  
      // Redirect to a specific page based on the user's role
      if (role === 'Pharmacist') {
        window.location.href = '../Pharmascist/pharmascitboard.html';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
