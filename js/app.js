const footer = document.querySelector('footer');
const date = new Date().toString().split(' ');
const year = date[3];
footer.innerHTML = '<span id="copy">&#169;</span> ' + '<span id="year">'  + year + '</span><span id="repo"><a href="https://github.com/digitalgnome/cs50w-project0">Github Project Repo</a></span>';
