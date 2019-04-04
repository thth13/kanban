<template>
	<div class="board">
		<h2 class="board-onhold" :class="name">{{ name }}</h2>
		<Cards :name="name" />
		<AddCard :name="name" />
	</div>
</template>

<script>
	import AddCard from './AddCard';
	import Cards from './Cards';

	export default {
		name: 'Board',
		props: {
			name: String
		},
		components: {
			AddCard,
			Cards
		}
	}
</script>

<style>
	.board {
		margin-right: 3%;
		background-color: #2b2d33;
		width: 330px;
		min-width: 230px;
		height: 100%;
		margin-bottom: 25px;
	}

	.board h2 {
		margin-top: 0;
		display: flex;
		align-items: center;
		color: white;
		font-size: 16px;
		font-weight: lighter;
		height: 39px;
		padding-left: 10px;
		text-transform: uppercase;
	}

	.onHold {
		background-color: #fb7e46;
	}

	.inProgress {
		background-color: #2a92bf;
	}

	.needsReview {
		background-color: #f4ce46;
	}

	.approved {
		background-color: #00b961
	}
</style>