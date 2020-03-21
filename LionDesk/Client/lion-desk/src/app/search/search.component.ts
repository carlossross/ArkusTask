import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  toSearch = '';

  data = [];

  count = 0;

  constructor(private service: RestService) { }

  ngOnInit(): void {
  }

  search() {
    this.service.getData(this.toSearch).subscribe(res => {
      this.data = res['data'];
      this.count = res['count'];
    });
  }

}
