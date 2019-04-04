import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
    cards: {
		 onHold: [],
     inProgress: [],
     needsReview: [],
     approved: []
   }
	},
	mutations: {
    setCard (state, { value, key }) {
      state.cards[key] = value;

      const newItem = JSON.stringify(state.cards);
      localStorage.setItem('cards', newItem);
    },
    getCards (state) {
      if(localStorage.getItem('cards')) {
        const cards = JSON.parse(localStorage.getItem('cards'));
        state.cards = cards;
      }
    },
    ADD_CARD (state, { newCard, key}) {
      state.cards[key].push(newCard);

      const newItem = JSON.stringify(state.cards);
      localStorage.setItem('cards', newItem);
    },
    DELETE_CARD (state, data) {
      state.cards[data.name] = state.cards[data.name].filter(item => item.id !== data.id)
      
      const newItem = JSON.stringify(state.cards);
      localStorage.setItem('cards', newItem);
    }
	},
	actions: {
    addCard({commit}, card) {
      commit('ADD_CARD', card)
    },
    deleteCard({commit}, data) {
      commit('DELETE_CARD', data)
    }
	}
})

export default store;