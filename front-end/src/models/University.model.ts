// export class UniversityModel {
//   constructor(
//     public name: string,
//     public city: string,
//     public majors: string,
//     public accord: string,
//     public country: string,
//     public id: number,
//     public universityId: number,
//     public exchangeStudents?: number,
//     public note?: string,
//   ) {}
// }


export class UniversityModel {

  constructor( name = '', city = '', majors = '', agreements = '', country = '', id = 0, universityId = 1, exchangeStudents = 0, note = ''
  ) {
      this.name = name;
      this.city = city;
      this.majors = majors;
      this.agreements = agreements;
      this.country = country;
      this.id = id;
      this.universityId = universityId;
      this.exchangeStudents = exchangeStudents;
      this.note = note;
  }
    public name: string;
    public city: string;
    public majors: string;
    public agreements: string;
    public country: string;
    public id: number;
    public universityId: number;
    public exchangeStudents?: number;
    public note?: string;
}

