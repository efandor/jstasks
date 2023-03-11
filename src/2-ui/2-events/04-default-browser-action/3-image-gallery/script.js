const showThumbnail = (src, description) => {
  largeImg.src = src;
  largeImg.alt = description;
}

const handler = (event) => {
  event.preventDefault();

  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;

  showThumbnail(thumbnail.href, thumbnail.title);
}

thumbs.addEventListener('click', handler);
