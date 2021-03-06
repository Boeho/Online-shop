import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // onOpenNav(event: Event) { 
    //    var navigation = document.getElementById("navigation");
    //   navigation.style.display = navigation.style.left == '992px' ? '-992px' : '992px'; 
    // } 

    mainNavDisplayNone = 'none';
  
    dropNavBtn(){
      this.mainNavDisplayNone = this.mainNavDisplayNone == 'block' ? 'none' : 'block';
    }

  constructor(private breakpointObserver: BreakpointObserver) {}
  showFiller = false;
}
