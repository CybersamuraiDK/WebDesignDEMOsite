using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebDesignDEMOsite.Controllers
{
    public class Page1 : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Page1/index.cshtml");
        }
    }
}
