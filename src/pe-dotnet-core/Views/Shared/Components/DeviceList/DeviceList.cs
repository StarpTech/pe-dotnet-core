using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pe_dotnet_core.Views.Shared.Components.DeviceList
{
    [ViewComponent(Name = "DeviceList")]
    public class DeviceListViewComponent : ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Device> devices = new List<Device>()
            {
                new Device()
                {
                    Name = "Smart Watch",
                    Description = "Sensoren: 4",
                    Location = "Russland"
                },
                new Device()
                {
                    Name = "Kühlschrank",
                    Description = "Sensoren: 2",
                    Location = "Deutschland"
                }
            };

            return View(devices);
        }
    }
}
