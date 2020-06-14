import galleryItems from './gallery-items.js';

const refs = {
  list: document.querySelector('.gallery'),
  jsLightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxContent: document.querySelector('.lightbox__content'),
  lightBoxBtn: document.querySelector('.lightbox__button'),
};

const galleryProcess = () => {
  return galleryItems.map(({ preview, original, description }) => {
    const localRefs = {
      item: document.createElement('li'),
      link: document.createElement('a'),
      image: document.createElement('img'),
    };
    localRefs.item.classList.add('gallery__item');
    localRefs.link.classList.add('gallery__link');
    localRefs.link.setAttribute('href', original);
    localRefs.image.classList.add('gallery__image');
    localRefs.image.setAttribute('src', preview);
    localRefs.image.setAttribute('data-source', original);
    localRefs.image.setAttribute('alt', description);
    localRefs.link.appendChild(localRefs.image);
    localRefs.item.appendChild(localRefs.link);
    return localRefs.item;
  });
};

const items = galleryProcess(galleryItems);
items.forEach(item => {
  refs.list.appendChild(item);
});

function openModal(e) {
  e.preventDefault();
  const data = e.target.dataset.source;
  const imageModal = refs.lightboxImage.cloneNode(false);
  imageModal.setAttribute('src', data);
  imageModal.setAttribute('alt', e.target.alt);
  refs.lightboxContent.innerHTML = '';
  refs.lightboxContent.append(imageModal);
  refs.jsLightbox.classList.add('is-open');
}

function closeModal() {
  refs.jsLightbox.classList.remove('is-open');
}

function closeKeyModal(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}
function closeModalClick(e) {
  if (e.target === refs.lightboxContent) {
    closeModal();
  }
}

refs.list.addEventListener('click', openModal);
refs.lightBoxBtn.addEventListener('click', closeModal);
window.addEventListener('keyup', closeKeyModal);
refs.lightboxContent.addEventListener('click', closeModalClick);
