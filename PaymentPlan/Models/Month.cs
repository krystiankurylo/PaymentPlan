using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public enum Month
    {
        JANUARY = 1,
        FEBRUARY,
        MARCH,
        APRIL,
        MAY,
        JUNE,
        JULY,
        AUGUST,
        SEPTEMBER,
        OCTOBER,
        NOVEMBER,
        DECEMBER
    }

    static class MonthExtension
    {
        public static Month Next(this Month src)
        {
            Month[] Arr = (Month[])Enum.GetValues(src.GetType());
            int j = Array.IndexOf<Month>(Arr, src) + 1;
            return (Arr.Length == j) ? Arr[0] : Arr[j];
        }
    }

    public static class Months
    {
        public static Month GetCurrent()
        {
            return (Month)DateTime.Now.Month;
        }
    }
}
