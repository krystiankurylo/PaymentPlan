import { Component, Inject, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MonthPaymentPair } from './MonthPaymentPair';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule
    ]
})

export class CounterComponent {
  public loan = 400000;
  public years = 5;
  public maxYears = 10;
  public minYears = 1;
  public payments: MonthPaymentPair[];
  public dataSource: MonthPaymentPair[];
  private httpClient: HttpClient;
  private baseUrl: string;

  public dataLength: number;
  public pageSize = 10;
  public pageOptions = [1, 2, 5, 10];
  public displayedColumns: string[] = ['month', 'payment'];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  }

  public calculatePayments() {
    let params = new HttpParams().append('loan', this.loan.toString()).append('years', this.years.toString());
    let url = this.baseUrl + 'api/Loan/GetPayments';
    this.httpClient.get<MonthPaymentPair[]>(url, { params: params }).subscribe(result => {
      this.payments = result;
      this.dataLength = this.payments.length;
      console.log(this.payments);
      this.loadData(0, this.pageSize);
    }, error => console.error(error));
  }

  private loadData(pageIndex, pageSize) {
    let paymentsSlice = this.payments.slice(pageIndex, pageIndex + pageSize);
    this.dataSource = paymentsSlice;
  }

  public onPageChange(e) {
    const pageIndex = e.pageIndex;
    const pageSize = e.pageSize;
    this.loadData(pageIndex, pageSize);
  }

  public sliderChanged(e) {
    this.years = e.value;
  }
}
