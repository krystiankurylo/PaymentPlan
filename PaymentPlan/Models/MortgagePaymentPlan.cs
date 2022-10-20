using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public class MortgagePaymentPlan : PaymentPlanBase
    {
        public MortgagePaymentPlan(double interest) : base(interest, new DecreasingPaymentCalculator())
        {

        }

        public override IEnumerable<MonthPaymentPair> CalculatePayments(double loan, int years)
        {
            var months = years * 12;
            var baseInstallment = loan / months;
            var currentMonth = StartMonth;
            var payments = PaymentCalculator.CalculatePayments(loan, years, Interest);

            foreach(var payment in payments)
            {
                yield return new MonthPaymentPair(currentMonth, payment);
                currentMonth = currentMonth.Next();
            }
        }
    }
}
