<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$conn = new mysqli("localhost", "root", "", "waltzer");

if (mysqli_connect_error()) {
    echo json_encode(["result" => "Database connection failed"]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['image'])) {
    $text = $_POST['text'] ?? '';
    $linkUrl = $_POST['linkUrl'] ?? '';
    $startDate = $_POST['startDate'] ?? '';
    $endDate   = $_POST['endDate'] ?? '';
    $img = $_FILES['image']['name'] ?? '';
    $tmp = $_FILES['image']['tmp_name'] ?? '';

    $folder = $_SERVER['DOCUMENT_ROOT'].'/waltzify_copy/frontend/src/Database/NewArrivalBanner/';
    $result = "";

    if (move_uploaded_file($tmp, $folder . $img)) {
        $query = "INSERT INTO newarrivalbanner (image,text,link_url,start_date,end_date) VALUES (?, ?, ?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sssss", $img, $text, $linkUrl,$startDate,$endDate);
        $res = $stmt->execute();

        if ($res) {
            $result = "Banner Added Successfully!";
        } else {
            $result = "Not Submitted, Please try again!";
        }
        $stmt->close();
    } else {
        $result = "File upload failed";
    }

    $conn->close();
    echo json_encode(["result" => $result]);
} else {
    echo json_encode(["result" => "Invalid input"]);
}
?>