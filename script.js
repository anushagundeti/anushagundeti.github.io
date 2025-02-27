// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add scroll event listener to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Function to open modal with animation
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = "1";
    modal.querySelector('.modal-content').style.transform = "translateY(0)";
  }, 10);
}

// Function to close modal with animation
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.opacity = "0";
  modal.querySelector('.modal-content').style.transform = "translateY(-50px)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
};
