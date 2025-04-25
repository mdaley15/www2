
document.addEventListener('DOMContentLoaded', function() {
    let gallery = document.querySelector('.sqs-gallery-block-stacked .sqs-gallery');
    if (gallery) {
        const elements = gallery.querySelectorAll(':scope > div'); // Select elements to wrap
        const chunkSize = 2;
        
        for (let i = 0; i < elements.length; i += chunkSize) {
            const cardWrapper = document.createElement('div'); // Create wrapper div
            cardWrapper.classList.add('cardWrapper'); // Add class to the wrapper
            const card = document.createElement('div'); // Create card div
            card.classList.add('card'); // Add class to the card
            cardWrapper.appendChild(card);
            
            // Append elements to the wrapper
            for (let j = 0; j < chunkSize && i + j < elements.length; j++) {
                card.appendChild(elements[i + j]);
            }
            gallery.appendChild(cardWrapper);
        }
        setTimeout(() => {
            let cardWrappers = gallery.querySelectorAll('.cardWrapper');
            var heights = [];
            for (let i = 0; i < cardWrappers.length; i++) {
                let card = cardWrappers[i];
                let height = card.scrollHeight;
                heights.push(height);
            }
            // console.log(heights);
            let maxHeight = Math.max(...heights);
            // console.log(maxHeight);
            cardWrappers.forEach(cardWrapper => {
                // cardWrapper.style.height = maxHeight+"px";
                let height = cardWrapper.scrollHeight;
                let heightDiff = maxHeight - height;
                cardWrapper.style.marginBottom = heightDiff + 'px';
            });
        }, 1000);

    }
});