// Função para calcular
function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  const resultEl = document.getElementById("result");

  if (!isNaN(num1) && !isNaN(num2)) {
    let res;

    switch (op) {
      case "add":
        res = num1 + num2;
        break;
      case "sub":
        res = num1 - num2;
        break;
      case "mul":
        res = num1 * num2;
        break;
      case "div":
        res = num2 !== 0 ? (num1 / num2).toFixed(2) : "Erro: divisão por 0";
        break;
      default:
        res = "Operação inválida";
    }

    resultEl.textContent = `Resultado: ${res}`;
  } else {
    resultEl.textContent = "Resultado: insira números válidos";
  }
}

// Botão calcular
document.getElementById("btnCalculate").addEventListener("click", calcular);

// Efeitos de animação ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  sections.forEach((sec, index) => {
    setTimeout(() => {
      sec.classList.add("show");
    }, 200 * index);
  });
});
