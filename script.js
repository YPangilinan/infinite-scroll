const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = 'v50kNIbBVrxb4kchEMipICRb4Es_nW2aeChihFVQe64'
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Helper Function to Set Attributes on DOM Elements
function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement('a');
    setAttribute(item, {
      href: photo.links.html,
      target: '_blank',
    })
    // Create <img> for photo
    const img = document.createElement('img');
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })
    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos()
  } catch (error) {
    //catch error here
  }
}

//On Load
getPhotos();