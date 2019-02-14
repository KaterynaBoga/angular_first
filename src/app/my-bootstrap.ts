import { Observable } from "rxjs";

export class MyBootstrap {
    constructor() {

    }

    public bootstrapApp(): Observable<any> {
        return new Observable (observer => {
            setTimeout(() => {
                observer.next('App bootstrap');
            }, 5000);
        })
    }
}