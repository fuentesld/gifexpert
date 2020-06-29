export const getGifs = async (category)=>{
  const url= `https://api.giphy.com/v1/gifs/search?api_key=5qVfeY4vwt77q3K7QduiZKp5Gk78eXVt&q=${encodeURI(category)}&limit=10`
  try {
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url : img.images?.downsized_medium.url
      }
    })
    return gifs

  } catch (error) {
    console.log(error)
  }
}
