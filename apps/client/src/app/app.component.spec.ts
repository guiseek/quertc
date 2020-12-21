import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SignalingChannel } from '@quertc/core';
import { SignalingFactory, SIGNALING_CLIENT } from './signaling.adapter';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
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
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to client-app!'
    );
  });
});
