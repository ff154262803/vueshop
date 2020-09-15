// 获取角色列表！
import { getUser } from "@/request/user"
export default {
  namespaced: true,
  state: {
    userlist: [],
    page: 1,
    size: 5// 角色列表
  },
  getters: {
    userlist: state => state.userlist
  },
  mutations: {
    SET_LIST(state, data) {
      state.userlist = data;
    }
  },
  actions: {
    // 请求角色列表的数据！
    async get_role_list({ commit, state }) {
      let res = await getUser(state.page, state.size);
      commit('SET_LIST', res)
    }
  }
};
