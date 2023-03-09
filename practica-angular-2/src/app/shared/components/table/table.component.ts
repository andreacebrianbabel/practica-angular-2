import { RestService } from './../../../rest.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface DataElement {
  email: string,
  personal: string,
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
  displayedColumns: string[] = ['email', 'personal', 'name', 'country', 'community', 'birth', 'house'];

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
  allUsers: DataElement[] = [];
  specificUser: DataElement[] = [];


  public chargeTableData() {
    this.RestService.get('http://localhost:3000/users')
      .subscribe(response => {
        this.responseData = response;
        this.dataSource.data = this.responseData;

        this.allUsers = this.dataSource.data;

        var getUser = sessionStorage.getItem('usuario')

        if (!!this.allUsers) {
          this.specificUser = this.allUsers.filter(element => element.email === getUser);
          this.allUsers = this.specificUser;
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    console.log("1", this.dataSource)
    console.log("2", this.allUsers)

    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log("3", this.dataSource)

  }

  deleteInfo() {
    sessionStorage.removeItem('usuario')
    sessionStorage.clear();
  }
}