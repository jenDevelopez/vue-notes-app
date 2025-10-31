import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore(
  "notes",
  () => {
    const notes = ref([]);

    const createId = () => {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };
    const addNote = (title, content) => {
      notes.value.unshift({
        id: createId(),
        title: title,
        content: content,
      });
    };

    const getNote = (noteId) => {
      return notes.value.find((note) => note.id === noteId);
    };

    const deleteNote = (noteId) => {
      notes.value = notes.value.filter((note) => note.id !== noteId);
    };

    const editNote = (id, title, content) => {
      const note = notes.value.find((note) => note.id === id);
      if (note) {
        // 3. Actualiza las propiedades directamente.
        note.title = title;
        note.content = content;
      } else {
        // Opcional: Manejar el caso donde la nota no existe (ej. un log o un throw)
        console.error(
          `Error: No se pudo encontrar la nota con ID: ${id} para editar.`
        );
      }
    };

    return {
      notes,
      addNote,
      getNote,
      deleteNote,
      editNote,
    };
  },
  {
    persist: true,
  }
);
