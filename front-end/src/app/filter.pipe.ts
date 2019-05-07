import {Pipe, PipeTransform} from '@angular/core';
import {UniversityModel} from '../models/University.model';

@Pipe({
  name: 'CountryFilter'
})

export class CountryFilterPipe implements PipeTransform {

  transform(universityList: UniversityModel[], searchTerm: string): UniversityModel[] {
    console.log('Test Pipe');
    if (!universityList || !searchTerm) {
      return universityList;
    }

    return universityList.filter(university =>
      university.country.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
