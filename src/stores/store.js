import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    players: [],
  },
  mutations: {
    addPlayer(state, player) {
      state.players.push(player);
    },
    setPlayers(state, players) {
      state.players = players;
    },
    updatePlayerScore(state, { index, score }) {
      state.players[index].score = score;
    },
  },
  actions: {
    addPlayer({ commit }, player) {
      commit("addPlayer", player);
    },
    setPlayers({ commit }, players) {
      commit("setPlayers", players);
    },
    updatePlayerScore({ commit }, { index, score }) {
      commit("updatePlayerScore", { index, score });
    },
  },
  getters: {
    getPlayer: (state) => (index) => {
      return state.players[index];
    },
  },
});
