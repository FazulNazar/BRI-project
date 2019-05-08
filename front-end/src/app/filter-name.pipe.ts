import {Pipe, PipeTransform} from '@angular/core';
import {UniversityModel} from '../models/University.model';

@Pipe({
  name: 'NameFilter'
})

export class NameFilterPipe implements PipeTransform {

  transform(universityList: UniversityModel[], Name: string): UniversityModel[] {
    console.log('Test Pipe');
    if (!universityList || !Name) {
      return universityList;
    }

    return universityList.filter(university =>
      university.name.toLowerCase().includes(Name.toLowerCase()));
  }
}

