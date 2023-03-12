mouse.tabIndex = 0;
    
mouse.onclick = function() {
  this.style.left = `${this.getBoundingClientRect().left}px`;
  this.style.top = `${this.getBoundingClientRect().top}px`;

  this.style.position = 'absolute';
};

mouse.onkeydown = function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      this.style.left = `${parseInt(this.style.left) - this.offsetWidth}px`;

      if (parseInt(this.style.left) < 0) {
        this.style.left = '10px';
      }

      break;
    case 'ArrowUp':
      this.style.top = `${parseInt(this.style.top) - this.offsetHeight}px`;

      if (parseInt(this.style.top) < 30) {
        this.style.top = '40px';
      }
      break;
    case 'ArrowRight':
      this.style.left = `${parseInt(this.style.left) + this.offsetWidth}px`;

      if (parseInt(this.style.left) > window.innerWidth - 100) {
        this.style.left = `${window.innerWidth - 120}px`;
      }

      break;
    case 'ArrowDown':
      this.style.top = `${parseInt(this.style.top) + this.offsetHeight}px`;

      if (parseInt(this.style.top) > window.innerHeight - 150) {
        this.style.top = `${window.innerHeight - 170}px`;
      }

      break;
  }
};
