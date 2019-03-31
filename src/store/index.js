import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		 onHold: [
        { id: 1, content: 'asadasda'},
        { id: 2, content: 'asadasda'},
        { id: 3, content: 'asadasda'},
        { id: 4, content: 'asadasda'}
     ],
     inProgress: [
       { id: 5, content: 'asadasda'},
       { id: 6, content: 'asadasda'},
       { id: 7, content: 'asadasda'},
       { id: 8, content: 'asadasda'}
     ],
     needsReview: [
       { id: 9, content: 'asadasda'},
       { id: 10, content: 'asadasda'},
       { id: 11, content: 'asadasda'},
       { id: 12, content: 'asadasda'}
     ],
     approved: [
       { id: 13, content: 'asadasda'},
       { id: 14, content: 'asadasda'},
       { id: 15, content: 'asadasda'},
       { id: 16, content: 'asadasda'}
     ],
     count: 0
	},
	mutations: {
		ADD_NOTE (state, note) {
      var kek = note.card;
      alert(note.content);
      state.onHold.push(note);
		},

	},
	actions: {
    addNote({commit}, note) {
      commit('ADD_NOTE', note);
    }
	}
})

export default store;