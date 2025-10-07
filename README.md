# 🛍️ Gambito Soluciones – Frontend Web

Proyecto web desarrollado como parte del entregable final de frontend.  
Simula un entorno de **tienda virtual funcional** con gestión de usuario, catálogo de productos, carrito de compras y bandeja de mensajes, implementado completamente en **HTML, CSS, JavaScript** y **Bootstrap 5**.

🌐 **Despliegue en GitHub Pages:**  
👉 [https://diegogamboa25.github.io/Entregable-2-frontend-/](https://diegogamboa25.github.io/Entregable-2-frontend-/)  
📨 **Bandeja de mensajes:**  
👉 [https://diegogamboa25.github.io/Entregable-2-frontend-/bandeja.html](https://diegogamboa25.github.io/Entregable-2-frontend-/bandeja.html)

---

## 🧭 Descripción General

**Gambito Soluciones** es una aplicación web **frontend 100% estática**, que simula el flujo completo de una tienda virtual:

- Inicio y autenticación de usuario.  
- Catálogo de productos.  
- Carrito de compras con simulación de pago.  
- Formulario de contacto y bandeja de mensajes.  

Toda la persistencia se realiza mediante **LocalStorage**, sin necesidad de un backend real.

---

## ⚙️ Tecnologías Utilizadas

- **HTML5 / CSS3 / JavaScript (ES6)**
- **Bootstrap 5.3**
- **Bootstrap Icons**
- **LocalStorage (persistencia simulada)**
- **GitHub Pages** (despliegue)
- **Visual Studio Code**

---

## 🧩 Estructura del Proyecto

```
MI-TIENDA-WEB-ENTREGA-2/
│
├── components/
│   ├── footer.html
│   └── navbar.html
│
├── css/
│   ├── hero.css
│   ├── login.css
│   ├── navbar.css
│   └── styles.css
│
├── img/
│   ├── (imágenes del sitio y productos en formato .webp)
│
├── js/
│   ├── auth.js
│   ├── cart.js
│   ├── contact.js
│   ├── inbox.js
│   ├── login.js
│   └── main.js
│
├── docs/
│   ├── Manual_Tecnico_Funcional_Proyecto.pdf
│   ├── Diagrama casos de usos.png
│   ├── Diagrama de clases.png
│   ├── Diagrama de secuencias.png
│   ├── Diagrama arquitectura funcional.png
│   ├── Diagrama de flujo de navegacion.png
│
├── acerca.html
├── bandeja.html
├── carrito.html
├── catalogo.html
├── index.html
├── login.html
├── producto.html
│
├── README.md   ← (documentación principal del repositorio)
```

---

## 🚀 Instalación y Ejecución

### 🔧 Ejecución local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DiegoGamboa25/Entregable-2-frontend-.git
   ```
2. Abrir la carpeta del proyecto en **Visual Studio Code**.  
3. Ejecutar con la extensión **Live Server** o abrir directamente el archivo `index.html`.

### 🌍 Despliegue en GitHub Pages
1. Confirmar los cambios:
   ```bash
   git add .
   git commit -m "Actualización de funciones o contenido"
   git push origin main
   ```
2. En GitHub, ir a **Settings → Pages** y seleccionar la rama principal.  
3. Verificar el despliegue en la URL pública.

---

## 💻 Módulos Principales

| Archivo | Descripción Técnica |
|----------|--------------------|
| **main.js** | Carga dinámica de `navbar.html` y `footer.html`, y sincroniza el contador del carrito. |
| **auth.js** | Controla la sesión del usuario. Detecta si hay usuario activo y gestiona el cierre de sesión. |
| **login.js** | Simula autenticación con usuarios ficticios y almacena la sesión en LocalStorage. |
| **cart.js** | Gestiona el carrito: agregar, eliminar, vaciar, calcular totales y simular compra. |
| **contact.js** | Controla el formulario de contacto, almacenando los mensajes en LocalStorage. |
| **inbox.js** | Muestra los mensajes guardados desde el formulario en la bandeja administrativa. |

---

## 👥 Usuarios Ficticios

El sistema incluye usuarios predefinidos para realizar pruebas de inicio de sesión:

| Usuario | Email | Contraseña |
|----------|--------|------------|
| **Diego** | diego@example.com | 1234 |
| **Admin** | admin@example.com | admin |

Estos usuarios están configurados dentro del archivo `login.js` y se guardan temporalmente en el LocalStorage al iniciar sesión.

---

## 🔄 Flujo Funcional

1. **Inicio (`index.html`)**  
   Muestra la presentación de la empresa y permite navegar hacia el catálogo o iniciar sesión.  

2. **Catálogo (`catalogo.html`)**  
   Listado de productos con opción para **Agregar al carrito**.  

3. **Carrito (`carrito.html`)**  
   Permite visualizar, modificar o vaciar el carrito, y simular una compra.  

4. **Inicio de sesión (`login.html`)**  
   Login simulado con los usuarios ficticios listados arriba.  

5. **Acerca de / Contacto (`acerca.html`)**  
   Formulario para enviar mensajes, gestionado por `contact.js`.  

6. **Bandeja de mensajes (`bandeja.html`)**  
   Listado dinámico de mensajes enviados, renderizado por `inbox.js`.

---

## 🧱 Arquitectura del Sistema

**Tipo:** Frontend modular estático  
**Patrón:** Separación de capas (Presentación / Lógica / Datos simulados)

### Estructura funcional:
- **Frontend (HTML, JS, CSS)** → interfaz principal.  
- **LocalStorage** → persistencia de datos.  
- **Navbar/Footer** → componentes reutilizables cargados dinámicamente.  
- **Scripts modulares** → cada módulo JS controla una funcionalidad independiente.

---

## 🗂️ Documentación y Diagramas UML

Los diagramas se encuentran en la carpeta `/docs`:

| Diagrama | Archivo |
|-----------|----------|
| **Casos de uso** | `Diagrama casos de usos.png` |
| **Clases** | `Diagrama de clases.png` |
| **Secuencia** | `Diagrama de secuencias.png` |
| **Arquitectura funcional** | `Diagrama arquitectura funcional.png` |
| **Flujo de navegación** | `Diagrama de flujo de navegacion.png` |

También se incluye el documento:  
📄 `Manual_Tecnico_Funcional_Proyecto.pdf`

---

## 🧪 Mantenimiento y Mejora Continua

- **Preventivo:** Verificar enlaces, limpiar LocalStorage y actualizar librerías Bootstrap.  
- **Correctivo:** Corregir eventos y rutas en scripts según cambios de estructura.  
- **Evolutivo:** Migrar autenticación y carrito a API real, o conectar con base de datos externa.

---

## 👨‍💻 Autor

**Desarrollador:** Diego Alejandro Gamboa Beltrán  
📧 [diego@example.com]  
📦 [GitHub: DiegoGamboa25](https://github.com/DiegoGamboa25)

---

## 🪪 Licencia

Proyecto publicado bajo licencia **MIT**.  
Puedes usarlo, modificarlo y compartirlo libremente, manteniendo los créditos del autor.
