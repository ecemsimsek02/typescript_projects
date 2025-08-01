enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide"
}

// Hesaplama fonksiyonu
function calculate(a: number, b: number, operation: Operation): number | string {
  switch (operation) {
    case Operation.Add:
      return a + b;
    case Operation.Subtract:
      return a - b;
    case Operation.Multiply:
      return a * b;
    case Operation.Divide:
      if (b === 0) return "Hata: 0'a bölünemez!";
      return a / b;
    default:
      return "Geçersiz işlem!";
  }
}

// DOM ile bağlantı
const form = document.querySelector('form') as HTMLFormElement;
const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const operationSelect = document.getElementById('operation') as HTMLSelectElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value as Operation;

  const result = calculate(num1, num2, operation);
  resultDiv.textContent = `Sonuç: ${result}`;
});