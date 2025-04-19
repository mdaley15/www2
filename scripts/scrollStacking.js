
document.addEventListener('DOMContentLoaded', function() {
    let gallery = document.querySelector('.sqs-gallery');
    if (gallery) {
        // let imgWrappers = gallery.querySelectorAll('.image-wrapper');
        const elements = gallery.querySelectorAll(':scope > div'); // Select elements to wrap
        const chunkSize = 2;
        
        for (let i = 0; i < elements.length; i += chunkSize) {
          const card = document.createElement('div'); // Create wrapper div
          card.classList.add('card'); // Add class to the wrapper (optional)
        
          // Append elements to the wrapper
          for (let j = 0; j < chunkSize && i + j < elements.length; j++) {
            card.appendChild(elements[i + j]);
          }
        
          // Insert the wrapper before the first element in the chunk
          if (elements[i]) {
              elements[i].parentNode.insertBefore(card, elements[i]);
          } else {
              // If there are no more elements, append to the parent
              if (elements.length > 0) {
                  elements[0].parentNode.appendChild(card);
              }
          }
        }
    }
});