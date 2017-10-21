<?php 
include $_SERVER['DOCUMENT_ROOT'].'/../dbconfig.php';

$hostname = DB_HOST; 
$username = DB_USER; 
$password = DB_PASSWORD; 
$dbname = DB_DATABASE; 

try
{ 
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password); 

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    //echo "Connected successfully"; 
} 
catch(PDOException $e) 
{ 
    echo "Connection failed: " . $e->getMessage(); 
} 

function GetProduct($id)
{
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM Products WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetchAll();
    $price = $result[0]['price'];
    $title = $result[0]['title'];
    $image = $result[0]['image'];
    $conn = null;
    return '<td>
            <a href=product.php?id='.$id.'>
                <img class ="floyd"  src="'.$image.'" alt="'.$title.'" ></img>
            </a>
            <p class = "description">'.$title.' </p>
            <h3 class = "description_price">'.$price.'</h3>
            </td>';
}
?>