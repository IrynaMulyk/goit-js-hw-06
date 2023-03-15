const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');

const imagesList = images.map((image) => 
  `<li><img src=${image.url} alt=${image.alt} width=200></img></li>`).join("");

  const style = document.createElement('style');
  style.innerHTML = `
  .gallery {
  list-style:none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  }
  img {
    display: block;
  }
  `;

document.head.appendChild(style);
gallery.insertAdjacentHTML("beforeend", imagesList);



  
 
  
