using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public interface IPaymentCalculator
    {
        IEnumerable<double> CalculatePayments(double loan, int years, double interest);
    }
}
