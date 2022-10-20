using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentPlan.Models
{
    public abstract class PaymentPlanBase
    {

        public IPaymentCalculator PaymentCalculator
        {
            get;
            set;
        }

        public double Interest
        {
            get;
        }

        public Month StartMonth
        {
            get;
            set;
        }

        public PaymentPlanBase(double interest, IPaymentCalculator paymentCalculator, Month startMonth = Month.JANUARY)
        {
            Interest = interest;
            StartMonth = startMonth;
            PaymentCalculator = paymentCalculator;
        }

        public PaymentPlanBase(double interest) : this(interest, new DecreasingPaymentCalculator())
        {
        }

        public abstract IEnumerable<MonthPaymentPair> CalculatePayments(double loan, int paybackYears);
    }
}
