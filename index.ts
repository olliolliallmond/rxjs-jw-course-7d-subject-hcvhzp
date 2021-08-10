import { fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton, 'click')
  .pipe(map(() => inputElement.value))
  .subscribe(() => value$.next(inputElement.value));

fromEvent(subscribeButton, 'click').subscribe(() => {
  console.log('new susbcription');
  value$.subscribe(value => console.log(value));
});
