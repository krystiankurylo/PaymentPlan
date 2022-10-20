using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public class MonthPaymentPair
    {
        public Month Month { get; }
        public double Payment { get; }

        public MonthPaymentPair(Month month, double payment)
        {
            Month = month;
            Payment = payment;
        }
    }
}
