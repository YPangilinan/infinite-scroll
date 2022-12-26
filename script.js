//Unsplash API
const count = 10;
const apiKey = 'v50kNIbBVrxb4kchEMipICRb4Es_nW2aeChihFVQe64'
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error here
  }
}

//On Load
getPhotos();