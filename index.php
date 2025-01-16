<!DOCTYPE html>
<html>
<?php include("head.php"); ?>
<body>
    <script>
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('service-worker.js')
        // }
    </script>
    <div id="container">
        <header></header>
        <main>
            <?php include("header.php"); ?>
            <?php include("loggedin.php"); ?>
            <?php include("nav.php"); ?>
        </main>
        <footer></footer>
    </div>
</body>
</html>