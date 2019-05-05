export class User {
  constructor(
    public mail: string,
    public mdp: string,
    public nom: string,
    public prenom: string,
    public birthday: string,
    public sexe: string,
    public nationalite: string,
    public adresse: string,
    public codePostal: string,
    public ville: string,
    public tel: string,
    public numetudiant: string,
    public filiere: string,
  ) {}
}
