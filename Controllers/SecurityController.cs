using Microsoft.AspNetCore.Mvc;

namespace ReactReduxNETCore.Controllers
{
  
  public class Security : Controller
  {

    private readonly string URL = "http://localhost:5000/Menu/Security?token=3123";

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