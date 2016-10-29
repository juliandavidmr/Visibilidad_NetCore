using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Visibilidad.Controllers
{
  public class Menu : Controller
  {
    
    public string Welcome(string token) {
      return HtmlEncoder.Default.Encode($"El token es {token}");
    }

    public IActionResult Index() {

      return View();
    }
  }
}