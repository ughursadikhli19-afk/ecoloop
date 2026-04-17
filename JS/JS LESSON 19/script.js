function Divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Ошибка: деление на ноль невозможно");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
    return null; 
  }
}


console.log(Divide(50, 10)); // 5
console.log(Divide(7520, 0)); // Ошибка: деление на ноль невозможно




function checkIfNumber(value) {
  try {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Значение не является числом");
    }
    console.log("Это число:", value);
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}


checkIfNumber(42);      // Это число: 42
checkIfNumber("Ugur"); // Ошибка: Значение не является числом




function getElementByIndex(array, index) {
  try {
    if (index < 0 || index >= array.length) {
      throw new Error(
        "Неправильный индекс");
    }
    return array[index];
  } catch (error) {
    console.log("Ошибка");
    return undefined;
  }
}



function validateString(str) {
  try {
    if (str.length < 5) {
      throw new Error(" строка  короткая");
    }
    console.log("Строка корректна:", str);
  } catch (error) {
    console.log(error.message);
  }
}


validateString("Hacimurad"); // Строка корректна
validateString("Ugur");    // строка  короткая 


/////////////////
function getUserName(user) {
  try {
    if (!user) {
      throw new Error("объект  недоступен");
    }
    return user.name;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

console.log(getUserName({ name: "Messi" }))
       
