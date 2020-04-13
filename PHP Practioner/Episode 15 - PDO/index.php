<?php 
require 'controllers/functions.php';
    
$database = require 'core/bootstrap.php';

$router = new Router();

require('routes.php');
$uri = trim($_SERVER['REQUEST_URI'],'/');
// dd($uri);

require $router->direct('about');



// <?php 
// require 'controllers/functions.php';
    
// $database = require 'core/bootstrap.php';

// $uri = trim($_SERVER['REQUEST_URI'],'/');


// $router = Router::load('routes.php');
// dd($router);
// $router->direct($uri);