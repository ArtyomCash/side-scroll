import {IHeaderMenu} from "./interface";

export const headerMenu: IHeaderMenu[] = [
  { name: 'About' },
  { name: 'Team', id: 'team', animationDuration: 1000, heightFromTop: 100 },
  { name: 'Projects', id: 'projects', animationDuration: 1000, heightFromTop: 10 },
  { name: 'Contacts', id: 'contacts', animationDuration: 1500, heightFromTop: 10 },
];