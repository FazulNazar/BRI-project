import {Pipe, PipeTransform} from '@angular/core';
import {UniversityModel} from '../models/University.model';

@Pipe({
  name: 'CountryFilter'
})

export class CountryFilterPipe implements PipeTransform {

  transform(universityList: UniversityModel[], Country: string): UniversityModel[] {
    console.log('Test Pipe');
    if (!universityList || !Country) {
      return universityList;
    }

    return universityList.filter(university =>
      university.country.toLowerCase().includes(Country.toLowerCase()));
  }
}

