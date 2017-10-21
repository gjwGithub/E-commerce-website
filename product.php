<?php 
require_once "pdo.php";

$id = $_GET['id'];
$stmt = $conn->prepare("SELECT * FROM Products WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();
$result = $stmt->fetchAll();
$title = $result[0]['title'];
$price = $result[0]['price'];
$description = $result[0]['description'];
$image = $result[0]['image'];
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <link rel="stylesheet" type="text/css" href="css/product.css">
    <script type="text/javascript" src="js/product.js"></script>

    <title id="title"><?php echo $title; ?></title>
</head>

<body>
    <iframe src="header.html" width="100%" height="60px" frameborder=false></iframe>
    <h1 style="margin:10px" id="head"><?php echo $title; ?></h1>
    <table style="margin:15px">
        <tr>
            <td style="width:55%">
                <img src=<?php echo '"'.$image.'"'; ?> alt="Cannot load image" style="width:320px;height:240px;" id="image" onmousemove="zoomIn(event)" onmouseout="zoomOut()">
                <div id="overlay" style=<?php echo "'".'display: inline-block;background-image:url("'.$image.'")'."'"; ?> onmousemove="zoomIn(event)"></div>

                <p id="price" class="price"><?php echo $price; ?></p>
                <p id="total" class="price"></p>
                <h3>Description: </h3>
                <p id="description"><?php echo $description; ?> </p>
            </td>
            <td>
                <iframe src="order.html" width="100%" frameborder=false id="iframepage" onLoad="iFrameHeight()"></iframe>
            </td>
        </tr>
    </table>

</body>

</html>