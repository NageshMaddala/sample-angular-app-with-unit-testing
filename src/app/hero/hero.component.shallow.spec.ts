import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Herocomponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  // testbed allows us to test component and its associated template
  beforeEach(() => {
    // configuration
    TestBed.configureTestingModule({
      // this is what we are testing
      declarations: [HeroComponent],
      // don't try to validate the template.. routerlink issue showed up on console would away
      schemas: [NO_ERRORS_SCHEMA]
    });

    // get the instance of component under test
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1, name: 'SuperDude', strength: 3
    };
    fixture.autoDetectChanges();
    expect(fixture.componentInstance.hero.name).toBe('SuperDude');
  });

  it('should render the hero name in an anchor tag using dom element', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    // below line refreshes UI ie it updates the bindings in the template
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
  });

  it('should render the hero name in an anchor tag using debug/wrapper element', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    // below line refreshes UI ie it updates the bindings in the template
    fixture.detectChanges();

    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('SuperDude');
  });

})
