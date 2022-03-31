import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const listGallery = createGallery(galleryItems);
galleryContainer.innerHTML = listGallery;
galleryContainer.addEventListener('click', onGalleryClick);


function createGallery(items) {
    return items.map(({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${ original }">
    <img
      class="gallery__image"
      src="${ preview }"
      data-source="${ original }"
      alt="${ description }"
    />
  </a>
</div>`).join('');
}

function onGalleryClick(e) {
    if (e.target.nodeName !== 'IMG') {
    return;
    }
    e.preventDefault();
    modalShow(e.target.dataset.source);    
}

function modalShow(src) {
    const instance = basicLightbox.create(
    `<img src="${src}" width="800" height="600">`,
        addListener(),
        removeListener(),
    );
    instance.show()
}

// function addListener() {
//   instance.show()
//   window.addEventListener('keydown', onEscClick);
// }

// function onEscClick(e) {
//   if (e.code === 'Escape') {
//     instance.close();
//     }  
// }

// function removeListener() {
// instance.close()
// window.removeEventListener('keydown', onEscClick);
// }

