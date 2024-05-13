<template>
  <div id="scoringboard">
    <h1>Pistelaskuri</h1>
    <ul>
      <li v-for="(player, index) in players" :key="index">
        {{ player.name }}: {{ player.score }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: this.$store.state.players,
    };
  },
};
</script>

<style></style>
