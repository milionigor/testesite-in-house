document.querySelector('#home').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header .menu').classList.remove('open');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.querySelector('#about').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header .menu').classList.remove('open');
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('#contact').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header .menu').classList.remove('open');
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  

  