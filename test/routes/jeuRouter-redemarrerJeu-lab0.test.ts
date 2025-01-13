// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import supertest from 'supertest';
import app from '../../src/app';
import { JeuDeDes } from '../../src/core/jeuDeDes';
import { Joueur } from '../../src/core/joueur';

const request = supertest(app);


describe('redemarrerJeu.test.ts', () => {
  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  let joueur1 : Joueur
  let joueur2: Joueur

  beforeAll(() =>{
    joueur1 = new Joueur('Harvey')
    joueur2 = new Joueur('Mike')
  });

  it(`Devrait etre le premier test.`, async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ "message": "Success"});
  });

  it(`Devrait verifier qui ny aie plus de joueur apres le redemarrage.`, async () => {
   let jeuDeDes = new JeuDeDes();
   jeuDeDes.demarrerJeu(joueur1.nom)
   jeuDeDes.demarrerJeu(joueur2.nom)

   jeuDeDes.redemarrerJeu()
   expect(jeuDeDes['_joueurs'].size).toEqual(0);
  });
});