<template>
  <div class="boards">
   <Board name="onHold" color="" :cards="board1" />
   <Board name="inProgress" color="" :cards="board2" />
   <Board name="needsReview" color="" :cards="board3" />
   <Board name="approved" color="" :cards="board4" />
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'app',
  components: {
    Board
  },
  computed: {
    board1() {
      return this.$store.state.onHold
    },
    board2() {
      return this.$store.state.inProgress
    },
    board3() {
      return this.$store.state.needsReview
    },
    board4() {
      return this.$store.state.approved
    }
  },
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #35383f;
  }

  .boards {
    display: flex;
    padding: 67px 20px;
    justify-content: center;
  }

  @media screen and (max-width: 1040px) { 
    .boards {
      flex-wrap: wrap;
    }
  }
</style>
