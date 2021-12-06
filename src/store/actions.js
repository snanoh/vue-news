import { 
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fecthUserInfo} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS( { commit } ){
        fetchJobsList()
        .then(( { data } ) => commit('SET_JOBS', data) )
        .catch(error => console.log(error))
    },
    FETCH_ASK({ commit }){
        fetchAskList()
        .then(({ data }) => commit('SET_ASK', data))
        .catch(error => console.log(error))
    },
    FETCH_USER({ commit }, name){
        fecthUserInfo(name)
        .then(({ data }) => commit('SET_USER', data))
        .catch(error => console.log(error))
    }
}