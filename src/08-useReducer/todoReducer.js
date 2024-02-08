export const todoReducer = ( initialState = [], action ) =>{
    
    switch (action.type) {
        case '[TODO]':
            return [ ...initialState, action.payload ]           
            
        default:
            return initialState;           
                
    }

}