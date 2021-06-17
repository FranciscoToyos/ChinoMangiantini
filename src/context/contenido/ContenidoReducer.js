import { 
    GET_CONTENIDO_PODCAST, 
    GET_CONTENIDO_VIDEOCLIP, 
    GET_CONTENIDO_DIRECTING, 
    GET_CONTENIDO_CINEMA,
    GET_CONTENIDO_ALL,
    DELETE_CONTENIDO,
    CREAR_CONTENIDO,
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
        case GET_CONTENIDO_ALL:
            return{
                ...state,
                contenido:payload
            }
        case DELETE_CONTENIDO:
            return {
                // ...state,
                contenido:state.contenido.filter(cont => cont.id  !== action.payload),
                
            }
        case CREAR_CONTENIDO:
            return {
                ...state,
                contenido:([...state.contenido, action.payload.contenido])
            }
        default:
            return state
    }
}