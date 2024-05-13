<template>
  <div id="playerlist">
    <h1>Pelaajat</h1>
    <PlayerForm />
    <PlayerList :players="players" />
    <button @click="shuffle">Sekoita</button>
  </div>
</template>

<script>
import PlayerForm from "../components/PlayerForm.vue";
import PlayerList from "../components/PlayerList.vue";

export default {
  components: {
    PlayerForm,
    PlayerList,
  },
  data() {
    return {
      players: this.$store.state.players || [],
    };
  },
  methods: {
    shuffle() {
      this.players.sort(() => Math.random() - 0.5);
      this.$store.commit("setPlayers", this.players);
    },
  },
};
</script>
