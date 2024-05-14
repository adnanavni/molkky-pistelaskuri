<template>
  <section class="view">
    <h2 class="title">Pelaajat</h2>
    <PlayerForm />
    <PlayerList :players="players" />
    <div id="footer">
      <button id="shuffle" @click="shuffle">Sekoita</button>
    </div>
  </section>
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

<style>
section {
  flex-direction: column;
  align-items: center;
}

PlayerForm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
}

#footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
}

#shuffle {
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  background-color: black;
  color: whitesmoke;
  border: none;
  border-radius: 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
}
</style>
