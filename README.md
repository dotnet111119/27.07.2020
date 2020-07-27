# WEBAPI config:
config.EnableCors();

# Movies controller
[EnableCors("*","*","*")]
public class MoviesController : ApiController
{ ... }

CORS nugget -- Microsoft.AspNet.WebApi.Cors
