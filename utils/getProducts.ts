
const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/get-products' ,{ next: { tags: ['data'] } })
    const data = await response.json()
    return data
  } catch (error) {
    
  }
}

export default getProducts