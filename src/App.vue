<template lang="">
	<div>
		<h1>Contactez-nous</h1>
		<p>
			Remplissez ce formulaire, nous vous contacterons le plus tot possible.
		</p>
		<form @submit.prevent="onSubmit">
			<input v-model="nom" type="text" placeholder="Votre nom complet *" />
			<input v-model="tel" type="text" placeholder="Votre téléphone *" />
			<textarea
				v-model="message"
				id=""
				cols="30"
				rows="10"
				placeholder="Votre message *"
			></textarea>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>
<script>
import { submitMessage } from '@/firebase';

export default {
	data() {
		return {
			nom: '',
			tel: '',
			message: '',
		};
	},
	methods: {
		async onSubmit() {
			const nom = this.nom;
			const tel = this.tel;
			const message = this.message;
			await submitMessage({ nom, tel, message });
			this.$router.push('/');
		},
	},
};
</script>
<style scoped>
button {
	padding: 10px 20px;
	background-color: black;
	color: white;
}
form {
	display: flex;
	flex-direction: column;
	align-items: center;
}
div {
	display: flex;
	flex-direction: column;
	align-items: center;
}
input,
textarea {
	width: 1000px;
	margin: 5px;
	padding: 5px;
	padding-left: 15px;
}
</style>

