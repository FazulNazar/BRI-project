import {UniversityModel} from './University.model';

export class WishModel {

  constructor(
    public university: UniversityModel,
    public agreementCompleted: boolean,
    public semester: number,
  ) {
    // this.id = id;
    // this.university = university;
    // this.country = country;
    // this.city = city;
    // this.full = full;
    // this.semester = semester;
  }
}
