using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public class DecreasingPaymentCalculator : IPaymentCalculator
    {
        public IEnumerable<double> CalculatePayments(double loan, int years, double interest)
        {
            var months = years * 12;
            var baseInstallment = loan / months;

            for (int i = 0; i < months; i++)
            {
                yield return CalculateMonthlyPayment(loan, months, i, interest);             
            }
        }

        private double CalculateMonthlyPayment(double loan, int months, int monthNumber, double interest)
        {
            var baseInstallment = loan / months;
            var monthsDifference = months - monthNumber;
            var partialInterest = interest / 12.0;

            return Math.Round(baseInstallment * (1 + (monthsDifference * partialInterest)), 2, MidpointRounding.AwayFromZero);
        }
    }
}
