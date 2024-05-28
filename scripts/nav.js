function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }

  document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', event => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    })
  });
  document.querySelector('.nav__links-item').addEventListener('click', toggleSidebar);

  const contactTitleSpan = document.querySelector('.contact-title span');