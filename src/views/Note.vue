<script setup>
import { ref, onMounted, nextTick } from "vue"; // Importamos nextTick
import { useRoute, useRouter } from "vue-router";
import { useNoteStore } from "../stores/note";

const route = useRoute();
const router = useRouter();
const noteStore = useNoteStore();

const localNote = ref({
    id: '',
    title: '',
    content: ''
});

// Referencia al textarea para el auto-crecimiento
const contentTextarea = ref(null);

// Lógica de auto-crecimiento
const autoGrow = () => {
    const textarea = contentTextarea.value;
    if (textarea) {
        textarea.style.height = 'auto'; // Resetear la altura
        textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar a la altura del contenido
    }
};

//Cargar nota y activar auto-crecimiento
onMounted(() => {
    const noteId = route.params.note;
    const noteData = noteStore.getNote(noteId);

    if (noteData) {
      
        localNote.value = JSON.parse(JSON.stringify(noteData)); 
        nextTick(autoGrow); 
    } else {
        router.push('/'); 
    }
});

// 2. Función de Guardado Unificado
const saveChanges = () => {
    noteStore.editNote(
        localNote.value.id,
        localNote.value.title,
        localNote.value.content
    );
    // Redirigir después de guardar
    router.push('/');
};

// 3. Función para eliminar (Ahora integrada en la barra superior)
const deleteAndGoBack = () => {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        noteStore.deleteNote(localNote.value.id);
        router.push('/');
    }
};
</script>


<template>
    <div v-if="localNote.id" class="note-detail-page">
        
        <header class="app-bar">
            <button @click="router.push('/')" class="icon-btn" title="Volver">
                <i class="material-icons">arrow_back</i>
            </button>
            
            <h1 class="app-bar-title">Editar Nota</h1>
            
            <button @click="deleteAndGoBack" class="icon-btn delete-icon" title="Eliminar Nota">
                <i class="material-icons">delete</i>
            </button>
        </header>

        <form @submit.prevent="saveChanges" class="edit-form">
            <input 
                v-model="localNote.title" 
                type="text"
                class="note-title-input"
                placeholder="Título de la nota"
                maxlength="80"
            />

            <textarea 
                ref="contentTextarea"
                v-model="localNote.content"
                @input="autoGrow"
                rows="1"
                class="note-content-textarea"
                placeholder="Contenido de la nota"
            ></textarea>
        </form>

        <button @click="saveChanges" class="fab-save" title="Guardar cambios">
            <i class="material-icons">save</i>
        </button>
    </div>
</template>

<style scoped>
/* Estilos Globales de la Página */
.note-detail-page {
    /* Quitamos el fondo blanco de la tarjeta para usar el fondo del body */
    max-width: 800px;
    margin: 0 auto;
    padding-top: 64px; /* Espacio para la barra de aplicación fija */
    padding-left: 16px;
    padding-right: 16px;
    /* La sombra la delegamos al App Bar */
}

/* ---------------------------------------------------- */
/* Material Design: App Bar Superior */
/* ---------------------------------------------------- */
.app-bar {
    position: fixed; /* Fijo en la parte superior */
    top: 15px;
    left: 0;
    right: 0;
    z-index: 1000;
    max-width: 800px; /* Alineado con el contenedor principal */
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    height: 56px; /* Altura estándar en móvil */
    padding: 0 16px;
    background-color: #303F9F; /* Color Primario de Material Design (Azul) */
    color: white;

}

.app-bar-title {
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
    flex-grow: 1; /* Permite que el título ocupe el centro */
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.icon-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    margin: 0 4px;
    border-radius: 50%; /* Circular */
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
    font-size: 1.5rem;
}

.icon-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.delete-icon {
    /* Sobrescribir el color para el ícono de eliminar si se desea contraste */
    color: #fff;  
}

/* ---------------------------------------------------- */
/* Material Design: Formulario */
/* ---------------------------------------------------- */

.edit-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1.5rem;
}

.note-title-input {
    font-size: 2.2rem;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #e0e0e0; /* Línea de Material Design */
    font-weight: 400; /* Peso de fuente más ligero */
    color: #333;
    width: 100%;
}

.note-content-textarea {
    font-size: 1.1rem;
    padding: 10px 0;
    min-height: 40vh; /* Altura mínima relativa */
    border: none;
    resize: none; /* Desactivar redimensionamiento manual */
    overflow-y: hidden; /* Ocultar barra de desplazamiento */
    line-height: 1.6;
    color: #555;
    font-weight: 300;
}

.note-title-input:focus,
.note-content-textarea:focus {
    outline: none;
    border-color: #4285F4; /* Color de acento de Material Design al enfocar */
}

/* ---------------------------------------------------- */
/* Material Design: Botón de Acción Flotante (FAB) */
/* ---------------------------------------------------- */
.fab-save {
    /* Posición estándar del FAB */
    position: fixed;
    bottom: 24px;
    right: 24px;
    
    /* Estilos */
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #0F9D58; /* Color de acento (Verde) para la acción principal */
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: background-color 0.3s;
    z-index: 100;
}

.fab-save:hover {
    background-color: #0c7b46;
}
</style>
