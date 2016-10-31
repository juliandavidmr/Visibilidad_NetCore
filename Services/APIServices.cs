using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Visibilidad.Services
{

    public class APIServices
    {
        private string getUri(int index)
        {
            return basename + constants_api_get[index];
        }

        private readonly string basename = "http://191.102.85.226/semilleros/api/";
        private readonly string[] constants_api_get = new string[] {
          "evento/get_evento",                // 0
          "semillero/get_semillero"           // 1
        };
    }
}