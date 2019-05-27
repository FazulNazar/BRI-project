import {UniversityModel} from './University.model';
import {CourseModel} from './Course.model';

export class WishModel {

  constructor(id, universityId, university, semester, diploma, agreementCompleted, courses , studentId
  ) {
    this.id = id;
    this.universityId = universityId;
    this.university = university;
    this.semester = semester;
    this.diploma = diploma;
    this.agreementCompleted = agreementCompleted;
    this.courses = courses;
    this.studentID = studentId;
  }

  public id: number;
  public universityId: number;
  public university?: UniversityModel;
  public semester: string;
  public diploma: string;
  public agreementCompleted?: boolean;
  public courses: string;
  public studentID: number;
}
