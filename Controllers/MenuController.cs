using System;
using Microsoft.AspNetCore.Mvc;

namespace ReactReduxNETCore.Controllers
{
    public class MenuController : Controller
    {

        public IActionResult Index(String date = null)
        {
            if (date != null)
            {
                ViewData["Date"] = date;

                return View();
            }
            else
            {
                return View("Error");
            }
        }
    }
}