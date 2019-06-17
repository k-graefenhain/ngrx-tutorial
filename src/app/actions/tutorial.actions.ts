import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] ADD';
export const REMOVE_TUTORIAL = '[TUTORIAL] REMOVE';
export const LOAD_TUTORIALS = '[TUTORIAL] LOAD';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) {}
}

export class LoadTutorials implements Action {
    readonly type = LOAD_TUTORIALS;
}

export type TutorialActions = AddTutorial | RemoveTutorial | LoadTutorials;
