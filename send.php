<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "theprodeveder@gmail.com"; // Replace with your email address
    $subject = "New Form Submission";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $mailBody = "Name: $name<br>";
    $mailBody .= "Email: $email<br>";
    $mailBody .= "Message: $message<br>";

    mail($to, $subject, $mailBody, $headers);

    // Redirect to a thank you page or display a thank you message
    header("Location: thank_you.html");
    exit();
}
?>
