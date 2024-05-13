<template>
  <ul>
    <li v-for="(player, index) in players" :key="index">
      {{ player.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
