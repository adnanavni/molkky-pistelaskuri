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

export default {
  name: "App",
  components: {
    PlayerView,
    ScoreView,
  },
  data() {
    return {
      currentView: "PlayerView",
      visibility: false,
    };
  },
  methods: {
    startGame() {
      this.currentView = "ScoreView";
      this.visibility = true;
    },
  },
};
</script>

<style></style>
