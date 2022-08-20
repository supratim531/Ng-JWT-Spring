import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _title: Title,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  title = 'JWT Authentication | Angular';

  ngOnInit(): void {
    this.changeBrowserTitle();
    // this._title.setTitle(this.title);
  }

  changeBrowserTitle(): void {
    this._router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          let child = this._activatedRoute.firstChild;
          while (child?.firstChild)
            child = child?.firstChild;
          this._title.setTitle(child?.snapshot.data['title']);
          break;
        default:
          break;
      }
    });
  }

}
