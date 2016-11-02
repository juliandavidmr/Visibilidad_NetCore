using Microsoft.AspNetCore.Mvc;

namespace ReactReduxNETCore.Controllers
{
  
  public class Security : Controller
  {

    private readonly string URL = "/Menu/Security?token=3123";

    /**
      El login de chaira debe redirigir a este metodo
    */
    public string Capture(string token = null) {
      if (token != null)
      {
        Response.Redirect(URL);
        return "";
      } else {
        return "Sin token";
      }
    }
  }
}