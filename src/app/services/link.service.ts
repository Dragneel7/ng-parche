import {Injectable} from '@angular/core';
import {Link} from '../models/link';

const LINKS: Link[] = [
  {
    text: 'Link1',
    title: 'Link1',
    href: '#'
  },
  {
    text: 'Link2',
    title: 'Link2',
    href: '#'
  },
  {
    text: 'Link3',
    title: 'Link3',
    href: '#'
  }
];

@Injectable()
export class LinkService {
  constructor() {
  }

  getLinks(): Link[] {
    return LINKS;
  }
}
