<template>
	<draggable v-model="cards" class="cardList" group="cards">
		<div class="card" v-for="item in cards" :key="item.id">
			<span class="card-id">id: </span><span>{{ item.id }}</span>
			<button class="delete-button" @click="deleteCard(item.id)">
				<div class="delete"></div>
			</button>
			<p>{{ item.content }}</p>
		</div>
	</draggable>
</template>

<script>
	import draggable from 'vuedraggable';

	export default {
		name: 'Cards',
		props: {
			name: String
		},
		components: {
			draggable
		},
		mounted() {
			this.$store.commit('getCards');
		},
		computed: {
			cards: {
				get() {
					return this.$store.state.cards[this.name]
				},
				set(value) {
					this.$store.commit('setCard', {value, key: this.name})
				}
			}
		},
		methods: {
			deleteCard(id) {
				var data = {
					id,
					name: this.name
				};

				this.$store.dispatch('deleteCard', data);
			}
		}
	}
</script>

<style>
	.card {
		background-color: #191a1d;
		color: #9b9e9a;
		font-size: 14px;
		padding: 10px;
		margin: 10px;
		cursor: move;
	}
	.cardList::-webkit-scrollbar { width: 0; }

	.card-id {
		color: white;
		font-weight: bold;
	}

	.delete-button {
		float: right;
		width: 10px;
		height: 10px;
		background-color: #191a1d;
		border: 0;
		outline: none;
		cursor: pointer;
		margin: 0;
		padding: 0;
		margin-right: -4px;
		margin-top: -5px;
	}

	.delete {
		background-color: #73747b;
		cursor: pointer;
		width: 9px;
		height: 1px;
		position: relative;
		transform: rotate(45deg);
	}

	.delete::before {
		content: '';
		position: absolute;
		top: -4px;
		left: 4px;
		background-color: #73747b;
		width: 1px;
		height: 9px;
	}
</style>