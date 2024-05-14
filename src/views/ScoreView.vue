<template>
  <section id="scoreview" class="view">
    <h2>Pisteet</h2>
    <ScoreButtons />
    <p>
      {{ "Vuorossa: " + playerInTurn.name + " " + playerInTurn.score + "/50" }}
    </p>
    <ScoreList />
  </section>
</template>

<script>
import ScoreButtons from "../components/ScoreButtons.vue";
import ScoreList from "../components/ScoreList.vue";
export default {
  name: "ScoreView",
  components: {
    ScoreButtons,
    ScoreList,
  },
  computed: {
    playerInTurn() {
      return this.$store.state.players[this.$store.state.PlayersTurn];
    },
  },
};
</script>

<style>
p {
  font-size: 1.5rem;
  margin: 0.25rem;
  text-decoration: underline;
  cursor: default;
}
</style>
