  const roles = ["Web Developer","FrontEnd Developer","Full Stack Developer"];
  let i = 0, j = 0, current = '', isDeleting = false;
  const typing = document.querySelector('.typing');

  function type() {
    current = roles[i];
    typing.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
      setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % roles.length;
      setTimeout(type, 800);
    }
  }
  type();

  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('show');
      }
    });
  });