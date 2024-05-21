<template>
  <ul>
    <li id="scorelist" v-for="(player, index) in players" :key="index">
      <div id="scoreleft">{{ player.name }}</div>
      <div id="scoreright">
        {{ player.score }} / 50 | {{ player.missed }} / 3
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ScoreList",
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style>
#scorelist {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
#scoreleft,
#scoreright {
  width: 9rem;
}
#scoreright {
  text-align: right;
}
#scoreleft {
  text-align: left;
}
</style>
