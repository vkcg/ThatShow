export default function(state=null, action) {
    switch(action.type) {
        case "SHOW_SELECTED":
            return action.payload
            break;
    }
    return state;
}