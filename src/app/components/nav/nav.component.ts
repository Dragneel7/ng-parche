import {Component, OnInit} from '@angular/core';
import {Link} from '../../models/link';
import {LinkService} from '../../services/link.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [LinkService]
})

export class NavComponent implements OnInit {
  links: Link[];

  constructor(private linkService: LinkService) {
  }

  getLinks(): void {
    this.links = this.linkService.getLinks();
  }

  ngOnInit(): void {
    this.getLinks();
  }
}
