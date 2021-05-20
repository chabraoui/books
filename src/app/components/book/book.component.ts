import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { Books } from 'src/app/models/books';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  listBooks;
  displayedColumns: string[] = ['id', 'bookName', 'price', 'category','author'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(res=>{
      this.listBooks = new MatTableDataSource<Books[]>(res);
      this.listBooks.paginator=this.paginator;
    })
  }

}
