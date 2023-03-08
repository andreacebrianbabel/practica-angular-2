import { RestService } from './../../../rest.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface DataElement {
  email: string,
  name: string,
  country: string,
  community: string,
  birth: string,
  house: string;
}

const ELEMENT_DATA: DataElement[] = [];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent { 
  displayedColumns: string[] = ['email', 'name', 'country', 'community', 'birth', 'house'];

  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.chargeTableData();
  }

  dataSource = new MatTableDataSource<DataElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  responseData: any;

  public chargeTableData() {
    this.RestService.get('http://localhost:3000/users')
      .subscribe(response => {
         this.responseData = response;
         this.dataSource.data = this.responseData;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}