export default function authorsReducer(state = { authors: [] }, action) {
    switch (action.type) {
        case "ADD_AUTHOR":
            return {...state, authors: action.author};
          case "GET_AUTHORS":
              return {...state, authors: action.authors};
        default:
            return state;
    }
  }














