export const selectShow= (show) => {
    console.log('Show Clicked! ', show.title);
    return{
        type: "SHOW_SELECTED",
        payload: show
    }
}