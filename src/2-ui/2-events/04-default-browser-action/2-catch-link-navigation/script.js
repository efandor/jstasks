const handleLink = (attr) => confirm(`Leave for ${attr}?`);

contents.onclick = function(event) {
  let target = event.target.closest('a');

  if (contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
}
