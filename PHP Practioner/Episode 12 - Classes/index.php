<?php 

require 'functions.php';

class Task {
    public $description;
    public $completed = false;

    public function __construct($description)
    {
        $this->description = $description;
    }

    function complete(){
        $this->completed = true;
    } 

    function isComplete(){
        return $task->completed;
    }
}


$tasks = [
    $task = new Task('Start learning Javascript'),
    $task = new Task('Start learning php'),
    $task = new Task('Start learning CSS')

];

$tasks[0]->complete();

require 'index.view.php';