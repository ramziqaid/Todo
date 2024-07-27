import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementCustome, reset } from '../../../store/actions/counter.actions';
import { StoreInterface } from '../../../store/store';
import { selectCounterValue } from '../../../store/selectors/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count: number = 0;
  countt$: Observable<number>;
  constructor(private store: Store<StoreInterface>) {
    store.select(selectCounterValue)
      .subscribe(count => this.count = count);
    this.countt$ = store.select(selectCounterValue);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(incrementCustome({ data: 2 }));
  }

  ngOnInit() {
  }

}
