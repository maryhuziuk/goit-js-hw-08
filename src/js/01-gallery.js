import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createItemsList(galleryItems));

function createItemsList(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
   <a class="gallery__link" href='${original}'>
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
});
