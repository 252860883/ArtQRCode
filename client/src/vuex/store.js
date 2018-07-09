import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutation';
import actions from './action';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
})