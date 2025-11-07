document.addEventListener("DOMContentLoaded", function() {
  // Select elements
  const input = document.querySelector('#chapter');
  const addButton = document.querySelector('#addButton');
  const list = document.querySelector('#chapterList');

  // Add Chapter button click event
  addButton.addEventListener('click', function() {
    const chapter = input.value.trim();

    // Check if input is empty
    if (chapter === '') {
      input.focus();
      return;
    }

    // Create li element
    const li = document.createElement('li');
    li.textContent = chapter;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Append button to li, then li to list
    li.append(deleteButton);
    list.append(li);

    // Reset input and focus
    input.value = '';
    input.focus();
  });

  // Delete button functionality using Event Delegation
  list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
      const li = e.target.parentElement;
      list.removeChild(li);
      input.focus();
    }
  });
});
