import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    players: [],
    originalPlayers: [],
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

    toggleButton(state, index) {
      if (!state.selectedButtons.includes(index)) {
        state.selectedButtons.push(index);
        state.score = index;

        if (state.selectedButtons.length >= 2) {
          state.score = state.selectedButtons.length;
        }
      } else {
        let i = state.selectedButtons.indexOf(index);
        state.selectedButtons.splice(i, 1);

        if (state.selectedButtons.length >= 2) {
          state.score = state.selectedButtons.length;
        } else if (state.selectedButtons.length === 1) {
          state.score = state.selectedButtons[0];
        } else {
          state.score = 0;
        }
      }
    },

    sendScore(state) {
      const sum = state.players[state.PlayersTurn].score + state.score;
      const length = state.players.length;

      if (state.score === 0) {
        state.players[state.PlayersTurn].missed += 1;

        if (state.players[state.PlayersTurn].missed === 3) {
          let index = state.players.indexOf(state.players[state.PlayersTurn]);
          state.originalPlayers = [...state.players];
          state.players.splice(index, 1);

          if (state.players.length === 1) {
            state.players = [...state.originalPlayers];
            state.endGame = true;
          }
        }
      } else {
        state.players[state.PlayersTurn].missed = 0;

        if (sum === 50) {
          state.players[state.PlayersTurn].score = sum;
          state.endGame = true;
        } else if (sum > 50) {
          state.players[state.PlayersTurn].score = 25;
        } else {
          state.players[state.PlayersTurn].score = sum;
        }
      }

      state.selectedButtons = [];
      state.score = 0;

      if (length !== state.players.length) {
        state.PlayersTurn = state.PlayersTurn % state.players.length;
      } else {
        state.PlayersTurn = (state.PlayersTurn + 1) % state.players.length;
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
    toggleButton({ commit }, index) {
      commit("toggleButton", index);
    },
  },
  getters: {
    getPlayer: (state) => (index) => {
      return state.players[index];
    },
  },
});
