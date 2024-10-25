// Create a new User as a Client

const formE1 = document.getElementById('signup-form');

formE1.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formE1);
  const data = Object.fromEntries(formData);

  
  fetch('http://localhost:3004/auth/signup', {

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
        document.getElementById('error-message').textContent = 'Email is already in use !';
        document.getElementById('error-message').style.display = 'block';
  }
  })
  .then(data => {
    const role = data.Role;
    console.log(data.token)
    localStorage.setItem('token', data.token);

    // Redirect to a specific page based on the user's role
   if (role === 'Client') {
     window.location.href = '../User/userdashboard.html';
    } else if (role !== 'Client' && role !== '') {
        document.getElementById('error-message').textContent = 'Please enter your Role as Client';
        document.getElementById('error-message').style.display = 'block';
  }else if (role === '') {
    document.getElementById('error-message').textContent = 'Please enter your Role as Client';
    document.getElementById('error-message').style.display = 'block';
}
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


  