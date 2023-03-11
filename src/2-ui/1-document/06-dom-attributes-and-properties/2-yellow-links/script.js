let links = document.querySelectorAll('a[href*="://"]');
let filteredLinks = Array.from(links).filter((a) => !a.textContent.match(/internal.com/));

filteredLinks.forEach(link => link.style.color = 'orange');
