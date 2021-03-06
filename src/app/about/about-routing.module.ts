import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {
      path: '',
	  component: AboutComponent,
	  children: [
			{
				path: '',
				redirectTo: 'about-sam'
			},
			{
			path: 'disclaimers',
			loadChildren: './disclaimers/disclaimers.module#DisclaimersModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'partners',
			loadChildren: './partners/partners.module#PartnersModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'fsd',
			loadChildren: './fsd/fsd.module#FsdModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'release-notes',
			loadChildren: './release-notes/release-notes.module#ReleaseNotesModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'about-sam',
			loadChildren: './this-site/this-site.module#ThisSiteModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'community',
			loadChildren: './community/community.module#CommunityModule',
			data: {
			  id: "home"
			}
			},
			{
			path: 'policies',
			loadChildren: './policies/policies.module#PoliciesModule',
			data: {
			  id: "home"
			}
			}
  	  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
