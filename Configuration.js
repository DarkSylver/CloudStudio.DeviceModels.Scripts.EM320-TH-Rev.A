function getConfiguration(config) 
{ 
config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}
 
function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Humidity sensor", endpointType.humiditySensor);
  endpoints.addEndpoint("2", "Temperature sensor", endpointType.temperatureSensor);
 
}
 
function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}
 
function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}
 
function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}
