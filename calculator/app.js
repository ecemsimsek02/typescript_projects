var Operation;
(function (Operation) {
    Operation["Add"] = "add";
    Operation["Subtract"] = "subtract";
    Operation["Multiply"] = "multiply";
    Operation["Divide"] = "divide";
})(Operation || (Operation = {}));
// Hesaplama fonksiyonu
function calculate(a, b, operation) {
    switch (operation) {
        case Operation.Add:
            return a + b;
        case Operation.Subtract:
            return a - b;
        case Operation.Multiply:
            return a * b;
        case Operation.Divide:
            if (b === 0)
                return "Hata: 0'a bölünemez!";
            return a / b;
        default:
            return "Geçersiz işlem!";
    }
}
// DOM ile bağlantı
var form = document.querySelector('form');
var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operationSelect = document.getElementById('operation');
var resultDiv = document.getElementById('result');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operation = operationSelect.value;
    var result = calculate(num1, num2, operation);
    resultDiv.textContent = "Sonu\u00E7: ".concat(result);
});
