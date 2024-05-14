<template>
  <ul>
    <li v-for="(player, index) in players" :key="index">
      {{ player.name }}: {{ player.score }} / 50
    </li>
  </ul>
</template>

<script>
export default {
  name: "ScoreList",
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style></style>
