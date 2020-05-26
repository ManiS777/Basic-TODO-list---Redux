const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          action.payload,
        ]
        case 'REMOVE_TODO':
            let copy=[...state];
            copy.splice(action.payload,1);
            return copy;
      
      default:
        return state
    }
  }
  
  export default todos