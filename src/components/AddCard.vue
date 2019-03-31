<template>
	<div>
		<template v-if="isAdd">
			<form @submit="addCard" class="form-addCard">
				<textarea v-model="text" placeholder="Ввести заголовок для этой карточки"></textarea>
				<div class="form-addCard__buttons">
					<button type="submit" class="form-addCard__button">Добавить карточку</button>
					<button @click="selectForm" class="form-addCard__buttonPlus">
						<div class="plus button-addCard"></div>
					</button>
				</div>
			</form>
		</template>

		<template v-else>
			<div class="addCard" @click="selectForm">
				<div class="plus"></div>
				<span>Добавить карточку</span>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'AddCard',
		data () {
			return  {
				isAdd: false,
				text: ''
			}
		},
		props: {
			name: String
		},
		methods: {
			selectForm() {
				this.isAdd = !this.isAdd;
			},
			addCard(e) {
				e.preventDefault();
				let newCard = {
					id: this.name,
					content: this.text
				}

				this.$store.dispatch('addNote', newCard);

				this.text = '';
				this.isAdd = !this.isAdd;
			}
		}
	}
</script>

<style>
.addCard {
	color: #73747b;
	font-size: 14px;
	margin: 10px;
	margin-top: 15px;
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 35px;
	margin: 0;
	padding-left: 10px;
}

.addCard:hover {
	background-color: #26282c;
}

.plus {
	background-color: #73747b;
	width: 16px;
	height: 2px;
	position: relative;
	margin-right: 10px;
}

.plus::before {
	content: '';
	position: absolute;
	top: -7px;
	left: 7px;
	background-color: #73747b;
	width: 2px;
	height: 16px;
}

.form-addCard {
	margin: 10px;
}

.form-addCard textarea {
	background-color: #505050;
	border: 0;
	outline: none;
	box-sizing: border-box;
	width: 100%;
	height: 100px;
	color: #acaeb0;
	resize: none;
	padding: 10px;
}

.form-addCard__button {
	background-color: #616063;
	cursor: pointer;
	border: none;
	width: 150px;
	height: 25px;
	color: #acaeb0;
	outline: none;
	margin-right: 7px;
}

.form-addCard__button:hover {
	background-color: #515051;
}

.form-addCard__buttonPlus {
	width: 25px;
	height: 15px;
	background-color: #2b2d33;
	border: 0;
	outline: none;
	cursor: pointer;
}

.form-addCard__buttons {
	display: flex;
	align-items: center;
	margin-top: 7px;
	margin-bottom: 14px;
}

.button-addCard {
	transform: rotate(45deg);
}
</style>