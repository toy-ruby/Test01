using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace Test01
{
    /// <summary>
    /// Summary description for randomnumber
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class randomnumber : System.Web.Services.WebService
    {
        public int Max
        {
            set; get;
        }

        [WebMethod]
        public int GetRandomNumber()
        {
            int ret = 0;
            Max = 100;
            Random r = new Random();
            ret = r.Next(Max);
            return ret;
        }

        [WebMethod]
        public int GetRandomNumberRng(int max)
        {
            int ret = 0;
            Random r = new Random();
            ret = r.Next(max);
            return ret;
        }
    }
}
