export class WishModel {

  constructor(id = '', university = '', country = '', city = '', semester = 0) {
    this.id = id;
    this.university = university;
    this.country = country;
    this.city = city;
    this.semester = semester;
  }

  id: string;
  university: string;
  country: string;
  city: string;
  semester: number;
}
