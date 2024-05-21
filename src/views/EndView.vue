<template>
  <section id="endview" class="view">
    <h1>Peli päättyi</h1>
    <ul>
      <li v-for="(players, index) in players" :key="index">
        {{ players.name }}: {{ players.score }} / 50
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "EndView",

  computed: {
    players() {
      const sortedPlayers = [...this.$store.state.players].sort(
        (a, b) => b.score - a.score
      );
      return sortedPlayers;
    },
  },
};
</script>
