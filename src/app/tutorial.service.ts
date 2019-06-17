import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TutorialService {

    public loadInitialData(): Observable<any> {
        const tutorials = [
            {name: 'Initial Tutorial', url: ''},
            {name: 'ngrx state management',
                url: 'https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management'},
            {name: 'ngrx Operators',
                url: 'https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables'}
        ];
        return of(tutorials);
    }
}
