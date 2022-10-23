import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { FlickModel } from '../../code/models/flick.model'
import { FlickService } from '../../code/services/flick.service'

@Component({
  moduleId: module.id,
  selector: 'ns-details',
  templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit {
  flick: FlickModel | undefined = undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private flickService: FlickService
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id
    if (id) {
      this.flick = this.flickService.getFlickById(id)
    }
  }
}
