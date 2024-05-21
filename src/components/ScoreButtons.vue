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
  width: 10rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.scorebutton {
  border-radius: 1.5rem;
  background-color: #deb887;
  color: black;
  font-size: 2rem;
  height: 3rem;
  cursor: pointer;
  width: 3rem;
  border: solid 2px black;
  box-shadow: inset 0px -8px 9px 0px #63523b;

  &:hover {
    background-color: #63523b;
  }
}

#next {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgb(255 255 255 / 70%);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 0.35rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: rgb(255 255 255 / 85%);
    color: #000000;
  }
}

.button-selected {
  background-color: #63523b;
  box-shadow: none;
}
</style>
