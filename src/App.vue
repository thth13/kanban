<template>
  <div class="boards">
   <Board name="onHold" />
   <Board name="inProgress" />
   <Board name="needsReview" />
   <Board name="approved"  />
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'app',
  components: {
    Board
  }
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
