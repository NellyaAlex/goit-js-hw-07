const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li');
  const elementCount = categoryElements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementCount}`);
});
