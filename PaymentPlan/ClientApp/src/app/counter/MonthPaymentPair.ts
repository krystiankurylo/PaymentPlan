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
        return "JANUARY";
      }
      case Month.february: {
        return "FEBRUARY";
      }
      case Month.march: {
        return "MARCH";
      }
      case Month.april: {
        return "APRIL";
      }
      case Month.may: {
        return "MAY";
      }
      case Month.june: {
        return "JUNE";
      }
      case Month.july: {
        return "JULY";
      }
      case Month.august: {
        return "AUGUST";
      }
      case Month.september: {
        return "SEPTEMBER";
      }
      case Month.october: {
        return "OCTOBER";
      }
      case Month.november: {
        return "NOVEMBER";
      }
      case Month.december: {
        return "DECEMBER";
      }

      default: {
        return "NONE";
      }
    } 
  }
}
