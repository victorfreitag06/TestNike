import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('1. Deve verificar se o componente foi criado', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const cards = fixture.componentInstance;
    expect(cards).toBeTruthy();
  });

  it(`should have the 'air' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('air');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, air');
  });
  
  
});
