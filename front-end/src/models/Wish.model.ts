import {UniversityModel} from './University.model';

export class WishModel {

  constructor( id, universityId, university, semester, agreementCompleted
  ) {
      this.id = id;
      this.universityId = universityId;
      this.university = university;
      this.semester = semester;
      this.agreementCompleted = agreementCompleted;
  }
  public id: number;
  public universityId: number;
  public university?: UniversityModel;
  public semester: string;
  public agreementCompleted?: boolean;
}
