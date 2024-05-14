<template>
  <section id="endview" class="view">
    <h1>Peli päättyi</h1>
    <ul>
      <li v-for="(player, index) in players" :key="index">
        {{ player.name }}: {{ player.score }} / 50
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "EndView",

  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>
