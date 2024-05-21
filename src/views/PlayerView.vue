<template>
  <section class="view">
    <h2 class="title">Pelaajat</h2>
    <PlayerForm />
    <PlayerList :players="players" />
    <div id="footer">
      <button id="shuffle" @click="shuffle" :disabled="disabled">
        Sekoita
      </button>
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
  computed: {
    players() {
      return this.$store.state.players;
    },
    disabled() {
      return this.$store.state.players < 2;
    },
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
  padding: 0.5rem;
  background-color: rgb(255 255 255 / 70%);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(255 255 255 / 85%);
    color: #000000;
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
