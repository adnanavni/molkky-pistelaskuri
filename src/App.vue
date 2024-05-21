<template>
  <h1 @click="refreshPage">
    <img src="../public/logo.png" />Mölkky Pistelaskuri
  </h1>
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
    refreshPage() {
      window.location.reload();
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
  background-color: #f5f5dc;
}

h1 {
  margin-top: 1rem;
  cursor: default;
}

.view {
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 10);
  padding: 1.5rem;
  width: 20rem;
  background-color: #117c13;
  border-radius: 0.35rem;
  color: #ffffff;
}

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 1rem;
}

#start-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: #000000;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
  }
}

.title {
  margin-top: 0;
}

ul {
  list-style-type: decimal;
  padding: 0;
  font-size: 1.5rem;
  cursor: default;
}

img {
  width: 2rem;
  height: 2rem;
}
</style>
