export class UniversityModel {
  constructor(
    public name: string,
    public city: string,
    public majors: string,
    public accord: string,
    public country: string,
    public id: number,
    public universityId: number,
    public exchangeStudents?: number,
    public note?: string,
  ) {}
}

