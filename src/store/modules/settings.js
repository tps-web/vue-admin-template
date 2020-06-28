import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo, tagsView } = defaultSettings

const state = {
    showSettings: showSettings,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    // themecolor: '#409EFF'
    themecolor: '#304156',
    tagsView: tagsView
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    },
    change(state, val) {
        // console.log('mutations' + val)
        state.themecolor = val
    }
}

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    },
    changColor({ commit }, val) {
        // console.log('actions' + val)
        commit('change', val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}