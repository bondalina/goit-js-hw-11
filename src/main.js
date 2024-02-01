// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('.search-input')
const galleryList = document.querySelector('.gallery-list')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = searchInput.value.trim();

    if (inputValue === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }

    galleryList.innerHTML = '';

    const apiKey = '36996517-56800863ae540be6945d0f4f2';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 3000,
                });
                return;
            }
            
            galleryList.innerHTML = data.hits.map(image => {
                const imageLink = `
                    <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags} | Likes: ${image.likes} | Views: ${image.views} | Comments: ${image.comments} | Downloads: ${image.downloads}">
                        <img src="${image.webformatURL}" alt="${image.tags}">
                    </a>`;
                
                const listItem = `<li class="gallery-item">${imageLink}</li>`;

                return listItem;
            }).join('');

            const lightbox = new SimpleLightbox('.gallery a');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});


