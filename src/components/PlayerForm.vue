<template>
  <form @submit.prevent="addPlayer">
    <input id="name" v-model="newPlayer" placeholder="nimi" />
    <button id="add" type="submit">Lisää</button>
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
        this.$store.commit("addPlayer", {
          name: this.newPlayer,
          score: 0,
          missed: 0,
        });
        this.newPlayer = "";
      }
    },
  },
};
</script>

<style>
#name {
  padding: 1rem;
  margin-right: 0.75rem;
  border: 1px solid #000000;
  border-radius: 0.25rem;
  background-color: rgb(255 255 255 / 70%);
}

#add {
  padding: 1rem;
  background-color: black;
  color: whitesmoke;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
}
</style>
