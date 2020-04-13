<?php

require 'core/Router.php';
require 'core/database/Connection.php';
require 'core/database/QueryBuilder.php';
$config = require 'config.php';


return new QueryBuilder(
    Connection::make($config['database'])
);