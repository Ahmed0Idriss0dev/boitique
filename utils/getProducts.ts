const getProducts = async ({ userId }: { userId: string | null }) => {
  try {
    const response = await fetch('http://localhost:3000/api/get-products', {
      next: { tags: ['collection'] } ,
      method: 'POST',
      body: JSON.stringify({ userId}),
      headers: {
        'Content-Type': 'application/json' ,
         'Access-key' : userId as string
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
