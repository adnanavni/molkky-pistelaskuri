<template>
  <div id="scorebuttons">
    <button
      v-for="index in 12"
      :key="index"
      @click="selectButton(index)"
      :disabled="isButtonSelected(index)"
    >
      {{ index }}
    </button>
  </div>

  <button @click="sendScore">Seuraava {{ score }}</button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["selected"],
  computed: {
    ...mapState(["selectedButtons"]),
    isButtonSelected() {
      return (index) => this.selectedButtons.includes(index);
    },
    score() {
      return this.$store.state.score;
    },
  },
  methods: {
    ...mapActions(["selectButton", "sendScore"]),
  },
};
</script>

<style></style>
