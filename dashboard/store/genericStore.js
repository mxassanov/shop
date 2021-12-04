import GenericService from '~/services/generic.service'

const store = ({ name, url }) => {
  const genericService = new GenericService({ url, name })

  return {
    state: () => ({
      item: {},
      items: [],
      itemErr: null,
    }),
    actions: {
      async fetchAll({ commit }) {
        try {
          const items = await genericService.fetchAll()
          commit('fetchItemsSuccess', items)
        } catch (err) {
          commit('actionErr', {
            errType: `${name} fetchAll store failed`,
            err,
          })
        }
      },
      async fetchOne({ commit }, id) {
        try {
          const item = await genericService.fetchOne(id)
          commit('fetchItemSuccess', item)
        } catch (err) {
          commit('actionErr', {
            errType: `${name} fetchOne store failed`,
            err,
          })
        }
      },
      async create({ commit }, payload) {
        try {
          const item = await genericService.create(payload)
          commit('createSuccess', item)
        } catch (err) {
          commit('actionErr', {
            errType: `${name} create store failed`,
            err,
          })
        }
      },
      async update({ commit }, { payload, id }) {
        try {
          const item = await genericService.update(id, payload)
          commit('updateSuccess', item)
        } catch (err) {
          commit('actionErr', {
            errType: `${name} update store failed`,
            err,
          })
        }
      },
      async delete({ commit }, id) {
        try {
          const item = await genericService.delete(id)
          commit('deleteItemSuccess', item)
        } catch (err) {
          commit('actionErr', {
            errType: `${name} delete store failed`,
            err,
          })
        }
      },
    },
    mutations: {
      fetchItemSuccess(state, item) {
        state.item = item
      },
      fetchItemsSuccess(state, item) {
        state.items = item
      },
      createSuccess(state, item) {
        state.item = item
      },
      updateSuccess(state, item) {
        state.item = item
      },
      deleteItemSuccess() {},
      actionErr(state, err) {
        state.itemErr = err
      },
    },
    getters: {
      item: state => state.item,
      items: state => state.items,
      itemErr: state => state.itemErr,
    },
  }
}

export default store
