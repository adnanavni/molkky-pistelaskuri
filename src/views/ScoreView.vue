<template>
  <div id="scoringboard">
    <h1>Pistelaskuri</h1>
    <ScoreButtons />
    <ul>
      <li v-for="(player, index) in players" :key="index">
        {{ player.name }}: {{ player.score }}
      </li>
    </ul>
  </div>
</template>

<script>
import ScoreButtons from "../components/ScoreButtons.vue";
export default {
  name: "ScoreView",
  components: {
    ScoreButtons,
  },
  data() {
    return {
      players: this.$store.state.players,
    };
  },
};
</script>

<style></style>
