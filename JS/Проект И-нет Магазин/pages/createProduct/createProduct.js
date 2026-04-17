
function addNewProduct(newProduct) {
   return fetch("https://example.com/api/products", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
   })
      .then(response => {
         if (!response.ok) throw new Error("Failed to add product");
         return response.json();
      })
      .then(data => {
         console.log("Product added successfully:", data);
         return data;
      })
      .catch(error => {
         console.error("Error:", error);
         throw error;
      });
}

function createProduct() {

   const createProductForm = document.querySelector(".createProductForm");
   createProductForm.addEventListener('submit', event => {
      event.preventDefault();

      if (!createProductForm.checkValidity()) {
         event.stopPropagation();
         createProductForm.classList.add('was-validated');
         return;
      }

      const newProduct = {
         brand: createProductForm.brand.value,
         model: createProductForm.model.value,
         category: createProductForm.category.value,
         description: createProductForm.description.value,
         price: createProductForm.price.value,
         rating: createProductForm.rating.value,
         imageUrl: createProductForm.imageUrl.value
      };

      addNewProduct(newProduct)
         .then(() => {
            window.location.href = "/pages/shop/shop.html";
         })
         .catch(err => {
            console.error(err);
         });
   }, false);

   const imageUrl = document.querySelector("#imageUrl");
   if (imageUrl) {
      imageUrl.addEventListener("input", (e) => {
         document.querySelector(".imagePreview").src = imageUrl.value;
      });
   }
}

createProduct(); 