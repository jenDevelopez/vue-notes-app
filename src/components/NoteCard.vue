
<!-- <script setup>
import { computed } from 'vue';
import { useNoteStore } from '../stores/note';

const props = defineProps({
    note: {
        type:Object,
        required:true
    }
})
const truncatedContent = computed(() => {
    const maxLen = 65;
    const contentText = props.note.content || ''; 
    if (contentText.length > maxLen) {
        // Trunca el contenido y añade puntos suspensivos
        return contentText.slice(0, maxLen - 5) + '...'; 
    }
    // Si es corto, retorna el contenido completo
    return contentText;
})

const noteStore = useNoteStore()
</script>
<template>
    <div class="note-card">
        <router-link :to="{name: 'note',params: {note: note.id}}">
            <p class="note-title">{{ note.title }}</p>
        </router-link>
        <p class="note-content">{{ truncatedContent }}</p>
        <button @click="noteStore.deleteNote(note.id)" class="del-btn">x</button>
    </div>
</template>
<style>
.note-card{
    background-color: #fff;
    color:black;
    border:none;
    display: flex;
    flex-direction: column;
    gap:.5rem;
    padding:1.5rem 1rem;
    border-radius:.5rem;
    height: 120px;
    position:relative;

    .note-title{
        font-size:1.3rem;
        border:none;
        color:black;
    }
    .note-content{
        font-weight: lighter;
        color:rgb(155, 149, 149);
        border:none;
        padding: .5rem;
    }

}

.del-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border:none;
    font-weight:bold;
    font-size:1.5rem;
    position:absolute;
    right:1rem;
    top:1rem;
    color: red;
}
   


</style>
 -->


 <script setup>
import { computed } from 'vue';
import { useNoteStore } from '../stores/note';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const truncatedContent = computed(() => {
    const maxLen = 70; // Un poco más de espacio para la vista previa
    const contentText = props.note.content || ''; 
    if (contentText.length > maxLen) {
        return contentText.slice(0, maxLen) + '...'; 
    }
    return contentText;
})

const noteStore = useNoteStore()
</script>

<template>
    <div class="note-card-minimal">
        <router-link :to="{ name: 'note', params: { note: note.id } }" class="card-link-minimal">
            <h3 class="note-title-minimal">{{ note.title }}</h3>
            <p class="note-content-minimal">{{ truncatedContent }}</p>
        </router-link>
        
        <button 
            @click.stop="noteStore.deleteNote(note.id)" 
            class="del-btn-minimal"
            title="Eliminar nota"
        >
            <i class="material-icons">delete</i>
        </button>
    </div>
</template>

<style scoped>
/*
  Nota: Debes incluir la fuente de Material Icons en tu index.html
 */

.note-card-minimal {
    background-color: #ffffff; /* Blanco puro */
    border: 1px solid #e0e0e0; /* Borde sutil en lugar de sombras fuertes */
    border-radius: 6px; 
    box-shadow: 2px 2px 5px #a19292;
    padding: 1.2rem; /* Más padding para más "aire" */
    margin-bottom: 12px; /* Espacio entre tarjetas */
    min-height: 100px; /* Altura mínima para mantener uniformidad */
    
    position: relative;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out; /* Transición suave para hover */
}

.note-card-minimal:hover {
    border-color: #c0c0c0; /* Borde ligeramente más oscuro al pasar el ratón */
    box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Sombra muy sutil al pasar el ratón */
}

.card-link-minimal {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: .4rem; /* Menos espacio entre título y contenido */
    flex-grow: 1;
    padding-right: 2.5rem; /* Deja espacio para el botón de eliminar */
}

.note-title-minimal {
    font-family: 'Inter', 'Helvetica Neue', sans-serif; /* Sugerencia de fuente limpia */
    font-size: 1.1em;
    font-weight: 600; /* Un poco más de peso para el título */
    color: #333333; /* Negro suave para el texto principal */
    margin: 0;
    line-height: 1.3;
}

.note-content-minimal {
    font-family: 'Inter', 'Helvetica Neue', sans-serif; /* Sugerencia de fuente limpia */
    font-weight: 300;
    color: #888888; /* Gris más claro para el contenido */
    font-size: 0.85em;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limita a 3 líneas visibles */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.del-btn-minimal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.1rem; /* Ícono un poco más pequeño */
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    color: #aaaaaa; /* Gris muy sutil por defecto */
    padding: 0.3rem;
    border-radius: 50%;
    transition: color 0.2s, background-color 0.2s;
}

.del-btn-minimal:hover {
    color: #ff6b6b; /* Rojo suave para la acción de eliminar */
    background-color: rgba(255, 107, 107, 0.1); /* Fondo muy sutil al pasar el ratón */
}
</style>