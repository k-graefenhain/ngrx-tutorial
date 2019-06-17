import { Tutorial } from '../models/tutorial.model';
import { TutorialActions, ADD_TUTORIAL, REMOVE_TUTORIAL } from '../actions/tutorial.actions';

// const initialState: Tutorial = {
//     name: 'Initial Tutorial',
//     url: 'http://google.com'
// }
const initialState: Tutorial = {
    name: 'ngrx state management',
    url: 'https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions) {
    switch (action.type) {
        case ADD_TUTORIAL:
            return [...state, action.payload];
        case REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default: return state;
    }
}
