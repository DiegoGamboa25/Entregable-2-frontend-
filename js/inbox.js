
// Lee los mensajes guardados en localStorage y los muestra en una tabla.

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("inboxTable");
  const clearBtn = document.getElementById("clearInbox");

  // Cargar mensajes
  const mensajes = JSON.parse(localStorage.getItem("mensajesContacto") || "[]");

  if (mensajes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" class="text-muted text-center">No hay mensajes recibidos aún.</td>
      </tr>`;
  } else {
    tbody.innerHTML = mensajes
      .map(msg => `
        <tr>
          <td>${msg.fecha}</td>
          <td>${msg.nombre} ${msg.apellido || ""}</td>
          <td>${msg.email}</td>
          <td class="text-start">${msg.mensaje}</td>
        </tr>
      `)
      .join("");
  }

  // Limpiar bandeja
  clearBtn.addEventListener("click", () => {
    const confirmDelete = confirm("¿Seguro que deseas borrar todos los mensajes?");
    if (confirmDelete) {
      localStorage.removeItem("mensajesContacto");
      location.reload();
    }
  });
});
