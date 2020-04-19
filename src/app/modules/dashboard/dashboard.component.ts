import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDrawer } from '@angular/material/sidenav';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

export interface CampainFile {
  id: number;
  position: number;
  name: string;
  size: string;
  type: string;
  lastModified: number;
}

const DATA: CampainFile[] = [
  {
    id: 0,
    position: 1,
    name: 'resize-winter.jpg',
    size: '63.36 KB',
    type: 'image-jpeg',
    lastModified: Date.now(),
  },
  {
    id: 1,
    position: 2,
    name: 'winter.jpg',
    size: '1.08 MB',
    type: 'image-jpeg',
    lastModified: Date.now(),
  },
  {
    id: 2,
    position: 3,
    name: 'new-campain',
    size: '3.36 KB',
    type: 'image-jpeg',
    lastModified: Date.now(),
  },
  {
    id: 3,
    position: 4,
    name: 'summer-campain.jpg',
    size: '6.58 KB',
    type: 'image-jpeg',
    lastModified: Date.now(),
  },
  {
    id: 4,
    position: 5,
    name: 'resize-winter.jpg',
    size: '5.25 MG',
    type: 'image-jpeg',
    lastModified: Date.now(),
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // displayedColumns: string[] = ['select', 'name', 'size', 'type', 'lastModified', 'actions'];
  displayedColumns: string[] = ['name', 'size', 'type', 'lastModified', 'actions'];
  dataSource = new MatTableDataSource<CampainFile>(DATA);
  selection = new SelectionModel<CampainFile>(true, []);
  selectedCampain: CampainFile;

  @ViewChild('drawer') quickViewDrawer: MatDrawer;

  // drawer.toggle() toggles sidebar
  constructor(private router: Router) {}

  ngOnInit(): void {}

  quickView(campain: CampainFile) {
    if (!this.selectedCampain) {
      this.selectedCampain = campain;
      return this.quickViewDrawer.open();
    }

    if (this.selectedCampain.name === campain.name) {
      this.quickViewDrawer.toggle();
    }

    if (this.selectedCampain.name !== campain.name) {
      this.selectedCampain = campain;
      this.quickViewDrawer.open();
    }

    console.log('quickView of ', campain);
  }

  edit(campain: CampainFile) {
    this.router.navigate(['/campain/detail']); // make sure to pass campainId
  }

  delete(campain: CampainFile) {
    alert('Logic to delete campain! in progres...');
  }

  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: CampainFile): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
}
