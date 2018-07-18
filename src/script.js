const url = 'data.json';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();
  })
  .then(data => {
    // Do stuff with the JSON
    // console.log(data);
    createHtml(data);
  })
  .catch(error => {
    console.log('Looks like there was a problem: \n', error);
  });

// Function to generate the HTML
function createHtml(ourData) {
  // ourData is just a parameter and can be named anything
  let rawTemplate = document.querySelector('#ourTemplate').innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let ourGeneratedHTML = compiledTemplate(ourData);

  let ourContainer = document.querySelector('#container');
  ourContainer.innerHTML = ourGeneratedHTML;
}

// Vanilla JS solution using event delegation, target, matches and destructuring
let ourContainer = document.querySelector('#container');

ourContainer.addEventListener('click', ({ target }) => {
  // Arrow funcion returns an object
  if (target.matches('.btn')) {
    const detailsContainer = target.parentNode.parentNode.nextElementSibling;
    detailsContainer.classList.toggle('visible');
  }
});
