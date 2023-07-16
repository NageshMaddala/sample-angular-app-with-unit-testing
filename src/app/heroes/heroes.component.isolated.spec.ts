import { of } from "rxjs/internal/observable/of";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROS;
  let mockHeroService;

  beforeEach(() => {
    HEROS = [
      { id: 1, name: 'SpiderMan', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {
    it('should remove the indicated here from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;
      component.delete(HEROS[2]);
      expect(component.heroes.length).toBe(2);
    })

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;
      component.delete(HEROS[2]);

      // to make the method is called
      expect(mockHeroService.deleteHero).toHaveBeenCalled();

      // to make the method is called with correct parameter
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);



    })
  })
})
