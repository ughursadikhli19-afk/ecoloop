document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");

  const fields = {
    name: document.getElementById("name"),
    price: document.getElementById("price"),
    quantity: document.getElementById("quantity"),
    description: document.getElementById("description"),
    category: document.getElementById("category"),
    image: document.getElementById("image"),
  };

  function showError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector(".error");

    error.textContent = message;
    input.classList.add("error-input");
  }

  function clearError(input) {
    const group = input.parentElement;
    const error = group.querySelector(".error");

    error.textContent = "";
    input.classList.remove("error-input");
  }

  function validate() {
    let valid = true;
    const nameReg = /^[A-Za-zА-Яа-яЁё\s]{3,}$/;
    if (!nameReg.test(fields.name.value.trim())) {
      showError(fields.name, "Название должно содержать ≥ 3 букв.");
      valid = false;
    } else clearError(fields.name);

    const priceReg = /^\d+(\.\d+)?$/;
    if (
      !priceReg.test(fields.price.value.trim()) ||
      Number(fields.price.value) <= 0
    ) {
      showError(fields.price, "Введите корректную цену.");
      valid = false;
    } else clearError(fields.price);

    const qtyReg = /^[1-9]\d*$/;
    if (!qtyReg.test(fields.quantity.value.trim())) {
      showError(
        fields.quantity,
        "Количество должно быть положительным целым числом."
      );
      valid = false;
    } else clearError(fields.quantity);

    if (fields.description.value.trim().length < 10) {
      showError(
        fields.description,
        "Описание должно быть минимум 10 символов."
      );
      valid = false;
    } else clearError(fields.description);

    if (fields.category.value === "") {
      showError(fields.category, "Выберите категорию.");
      valid = false;
    } else clearError(fields.category);

    const urlReg = /^(https?:\/\/[^\s]+)$/;
    if (!urlReg.test(fields.image.value.trim())) {
      showError(fields.image, "Введите корректный URL.");
      valid = false;
    } else clearError(fields.image);

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Product have createted");

      form.reset();

      Object.values(fields).forEach((field) => clearError(field));
    }
  });
});
