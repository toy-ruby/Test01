﻿using System;
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
        public int max
        {
            set; get;
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public int GetRandomNumber(int max)
        {
            int ret = 0;
            Random r = new Random(max);
            ret = r.Next(100);
            return ret;
        }
    }
}
