let photo = document.querySelector('.photo');
let photoWidth = Math.round(document.documentElement.clientWidth / 100 * 70);
let photoHeight = Math.round(photoWidth / 3 * 2);

photo.style.width = `${photoWidth}px`;
photo.style.height = `${photoHeight}px`;

console.log(`width - ${photo.clientWidth} \n height - ${photo.clientHeight}`);