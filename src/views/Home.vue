<script setup>
import { ref } from "vue";
import AddNoteBtn from "../components/AddNoteBtn.vue";

import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();
const isModalOpen = ref(false)
const title = ref('');
const content = ref('');

const handleSubmit = () => {
	noteStore.addNote(title.value, content.value)
	closeModal()
}
const openModal = () => {
	isModalOpen.value = true;
	console.log('modal abierto')
}
const closeModal = () => {
	title.value = ""
	content.value = ""
	isModalOpen.value = false
	console.log('modal cerrado')
}
</script>
<template>
	

	<section id="notes-page">
		<ul class="note-list">
			<li v-for="note in noteStore.notes" :key="note.id">
				<NoteCard :note="note" />
			</li>
		</ul>

		<AddNoteBtn :action="openModal" />
	</section>

	
	<section v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal-content-material">

			<form @submit.prevent="handleSubmit" class="note-form">

				<input type="text" placeholder="Título" v-model="title" class="material-input" maxlength="40" required />

				<textarea placeholder="Escribe tu nota..." v-model="content" class="material-textarea" required></textarea>

				<div class="actions-material">
					<button type="button" @click="closeModal" class="text-btn">Cerrar</button>

					<button type="submit" class="save-btn-material">
						<i class="material-icons">check</i>
						Guardar
					</button>
				</div>
			</form>

		</div>
	</section>
</template>
<style scoped>

#notes-page {
	padding: 16px;
	/* Usar valores estándar de padding */
	max-width: 800px;
	margin: 0 auto;
}

.note-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	/* Vista de cuadrícula para pantallas grandes */
	gap: 16px;
	list-style: none;
	/* Quitar viñetas */
	padding: 0;
	margin: 0;
}


.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	/* Fondo más suave */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	/* Animación de entrada */
	animation: fadeIn 0.3s ease-out;
}

.modal-content-material {
	background: white;
	border-radius: 8px;
	/* Sombra más pronunciada para elevar el modal */
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	width: 90%;
	max-width: 550px;
	display: flex;
	flex-direction: column;
	padding: 0;
	/* Quitamos padding externo, el padding va en los inputs */
	animation: slideUp 0.3s ease-out;
}

/* Animaciones */
@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes slideUp {
	from {
		transform: translateY(50px);
		opacity: 0;
	}

	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.note-form {
	padding: 24px;
}


.material-input,
.material-textarea {
	width: 100%;
	padding: 10px 0;
	border: none;
	border-bottom: 1px solid #ccc;
	/* Línea inferior sutil */
	margin-bottom: 16px;
	box-sizing: border-box;
	font-size: 1.1rem;
	font-weight: 500;
	color: #3c4043;
}

.material-textarea {
	min-height: 150px;
	resize: none;
	/* Mejor UX, si quieres auto-crecimiento aplica la lógica anterior */
	font-size: 1rem;
	font-weight: 300;
}

.material-input:focus,
.material-textarea:focus {
	outline: none;
	/* La línea de foco que sube */
	border-bottom: 2px solid #4285F4;
	/* Color de acento de Material Design */
}


.actions-material {
	display: flex;
	justify-content: flex-end;
	gap: 16px;
	padding-top: 10px;
}

.text-btn {
	/* Botones de texto de Material Design */
	background: none;
	border: none;
	color: #5f6368;
	padding: 8px 12px;
	cursor: pointer;
	font-weight: 500;
	text-transform: uppercase;
	border-radius: 4px;
}

.text-btn:hover {
	background-color: #f1f3f4;
}

.save-btn-material {

	background-color: #0F9D58;
	/* Color de acción de Material Design (Verde) */
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 500;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	/* Sombra de elevación */
	transition: background-color 0.2s;
	display: flex;
	align-items: center;
	gap: 5px;
}

.save-btn-material:hover {
	background-color: #0c7b46;
}
</style>


