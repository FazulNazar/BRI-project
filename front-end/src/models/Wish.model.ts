import {UniversityModel} from './University.model';
import {CourseModel} from './Course.model';

export class WishModel {

  constructor( id, universityId, university, semester, diploma, agreementCompleted
  ) {
      this.id = id;
      this.universityId = universityId;
      this.university = university;
      this.semester = semester;
      this.diploma = diploma;
    //  this.courses = courses;
      this.agreementCompleted = agreementCompleted;
  }
  public id: number;
  public universityId: number;
  public university?: UniversityModel;
  public semester: string;
  public diploma: string;
  // public courses: Array<CourseModel>;
  public agreementCompleted?: boolean;
}
