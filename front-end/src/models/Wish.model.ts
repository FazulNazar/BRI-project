import {UniversityModel} from './University.model';

export class WishModel {

  constructor( id = 0, university = new UniversityModel(), semester = 0, agreementCompleted = false
  ) {
      this.id = id;
      this.university = university;
      this.semester = semester;
      this.agreementCompleted = agreementCompleted;
  }
  public id: number;
  public university: UniversityModel;
  public semester: number;
  public agreementCompleted?: boolean;
}
