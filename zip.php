<?php 
require_once "pdo.php";

$zip = $_GET["zip"];
$price = $_GET["price"];
global $conn;
if($price == '-1')
{
    $stmt = $conn->prepare("SELECT * FROM Zip WHERE zip LIKE :zip LIMIT 10");
    $zip = $zip.'%';
    $stmt->bindParam(':zip', $zip, PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetchAll();
    $str = "";
    foreach($result as $row){
        $str = $str.$row['zip'].";";
    }

    print $str;
}
else
{
    $stmt = $conn->prepare("SELECT * FROM Zip WHERE zip = :zip");
    $stmt->bindParam(':zip', $zip);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $state = $result['state'];
    $city = $result['city'];

    $stmt = $conn->prepare("SELECT * FROM Tax WHERE State = :state");
    $stmt->bindParam(':state', $state);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $rate = $result['CombinedRate'];
    $tax = $price * $rate;
    $total = $price + $tax;

    print "$city, $state;"."+ $$tax (tax) = $$total";
}

?>