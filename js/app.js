const footer = document.querySelector('footer');
const date = new Date().toString().split(' ');
const year = date[3];
footer.innerHTML = '<span id="copy">&#169;</span> ' + '<span id="year">'  + year + '</span>';
console.log(`const date = ${date}`);
console.log(`const year = date[3] = ${date[3]}`);
