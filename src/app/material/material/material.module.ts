import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const materials=[
  MatButtonModule,
  MatTableModule,
  MatTableDataSource,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [materials],
  exports:[materials]

})
export class MaterialModule { }
