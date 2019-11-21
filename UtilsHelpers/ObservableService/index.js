import { BehaviorSubject } from 'rxjs';

class ObservableService {
    constructor(value) {
        this.valueSubject = new BehaviorSubject(value);
    }


    getVal() {
        return this.valueSubject;
    }

    setVal(value) {
        this.valueSubject.next(value);
    }
}

export default ObservableService;