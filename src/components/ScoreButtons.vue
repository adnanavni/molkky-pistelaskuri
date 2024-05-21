<template>
  <div id="scorebuttons">
    <button
      class="scorebutton"
      v-for="index in 12"
      :key="index"
      @click="toggleButton(index)"
      :class="{ 'button-selected': isButtonDisabled(index) }"
    >
      {{ index }}
    </button>
  </div>

  <button id="next" @click="sendScore">
    {{ score === 0 ? "Ohi" : "(" + score + ")" }}
  </button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["selected"],
  computed: {
    ...mapState(["selectedButtons"]),
    score() {
      return this.$store.state.score;
    },
  },
  methods: {
    ...mapActions(["toggleButton", "sendScore"]),
    isButtonDisabled(index) {
      return this.selectedButtons.includes(index);
    },
  },
};
</script>

<style>
#scorebuttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width: 7rem;
  justify-content: center;
}

.scorebutton {
  border-radius: 1rem;
  background-color: transparent;
  color: black;
  font-size: 1.5rem;
  max-width: 3rem;
  max-height: 2rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    background-color: black;
    color: black;
  }
}

#next {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #000000;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
}

.button-selected {
  background-color: black;
  color: white;
}
</style>
