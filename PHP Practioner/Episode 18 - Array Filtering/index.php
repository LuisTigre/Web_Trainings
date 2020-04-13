<?php
class Post

{
    public $title;
    public $author;
    public $published;

    public function __construct($title, $author, $published)
    {
        $this->title = $title;
        $this->author = $author;
        $this->published = $published;

    }
}

$posts = [
    new Post('My First Post','LST',true),
    new Post('My Second Post','LST',true),
    new Post('My Third Post','LST',true),
    new Post('My Fouth  Post','CST',false),
];


$unpublishedPosts = array_filter($posts, function($post){
    return !$post->published;
});

$modified = array_map(function ($post) {
    return ['title' => $post->title];
},$posts);

$authors = array_column($posts, 'author','title');
var_dump($authors);

$posts = array_map(function ($post){
    return (array) $post;
}, $posts);
