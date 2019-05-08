import {Pipe, PipeTransform} from '@angular/core';
import {UniversityModel} from '../models/University.model';

@Pipe({
  name: 'AgreementFilter'
})

export class AgreementFilterPipe implements PipeTransform {

  transform(universityList: UniversityModel[], Agreement: string): UniversityModel[] {
    console.log('Test Pipe');
    if (!universityList || !Agreement) {
      return universityList;
    }

    return universityList.filter(university =>
      university.agreements.toLowerCase().includes(Agreement.toLowerCase()));
  }
}

