import { Component, Input, OnInit } from '@angular/core';
import { StoreInterface } from '../../../store/store';
import { Store } from '@ngrx/store';
import { selectLoadSpinner } from '../../../store/selectors/loadSpinner.selector';

@Component({
  selector: 'app-load-spinner',
  template: `
    <div *ngIf="isLoading" class="spinner-container">
      <div class="spinner"></div>
    </div>
  `,
  styles: [
    `
      .spinner-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .spinner {
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
  ]
})
export class LoadSpinnerComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private store: Store<StoreInterface>) {
    store.select(selectLoadSpinner)
      .subscribe(data => {
        console.log('data', data),
          this.isLoading = data
      }

      );
  }
  ngOnInit(): void {

  }

}