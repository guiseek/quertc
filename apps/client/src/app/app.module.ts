import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { SignalingChannel } from '@quertc/core'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { CallAvatarComponent } from './components'
import { SignalingFactory, SIGNALING_CLIENT } from './adapters'
import { PerfectNegotiationComponent, RestartIceComponent } from './containers'

@NgModule({
  declarations: [
    AppComponent,
    CallAvatarComponent,
    PerfectNegotiationComponent,
    RestartIceComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: RestartIceComponent,
        },
        {
          path: 'perfect-negotiation',
          component: PerfectNegotiationComponent,
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: SIGNALING_CLIENT,
      useValue: 'http://localhost:3000',
    },
    {
      provide: SignalingChannel,
      useFactory: SignalingFactory,
      deps: [SIGNALING_CLIENT],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
