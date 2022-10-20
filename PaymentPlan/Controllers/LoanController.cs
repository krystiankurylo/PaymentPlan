using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PaymentPlan.Models;
using Microsoft.AspNetCore.Mvc;

namespace PaymentPlan.Controllers
{
    [Route("api/[controller]")]
    public class LoanController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<MonthPaymentPair> GetPayments(double loan, int years)
        {
            var paymentPlan = new MortgagePaymentPlan(0.035);
            paymentPlan.StartMonth = Months.GetCurrent().Next();
            return paymentPlan.CalculatePayments(loan, years);
        }
    }
}