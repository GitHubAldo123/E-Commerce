<?php
session_start();
if (!isset($_SESSION['userid'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="mb-6 text-2xl font-bold text-center">Welcome</h2>
        <p class="text-center">Hello, <?php echo htmlspecialchars($_SESSION['username']); ?>!</p>
        <p class="mt-4 text-center"><a href="logout.php" class="text-blue-500">Logout</a></p>
    </div>
</body>
</html>
