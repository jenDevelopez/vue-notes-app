📝 Notes App

Una aplicación de notas moderna, rápida y con un diseño centrado en la productividad, inspirada en los principios de Material Design.

🚀 Tecnologías Clave

Esta aplicación está construida usando el stack de desarrollo web moderno:

| Tecnología                     | Rol                                                                                                          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Vue 3 (Composition API)        | Framework principal para construir la interfaz de usuario.                                                   |
| Pinia                          | Gestión de estado centralizada para almacenar y manipular las notas de manera eficiente.                     |
| Vue Router 4                   | <p>Manejo de la navegación y las rutas de la aplicación.</p><p></p>                                          |
| <p>Material Design</p><p></p>  | <p>Estilo visual de la interfaz, utilizando principios de elevación, sombras y colores de acento.</p><p></p> |
| <p>CSS Flexbox/Grid</p><p></p> | <p>Estructura responsiva de la interfaz de usuario.</p><p></p>                                               |

🛠️ Estructura del Proyecto

El proyecto sigue la convención de organización de proyectos de Vue.js:

1\. Componentes (src/components/)

Contiene los bloques de construcción reutilizables de la interfaz, siguiendo un diseño modular:

* NoteCard.vue: La tarjeta que visualiza el título y un extracto de la nota. Implementa los íconos de eliminar y navegar a la edición.

* NoteEdit.vue: El componente de edición a pantalla completa, con inputs para título y contenido, y lógica de auto-crecimiento.

* AddNoteBtn.vue: El Botón de Acción Flotante (FAB) que dispara la creación de una nueva nota.

2\. Vistas (src/views/)

Contiene los componentes que representan páginas completas de la aplicación:

* NotesView.vue: La página principal que lista todas las notas (NoteCard) y gestiona el flujo de trabajo (incluyendo el modal de creación de notas).

3\. Gestión de Estado (src/stores/)

* note.js (Store Pinia): Contiene toda la lógica central de la aplicación:

    *Estado (state): Almacena el array reactivo de todas las notas.

        *Acciones (actions): Funciones para modificar el estado (ej. addNote, deleteNote, editNote).

🎨 Características de la Interfaz (UI/UX)

La aplicación implementa una interfaz de usuario adaptativa y eficiente basada en Material Design:

* Diseño Modular: Uso de tarjetas flotantes (NoteCard) con sombras sutiles (elevación de Material Design) para representar cada nota.

* Creación Rápida: La creación de nuevas notas se realiza a través de un Modal limpio, con inputs que se ajustan al estilo Material.

* Edición Eficiente: El área de contenido en la vista de edición utiliza un <textarea> con lógica de crecimiento automático (autosize) para adaptarse al texto.

* Navegación: La barra superior (App Bar) utiliza un color de acento azul (#4285F4) y una sombra para indicar elevación, siguiendo el estándar de Material Design.

## ⚙️ Instalación y Ejecución

Para levantar el proyecto localmente, sigue estos pasos:

### 1. Clonar el repositorio

Copia el repositorio y navega al directorio del proyecto:

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd [nombre-del-repositorio]
```

### 2. Instalar dependencias:

```bash
npm install | yarn install
```

### 3. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev | yarn dev
```

La aplicación estará disponible en http://localhost:5173/ (o el puerto que se muestre en la consola).