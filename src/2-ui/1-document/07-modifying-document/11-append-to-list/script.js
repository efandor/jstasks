let one = document.getElementById('one');

setTimeout(() => one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>'), 3000);
