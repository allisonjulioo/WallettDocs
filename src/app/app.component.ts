import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  thisRouter: boolean;
  activeRouter;
  constructor(public router: Router, private route: ActivatedRoute) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (event.url == '/splash' || event.url == '/login' || event.url == '/register') {
          this.thisRouter = false;
          document.querySelector('title').innerHTML = `${event.url.toUpperCase().split('/').pop()} - Kuirin`
        }
        else {
          this.thisRouter = true;
          document.querySelector('title').innerHTML = `${event.url.toUpperCase().split('/').pop()} - Kuirin`
        }
      });
  }
  ngOnInit(): void {
  }
}
