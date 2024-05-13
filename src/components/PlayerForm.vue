<template>
  <form @submit.prevent="addPlayer">
    <input v-model="newPlayer" placeholder="nimi" />
    <button type="submit">Lisää</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newPlayer: "",
    };
  },
  methods: {
    addPlayer() {
      if (this.newPlayer) {
        this.$store.commit("addPlayer", { name: this.newPlayer, score: "0" });
        this.newPlayer = "";
      }
    },
  },
};
</script>

<style></style>
