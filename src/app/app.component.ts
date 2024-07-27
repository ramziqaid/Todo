import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'todo-list-app';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  menuAnim() {
    const menu = new TimelineMax({ paused: true, reversed: true });

    menu.to("#topLine", .5, { rotation: '30', ease: "Expo.easeInOut" }, 0)
    menu.to("#midLine", .5, { opacity: '0', ease: "Expo.easeInOut" }, 0)
    menu.to("#botLine", .5, { rotation: '-30', ease: "Expo.easeInOut" }, 0)

    function menuClick() {
      return console.log('clicked');

      menu.reversed() ? menu.play() : menu.reverse();

    }
  }
}
