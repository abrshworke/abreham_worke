document.addEventListener('DOMContentLoaded', function () {
    var readMoreLinks = document.querySelectorAll('.read-more');
  
    readMoreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var cardText = this.parentNode.querySelector('.card-text');
            
            // Toggle the display of card text
            cardText.style.display = cardText.style.display === 'none' ? 'block' : 'none';
  
            // Toggle the text content of the link
            this.innerText = cardText.style.display === 'none' ? 'Read More' : 'Collapse';
        });
    });
  });