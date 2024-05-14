<template>
  <h1>Mölkky Pistelaskuri</h1>
  <component :is="currentView"></component>
  <button
    @click="startGame"
    :disabled="this.$store.state.players.length < 2"
    :hidden="visibility"
  >
    Aloita
  </button>
</template>

<script>
import PlayerView from "./views/PlayerView.vue";
import ScoreView from "./views/ScoreView.vue";
import EndView from "./views/EndView.vue";

export default {
  name: "App",
  components: {
    PlayerView,
    ScoreView,
    EndView,
  },
  data() {
    return {
      visibility: false,
    };
  },
  computed: {
    currentView() {
      if (this.$store.state.endGame) {
        return "EndView";
      } else if (this.visibility) {
        return "ScoreView";
      } else {
        return "PlayerView";
      }
    },
  },
  methods: {
    startGame() {
      this.visibility = true;
    },
  },
};
</script>

<style></style>
