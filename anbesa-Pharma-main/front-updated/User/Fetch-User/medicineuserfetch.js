const postlist = document.querySelector('.post-list')
let output = '';


const renderPosts = (posts) =>{
    posts.forEach(post => {
        output += `
        <div class="card mt-6 ml-6">
        <div class="card-body" data-id = ${post._id}>
          <h1 class="card-title">${post.title}</h1>
          <h6 class="card-subtitle mb-2 text-body-secondary",<strong>Price(Birr)</strong>: ${post.price}</h6>
          <div class="card-detail">
            <p class="card-text"> <strong>Description</strong>:${post.detail}</p>
            <p class="card-text"> <strong>Usage</strong>: ${post.usedfor} </p>
            <p class="card-text card-cat"> <strong>Category</strong>: ${post.category}</p>
         </div>
          <a href="#" class="card-link read-more">Read More</a>
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
