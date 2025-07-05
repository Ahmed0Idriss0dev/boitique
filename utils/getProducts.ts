'use client'
const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/get-products', {
      next: { tags: ['collection'] } ,
      method: 'POST',
      body: JSON.stringify({ userId:'sd'}),
      headers: {
        'Content-Type': 'application/json' ,
      }
    });
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default getProducts;
