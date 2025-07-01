document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const errorMessage = document.getElementById('errorMessage');
    const productResults = document.getElementById('productResults'); 

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim(); 

        if (searchTerm === '') {
            errorMessage.textContent = 'Please enter a search term.';
            productResults.innerHTML = ''; 
            return; 
        } else {
            errorMessage.textContent = ''; 
            console.log(`Searching for: ${searchTerm}`);
            fetchProducts(searchTerm);
        }
    });

    
    async function fetchProducts(query) {
        console.log(`Fetching products for query: ${query}`);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            console.log('Fetched Data:', data.products); 

            productResults.innerHTML = '';
            if (data.products && data.products.length > 0) {
                data.products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product-item');
                    productDiv.innerHTML = `
                        <h3>${product.title}</h3>
                        <p>Price: $${product.price}</p>
                        <img src="${product.thumbnail}" alt="${product.title}" width="100">
                    `;
                    productResults.appendChild(productDiv);
                });
            } else {
                productResults.innerHTML = '<p>No products found.</p>';
            }

        } catch (error) {
            console.error('Error fetching products:', error);
            errorMessage.textContent = 'Error fetching products. Please try again later.';
        }
    }
});