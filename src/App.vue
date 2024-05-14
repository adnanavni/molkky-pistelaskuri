<template>
  <h1>Mölkky Pistelaskuri</h1>
  <component :is="currentView"></component>
  <button
    id="start-button"
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #117c13;
  color: whitesmoke;
}

h1 {
  margin-top: 1rem;
}

.view {
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 10);
  padding: 1.5rem;
  max-height: 85vh;
  width: 20rem;
  color: black;
  background-color: #deb887;
  border-radius: 0.35rem;
}

#start-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #deb887;
  color: black;
  border: none;
  border-radius: 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #b4966f;
  }

  &:disabled {
    background-color: #504231;
    cursor: not-allowed;
  }
}

.title {
  margin-top: 0;
}

ul {
  list-style-type: disclosure-open;
  padding: 0.25rem;
  font-size: 1.75rem;
  cursor: default;
}
</style>
