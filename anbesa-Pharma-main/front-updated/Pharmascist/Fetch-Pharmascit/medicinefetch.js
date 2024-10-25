const postlist = document.querySelector('.post-list')
const titleValue = document.getElementById('title')
const detailValue = document.getElementById('detail')
const usedforValue = document.getElementById('usedfor')
const priceValue = document.getElementById('price')
const categoryValue = document.getElementById('category')
const btnSubmit = document.querySelector('.button-link')
let output = '';


const renderPosts = (posts) =>{
    posts.forEach(post => {
        output += `
        <div class="card mt-6 ml-6">
        <div class="card-body" data-id = ${post._id}>
          <h1 class="card-title">${post.title}</h1>
          <h6 class="card-subtitle mb-2 text-body-secondary">${post.price}</h6>
          <div class="card-detail">
            <p class="card-text card-desc"> <strong>Description</strong>:${post.detail}</p>
            <p class="card-text card-usedfor"> <strong>Usage</strong>: ${post.usedfor} </p>
            <p class="card-text card-cat"> <strong>Category</strong>: ${post.category}</p>
         </div>
          <a href="#" class="card-link read-more">Read More</a>
          <a href="#" class="card-link edit" id ="edit-post" >Edit</a> 
          <a href="#" class="card-link delete" id ="delete-post">Delete</a>
        </div>
      </div>;`
    })
    postlist.innerHTML = output;

    // Attach event listener to the parent element using event delegation
  postlist.addEventListener('click', (event) => {
    if (event.target.classList.contains('read-more')) {
      const cardBody = event.target.closest('.card-body');
      const cardDetail = cardBody.querySelector('.card-detail');
      const readMoreLink = event.target;
      const isCollapsed = cardDetail.style.display === 'none' || cardDetail.style.display === '';

      // Toggle the display state of the card details
      cardDetail.style.display = isCollapsed ? 'block' : 'none';

      // Update the text of the "Read More" link
      readMoreLink.textContent = isCollapsed ? 'Collapse' : 'Read More';
    }
  });

}
const url = 'http://localhost:3004/medicines/';

const token = localStorage.getItem('token'); 
fetch(url, {
  method: 'GET',
  headers:{
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then(res => res.json())
  .then(data => {renderPosts(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

  //Delete medicine 
  //Delete medicine
  //Delete medicine
  postlist.addEventListener('click', (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id === 'delete-post';
    let editButtonIsPressed = e.target.id === 'edit-post';
  
    let id = e.target.parentElement.dataset.id;
    
    
     const token = localStorage.getItem('token'); 
    // Amend the fetch request here by enclosing the URL in backticks as a template literal
    if (delButtonIsPressed) {
      fetch(`${url}${id}`, {
        method: "DELETE",
        headers:{
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      })
      .then(res => {
        if (res.ok) {
          console.log('Medicine successfully deleted');
          location.reload();
           // Reload the page upon successful deletion
        } else {
          console.error('Failed to delete medicine');
        }
      })
      .catch(error => {
        console.error('An error occurred while attempting to delete medicine:', error);
      });
    }
    if (editButtonIsPressed){
      const parent = e.target.parentElement;
      let titleContent = parent.querySelector('.card-title').textContent;
      let detailContent = parent.querySelector('.card-desc').textContent;
      let usedforContent = parent.querySelector('.card-usedfor').textContent;
      let priceContent = parent.querySelector('.card-subtitle').textContent;
      let categoryContent = parent.querySelector('.card-cat').textContent;
  
      titleValue.value = titleContent;
      detailValue.value = detailContent;
      usedforValue.value = usedforContent;
      priceValue.value = priceContent;
      categoryValue.value = categoryContent;
  
  
  /*     const formE1 = document.getElementById('form');
      const formData = new FormData(formE1);
      const data = Object.fromEntries(formData); */
      const updatedMedicine = {
        title: titleValue.value,
        detail: detailValue.value,
        usedfor: usedforValue.value,
        price: priceValue.value,
        category: categoryValue.value,
      };
      const token = localStorage.getItem('token');
  
      const newurl = 'http://localhost:3004/medicines/'
      btnSubmit.addEventListener('click', () => {
        fetch(`${newurl}${id}`),{
          method: "PUT",
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              
          },
          body: JSON.stringify(updatedMedicine)
        
        }/* .then(res => {
          if (res.ok) {
            console.log('updated successfully deleted');
            location.reload();
             // Reload the page upon successful deletion
          } else {
            console.error('Failed to delete medicine');
          }
        })
        .catch(error => {
          console.error('An error occurred while attempting to delete medicine:', error);
        }); */
      })
  
    }

  })






  //Post new Medicine
  //Post new Medicine
  //Post new Medicine
  const formE1 = document.getElementById('form');

formE1.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formE1);
  const data = Object.fromEntries(formData);
  /* const token = localStorage.getItem('token'); */

  fetch('http://localhost:3004/medicines/new', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
      console.log(data);
    })
    .catch(error => console.log(error));
});

