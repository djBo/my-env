import { Component, OnInit, ViewChild } from '@angular/core';
import { Environment } from '../environment';
import { EnvironmentDetailComponent } from '../environment-detail/environment-detail.component';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material';

import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['id', 'version', 'status'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  envs: Environment[];
  currentEnv: Environment;

  constructor(private environmentService: EnvironmentService, public dialog: MatDialog) { }

  ngOnInit() {
    //this.displayedColumns = this.columnNames.map(x => x.id);
    this.getEnvironments();
  }

  onSelect(env: Environment) {
    this.currentEnv = env;
    const dialogRef = this.dialog.open(EnvironmentDetailComponent, this.currentEnv);
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
    });
  }

  getEnvironments(): void {
    this.environmentService.getEnvironments()
      .subscribe(envs => {
        this.envs = envs;
        this.dataSource = new MatTableDataSource(this.envs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
