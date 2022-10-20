import { Pipe, PipeTransform } from '@angular/core';
import { Month } from './counter/Month';

@Pipe({
  name: 'monthName'
})
export class MonthNamePipe implements PipeTransform {
  transform(month: Month): string {
    switch (month) {
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
