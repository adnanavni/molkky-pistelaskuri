<template>
  <section id="scoreview" class="view">
    <p>
      {{ "Vuorossa: " + playerInTurn.name + " " + playerInTurn.score + "/50" }}
      | {{ playerInTurn.missed + "/3" }}
    </p>
    <ScoreButtons />
    <p>{{ 50 - playerInTurn.score }} jäljellä</p>
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
