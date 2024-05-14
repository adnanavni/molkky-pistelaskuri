import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    players: [],
    score: 0,
    selectedButtons: [],
    PlayersTurn: 0,
    endGame: false,
  },
  mutations: {
    addPlayer(state, player) {
      state.players.push(player);
    },
    setPlayers(state, players) {
      state.players = players;
    },
    selectButton(state, index) {
      if (!state.selectedButtons.includes(index)) {
        state.selectedButtons.push(index);
        state.score = index;

        if (state.selectedButtons.length >= 2) {
          state.score = state.selectedButtons.length;
        }
      }
    },
    sendScore(state) {
      const oldScore = state.players[state.PlayersTurn].score;
      const sum = parseInt(oldScore) + state.score;

      if (sum === 50) {
        state.endGame = true;
      }

      if (sum > 50) {
        state.players[state.PlayersTurn].score = 25;
      } else {
        state.players[state.PlayersTurn].score = sum;
      }

      state.selectedButtons = [];
      state.score = 0;

      state.PlayersTurn = state.PlayersTurn + 1;
      if (state.PlayersTurn == state.players.length) {
        state.PlayersTurn = 0;
      }
    },
  },
  actions: {
    addPlayer({ commit }, player) {
      commit("addPlayer", player);
    },
    setPlayers({ commit }, players) {
      commit("setPlayers", players);
    },
    selectButton({ commit }, index) {
      commit("selectButton", index);
    },
    sendScore({ commit }) {
      commit("sendScore");
    },
  },
  getters: {
    getPlayer: (state) => (index) => {
      return state.players[index];
    },
  },
});
