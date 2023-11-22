const leftPaneElements = document.querySelectorAll('.left-pane');
const rightPane = document.getElementsByClassName('right-pane')[0];

for (const element of leftPaneElements) {
  element.addEventListener('click', (event) => {
    event.preventDefault();

    // Hide the right pane content before loading new content
    rightPane.innerHTML = '';

    // Load content based on the clicked element
    const clickedContent = loadContent(event.target.textContent);
    rightPane.innerHTML = clickedContent;

    // Show the right pane after loading content
    
    rightPane.style.display = 'block';
  });
}

// Add a click event listener to hide the right pane on clicks outside the left pane elements


// Function to load content based on the clicked element text
function loadContent(clickedText) {
  // Replace this with your actual content-loading logic
  switch (clickedText) {
    case 'Link 1':
      return '<h1>This is the content for Link 1</h1>';
    case 'Link 2':
      return '<h1>This is the content for Link 2</h1>';
    case 'Link 3':
      return '<h1>This is the content for Link 3</h1>';
    default:
      rightPane.style.display = 'none';
      return '';
  }
}
