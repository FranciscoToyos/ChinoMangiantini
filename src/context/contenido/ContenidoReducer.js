import { 
    GET_CONTENIDO_PODCAST, 
    GET_CONTENIDO_VIDEOCLIP, 
    GET_CONTENIDO_DIRECTING, 
    GET_CONTENIDO_CINEMA 
} from '../types'

export default (state, action) => {
    const {payload, type} = action

    switch (type) {
        case GET_CONTENIDO_PODCAST :
            return{
                ...state,
                contenido: payload
            }
        case GET_CONTENIDO_VIDEOCLIP :
            return {
                ...state,
                contenido: payload
            }
        case GET_CONTENIDO_DIRECTING :
            return {
                ...state,
                contenido: payload
            }
        case GET_CONTENIDO_CINEMA:
            return {
                ...state,
                contenido:payload
            }
        default:
            
    }
}