# WEBAPI config:
config.EnableCors();

# Movies controller
[EnableCors("*","*","*")]
public class MoviesController : ApiController
{ ... }

# CORS nugget -- Microsoft.AspNet.WebApi.Cors

# also try this in web.config: 
inside system.webServer:
  httpProtocol
    customHeaders
      add name="Access-Control-Allow-Origin" value="*" 
    customHeaders
  httpProtocol
