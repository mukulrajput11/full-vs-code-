document.addEventListener('DOMContentLoaded', function() {
        const cartButtons = document.querySelectorAll('.product button');
        cartButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Item added to cart');
            });
        });
    });
    
   