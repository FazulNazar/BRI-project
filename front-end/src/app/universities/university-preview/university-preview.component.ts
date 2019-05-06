import {Component, Input, OnInit} from '@angular/core';
import {UniversityModel} from '../../../models/University.model';

@Component({
  selector: 'app-university-preview',
  templateUrl: './university-preview.component.html',
  styleUrls: ['./university-preview.component.css']
})
export class UniversityPreviewComponent implements OnInit {
  @Input() university: UniversityModel;

  constructor() { }

  ngOnInit() {
  }

}
