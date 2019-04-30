export class WishModel {

  constructor(id = '', university = '', country = '', city = '', full = false , semester = 0) {
    this.id = id;
    this.university = university;
    this.country = country;
    this.city = city;
    this.full = full;
    this.semester = semester;
  }

  id: string;
  university: string;
  country: string;
  city: string;
  full: boolean;
  semester: number;
}
