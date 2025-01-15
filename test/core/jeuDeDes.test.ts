import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDesTest', () => {
  let jdd: JeuDeDes;
  beforeEach(async () => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, async () => {
    expect(jdd.joueurs).toEqual("[]")
  })

  it('devrait retourner une valeur entre 3 et 36', () => {
    for (let i = 0; i < 200; i++) {
      expect(jdd.brasser()).toBeWithin(3, 36);
    }
  })

  it('devrait retourner finalement toutes les valeurs entre 2 et 12', () => {
    const resultats = new Set();
    for (let i = 0; i < 200; i++) {
      resultats.add(jdd.brasser())
    }
    expect(resultats.size).toBe(15);
    for (let i = 1; i < 16; i++) {
      expect(resultats.has(i + 1)).toBeTrue();
    }
    // cas particuliers
    expect(resultats.has(1)).toBeFalsy();
    expect(resultats.has(37)).toBeFalsy();
  })

});
