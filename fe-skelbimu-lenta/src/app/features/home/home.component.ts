import { Component } from '@angular/core'
import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

import { FlickService } from '../../code/services/flick.service'


@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss', 'home.component.ios.scss', 'home.component.android.scss']
})
export class HomeComponent {
  flicks = this.flickService.getFlicks()

  constructor(private flickService: FlickService, private routerExtensions: RouterExtensions) { }

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(['details', this.flicks[args.index].id])
  }

  covertUpperCase(str: string) {
    const words = str.split(" ");

    return words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  }

  handleSignIn() {
    console.log('sign in!')
  }

  handleSignUp() {
    console.log('sign up!')
  }
}
