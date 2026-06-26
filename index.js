const sumar = () => {
  cantidad.innerHTML = Number(cantidad.textContent) + 1;
  valorTotal();
};

const resta = () => {
  if (cantidad.textContent < 1) {
    return (cantidad.innerHTML = 0);
  }
  cantidad.innerHTML = Number(cantidad.textContent) - 1;
  valorTotal();
};

let cantidad = document.querySelector(".cantidad");
console.log(cantidad);

let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let total = document.querySelector(".valor-total");

const valorTotal = () => {
  total.textContent = precio * Number(cantidad.textContent);
};

valorTotal();
