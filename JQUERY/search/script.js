const items = [
  { title: "iPhone 15", price: 1200 },
  { title: "Samsung S24", price: 1000 },
  { title: "Xiaomi 14", price: 800 },
   { title: "oppo Find X", price: 1000 } ,
    { title: "DELL", price: 1550 },
     { title: "Apple MacBook", price: 1800 },
  { title: "Sony", price: 10000 },
 
   { title: "Google Pixel", price: 1000 },
 
    { title: "LG G Pad", price: 1250 },
  { title: "Microsoft Surface", price: 1010 },
  { title: "PLAYSTATION 5", price: 6700 },
 
 

];

function render(array) {
  let itemsToHTML = array.map((item) => {
    return `
      <div class="item">
        <div>${item.title}</div>
        <div>${item.price}</div>
      </div>
    `;
  });

  itemsToHTML = itemsToHTML.join("");
  document.getElementById('container').innerHTML = itemsToHTML;
}
render(items);

function search() {
  const searchWord = document.getElementById('searchInput').value.toLowerCase();

  const filteredItems = items.filter((item) => {
    const title = item.title.toLowerCase();
    return title.includes(searchWord);
  });

  render(filteredItems);
}