// 获取角色列表！
import { getUser, getTotal } from "@/request/user"
export default {
  namespaced: true,
  state: {
    userlist: [],// 角色列表,
    page: 1,
    size: 1,
    total: 0
  },
  getters: {
    userlist: state => state.userlist,
    page: state => state.page,
    size: state => state.size,
    total: state => state.total,
  },
  mutations: {
    SET_LIST(state, data) {
      state.userlist = data;
    },
    SET_PAGE(state, data) {
      state.page = data;
    },
    SET_SIZE(state, data) {
      state.size = data;
    },
    SET_TOTAL(state, data) {
      state.total = data;
    },
  },
  actions: {
    // 请求角色列表的数据！
    async get_user_list({ commit, state, dispatch }) {
      let res = await getUser(state.page, state.size);
      commit('SET_LIST', res)
      dispatch('get_user_total')
    },
    async get_user_total({ commit }) {
      let res = await getTotal();
      commit('SET_TOTAL', res)
    },
    set_page({ commit, dispatch }, data) {
      commit('SET_PAGE', data)
      dispatch('get_user_list')
    },
    set_size({ commit, dispatch }, data) {
      commit('SET_SIZE', data)
      dispatch('get_user_list')
    },
  }
};
