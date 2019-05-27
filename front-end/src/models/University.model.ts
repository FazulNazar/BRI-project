export class UniversityModel {

  constructor( name, city, majors, agreements, country, id, universityId, exchangeStudents, note, website, image, description
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
      this.website = website;
      this.image = image;
      this.description = description;
  }
    public name: string;
    public city: string;
    public majors: string;
    public agreements: string;
    public country: string;
    public id: number;
    public universityId?: number;
    public exchangeStudents?: number;
    public note?: string;
    public website?: string;
    public image?: string;
    public description?: string;
}

