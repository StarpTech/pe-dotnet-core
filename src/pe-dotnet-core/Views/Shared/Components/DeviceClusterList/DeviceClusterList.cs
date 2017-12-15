using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pe_dotnet_core.Views.Shared.Components.DeviceList
{
    [ViewComponent(Name = "DeviceClusterList")]
    public class DeviceClusterListViewComponent : ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<DeviceCluster> devices = new List<DeviceCluster>()
            {
                new DeviceCluster()
                {
                    Name = "Ferienwohnung",
                    Description = "Sensoren: 14",
                    Location = "Spanien"
                }
            };

            return View(devices);
        }
    }
}
