using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public enum Month
    {
        January = 1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }

    static class MonthExtension
    {
        public static Month Next(this Month src)
        {
            var months = (Month[])Enum.GetValues(src.GetType());
            var monthIndex = Array.IndexOf(months, src) + 1;
            return (months.Length == monthIndex) ? months[0] : months[monthIndex];
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
