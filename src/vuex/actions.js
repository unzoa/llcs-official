import api from '../api/api.js'

export const increment = ({ commit },value) =>{
	// let hahav = api.haha(value)
	// console.log( value )
	
	commit('increment',value)
}
export const decrement = ({ commit }) => {
 	commit('decrement')
}

export const navActA = ({commit},val) => {
	commit('navActA',val)
}