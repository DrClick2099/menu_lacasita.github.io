# 🏍️ Burger Bike's - Menú Interactivo & Pedidos por WhatsApp

¡Bienvenido al repositorio del menú digital e interactivo de **Burger Bike's**! Esta es una aplicación web moderna, ultra-rápida y completamente responsiva diseñada para facilitar la visualización del menú del Food Truck y agilizar el proceso de recepción de pedidos a través de WhatsApp.

---

## 🎨 Identidad Visual y Diseño Premium

El diseño está inspirado en la cultura *biker* y los *retro diners* americanos nocturnos, utilizando una paleta de colores vibrantes y contrastantes:
*   **Fondo Negro Carbón (`#0a0a0a`):** Proporciona un lienzo oscuro premium para resaltar las luces.
*   **Verde Limón Neón (`#66ff00`):** Extraído directamente del logotipo oficial. Utilizado para precios, títulos y bordes luminosos (*glowing effects*).
*   **Naranja Eléctrico (`#ff5500`):** Color estratégico de contraste que estimula el apetito y jerarquiza los llamados a la acción principales (badges de primer lugar, indicador de carrito y botón de WhatsApp).
*   **Tipografía:** Encabezados imponentes usando *Oswald* y textos limpios con *Space Grotesk* para máxima legibilidad.

---

## 🛠️ Estructura del Proyecto (Arquitectura Modular)

El proyecto está organizado de manera limpia y modular para simplificar el mantenimiento futuro:

```text
Menu_Interactivos/
├── assets/                  # Recursos gráficos locales
│   ├── logo.jpg             # Logotipo oficial de Burger Bike's
│   ├── burger_item.jpg      # Foto ilustrativa de Hamburguesas
│   ├── snack_item.jpg       # Foto ilustrativa de Snacks (Snaks)
│   └── combo_item.jpg       # Foto ilustrativa de Combos y fondo del banner
├── index.html               # Estructura HTML5 y metadatos SEO
├── styles.css               # Hojas de estilo, variables y animaciones
└── app.js                   # Base de datos de productos y lógica interactiva
```

---

## 🚀 Funcionalidades Clave

1.  **Buscador en Tiempo Real:** Filtra instantáneamente las hamburguesas y snacks por nombre o ingredientes conforme escribes.
2.  **Filtro por Categorías:** Pestañas superiores (Todo, Hamburguesas, Combos, Snaks, Bebidas) con deslizamiento suave en dispositivos móviles.
3.  **Modal de Detalles y Personalización:** Al hacer clic en un producto se despliega una ventana modal donde el cliente puede seleccionar la cantidad y ver la descripción del artículo.
4.  **Carrito de Compras Persistente:** Guarda el progreso de la orden en el almacenamiento local del navegador (`localStorage`) para evitar pérdidas de datos si la pestaña se cierra por accidente.
5.  **Flujo "Para Recoger" simplificado:** Diseñado para comer en el establecimiento o pasar a recoger (sin dirección de entrega).
6.  **Checkout automatizado por WhatsApp:** Genera un mensaje detallado y formateado profesionalmente con un clic, abriendo la aplicación de WhatsApp lista para enviar.

---

## 💻 ¿Cómo Usarlo y Desplegarlo?

### Uso Local
Para ver y probar el menú interactivo en tu computadora o dispositivo móvil local:
1.  Descarga o clona este directorio.
2.  Haz doble clic en el archivo [index.html](index.html) para abrirlo directamente en tu navegador web preferido (Chrome, Edge, Safari, Firefox).
3.  ¡Las imágenes y estilos se cargarán al instante desde las carpetas locales!

### Despliegue en la Nube
Al no requerir base de datos ni servidores dinámicos backend (todo corre en el cliente), puedes alojarlo gratis y en cuestión de segundos en servicios como:
*   [GitHub Pages](https://pages.github.com/)
*   [Netlify](https://www.netlify.com/)
*   [Vercel](https://vercel.com/)

---

## ⚙️ ¿Cómo Personalizar el Menú?

*   **Agregar/Modificar Productos:** Abre el archivo [app.js](app.js) y edita la constante `PRODUCTS` al inicio del archivo. Puedes modificar precios, nombres, descripciones o añadir nuevas categorías.
*   **Modificar Colores o Fuentes:** Abre el archivo [styles.css](styles.css) y edita las variables declaradas dentro del selector `:root` en las primeras líneas.
