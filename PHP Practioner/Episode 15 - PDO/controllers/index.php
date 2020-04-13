<?php

$tasks = $database->selectAll('todo');

require 'views/index.view.php';

