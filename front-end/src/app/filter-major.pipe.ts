import {Pipe, PipeTransform} from '@angular/core';
import {UniversityModel} from '../models/University.model';

@Pipe({
  name: 'MajorFilter'
})

export class MajorFilterPipe implements PipeTransform {

  transform(universityList: UniversityModel[], Major: string): UniversityModel[] {
    console.log('Test Pipe');
    if (!universityList || !Major) {
      return universityList;
    }

    return universityList.filter(university =>
      university.majors.toLowerCase().includes(Major.toLowerCase()));
  }
}

