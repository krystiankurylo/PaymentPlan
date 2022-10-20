import { Month } from './Month'

export class MonthPaymentPair {
  public payment: number;
  public month: Month;

  constructor(month: Month, payment: number) {
    this.month = month;
    this.payment = payment;
  }

  public getMonthName() :string {
    switch (this.month) {
      case Month.january: {
        return "January";
      }
      case Month.february: {
        return "February";
      }
      case Month.march: {
        return "March";
      }
      case Month.april: {
        return "April";
      }
      case Month.may: {
        return "May";
      }
      case Month.june: {
        return "June";
      }
      case Month.july: {
        return "July";
      }
      case Month.august: {
        return "August";
      }
      case Month.september: {
        return "September";
      }
      case Month.october: {
        return "October";
      }
      case Month.november: {
        return "November";
      }
      case Month.december: {
        return "December";
      }

      default: {
        return "Unknown";
      }
    } 
  }
}
