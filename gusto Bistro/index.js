tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {}
  }
}


// menu
document.addEventListener("DOMContentLoaded", function() {
  const itemNames = document.querySelectorAll('.item-name');

  itemNames.forEach(itemName => {
    itemName.addEventListener('click', function() {
      const desc = this.nextElementSibling;
      desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
    });
  });
});
