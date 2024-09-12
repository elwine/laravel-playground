<?php

namespace App\Http\Controllers;

use OpenApi\Attributes\Info;
use OpenApi\Attributes\SecurityScheme;
use OpenApi\Attributes\Server;

#[
Info(version: "1.0.0", description: "Schmev's documentation", title: "I am the bone of my sword"),
Server(url: "http://localhost:8000/api", description: "local server"),
SecurityScheme(securityScheme: "bearerAuth", type: "http", name: "Authorization", in: 'header', scheme: "bearer")
 ]
abstract class Controller
{
    //
}
