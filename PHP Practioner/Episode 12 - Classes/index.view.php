<!DOCTYPE html>
<html>
<head>
	<title>Document</title>

	<style>
		header {
			background: #e3e3e3;
			padding: 2em;
			text-align: center;
		}
		
	</style>
</head>
<body>
	<ul>
		<?php foreach ($tasks as $task) : ?>
			<li>
				<?php if($task->completed) :?>
				<strike><?=$task->description; ?></strike>
				<?php else : ?>

			<?= $task->description; ?>

			<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ul>
</body>
</html>