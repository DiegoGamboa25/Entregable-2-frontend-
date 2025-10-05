// ===============================
// SISTEMA DE CARRITO DE COMPRAS
// ===============================

// Este script maneja el carrito usando localStorage.
// Funciona igual en local o en GitHub Pages (no requiere servidor).

// FUNCIÓN PARA OBTENER EL CARRITO
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}


//  FUNCIÓN PARA GUARDAR EL CARRITO
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


// AGREGAR UN PRODUCTO AL CARRITO
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartCount();
  alert("✅ Producto añadido al carrito");
}


//  ELIMINAR PRODUCTO DEL CARRITO
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// LIMPIAR CARRITO COMPLETO
function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
  updateCartCount();
}

// RENDERIZAR EL CARRITO EN PANTALLA
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (!cartContainer || !totalElement) return;

  const cart = getCart();
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<tr><td colspan="6" class="text-center text-muted">Tu carrito está vacío</td></tr>`;
    totalElement.textContent = "$0";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" width="60"></td>
      <td>${item.name}</td>
      <td>$${item.price.toLocaleString()}</td>
      <td>${item.quantity}</td>
      <td>$${subtotal.toLocaleString()}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `;
    cartContainer.appendChild(row);
  });

  totalElement.textContent = "$" + total.toLocaleString();
}


// ACTUALIZAR CONTADOR DEL CARRITO (NAVBAR)
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-count");

  if (!badge) return;

  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// SIMULAR COMPRA

function simulatePurchase() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("🛒 Tu carrito está vacío. Agrega productos antes de comprar.");
    return;
  }

  // Verificar si hay usuario logueado
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const nombre = usuario ? usuario.nombre : "cliente";

  const confirmation = confirm(`✅ ${nombre}, ¿deseas confirmar tu compra por $${total.toLocaleString()}?`);

  if (confirmation) {
    alert(`🎉 ¡Gracias por tu compra, ${nombre}! Tu pedido ha sido procesado correctamente.`);
    clearCart();
    window.location.href = "index.html";
  }
}

// DETECTAR BOTONES “AGREGAR AL CARRITO” EN EL CATÁLOGO
document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-to-cart");

  addButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();

      const product = {
        id: parseInt(button.dataset.id),
        name: button.dataset.name,
        price: parseInt(button.dataset.price),
        image: button.dataset.image
      };

      addToCart(product);
    });
  });

  // Si estamos en la página del carrito, renderizamos
  if (window.location.pathname.includes("carrito.html")) {
    renderCart();
  }

  updateCartCount();
});
