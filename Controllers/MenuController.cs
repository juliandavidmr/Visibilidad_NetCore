using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Visibilidad.Controllers
{
  public class Menu : Controller
  {
    
    [HttpGet]
    public string Security(string token = null) {
      if (token != null) {
        if (token.Trim().Length > 10) {
          return HtmlEncoder.Default.Encode($"El token es {token}");          
        } else {
          return HtmlEncoder.Default.Encode("El token es parece estar incorrecto. La longitud no supera los 10 caracteres.");
        }
      } else {
        return HtmlEncoder.Default.Encode($"Sin token {token}"); 
      }
    }

    public IActionResult Index() {

      return View();
    }
  }
}