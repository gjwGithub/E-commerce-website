<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laptop</title>
    <style type="text/css">
        table {
            border-collapse: collapse;
            margin-bottom: 80px;
            width: 75%;
            height: 500px;
            box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);
            border-radius: 3px;
            border-color: grey;
        }
        .floyd {
            height: 200px;
            width: 280px;
            display: inline-block;
            margin: 10px;
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
        }
        .floyd:hover {
            position: relative;
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            -o-transform: scale(1.3);
            transform: scale(1.3);
            z-index: 1000;
        }

        .mybutton {
            width: 60px;
            height: 30px;
            background-color:darkorange;
            text-align: center;
            position: relative;
            float: left;
            display: block;
            color: rgba(255,255,255,0.9);
            padding: 21px 20px;
            text-decoration: none;
            font-family: "Times New Roman", Times, serif;
            font-size: 17px;
            font-weight:300;
        }

        .mybutton:hover {
            color:white;
        }

        .mybutton:after {
            content: "";
            position: absolute;
            color: white;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(255,255,255,0.4);
            -webkit-transition: none;
            -moz-transition: none;
            -o-transition: none;
            transition: none;
        }

        .mybutton:hover:after {
            width: 120%;
            color: white;
            background-color: rgba(255,255,255,0);
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;

        }

        .button {
            width: 140px;
            height: 60px;
            background-color:darkorange;
            position: relative;
            float: left;
            display: block;
            color: white;
            text-decoration: none;
            font-size: 30px;
            padding-top: 12px;
            padding-bottom: 10px;
            text-align: center;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;
        }

        .navbar {
            overflow: hidden;
            background-color: darkorange;
            position: fixed;
            top: 0;
            width: 100%;
            height:60px;
            z-index:999;
            margin-bottom:0;
        }
        .aboutus{
            width: 82px;
            height: 24px;
            background-color:white;
            padding-top: 5px;
            top:15px;
            right:20px;
            position: relative;
            float: right;
            display: block;
            color: dodgerblue;
            text-decoration: none;
            font-size: 17px;
            text-align: center;
            font-weight: 200;
            font-family: Arial, Helvetica, sans-serif;
            box-shadow:0px 2px 6px 1px rgba(0,0,0,.26);
            border-radius: 4px;
        }

        .aboutus:hover:after {
            background-color: dodgerblue;
            float: right;
            padding: 14px 25px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            color: white;
        }

        .aboutus:hover {
            background-color: dodgerblue;
            color: white;
        }

        .image {
            position: relative;
            margin:0;
            display:block;
            width: 100%; /* for IE 6 */
            height:100%;
            clip:rect(20px 100px 50px 20px);
        }


        .top {
            position: absolute;
            top: 180px;
            left: 120px;
            font-family: Helvetica, Sans-Serif;
            font-size:90px;
            color:white;
            background:black;
            opacity:0.6;
        }
        .top2 {
            position: absolute;
            top: 180px;
            right: 40px;
            font-family: Helvetica, Sans-Serif;
            font-size:90px;
            color:white;
            background:black;
            opacity:0.6;
        }

        top span {
            color: black;
            font: bold 24px/45px Helvetica, Sans-Serif;
            letter-spacing: -1px;
            background: rgb(0, 0, 0); /* fallback color */
            background: rgba(0, 0, 0, 0.7);
            padding: 10px;
        }


        .description{
            font-family:'Open Sans';
            font-size:14px;
        }

        .description_price{
            font-family: Arial, Helvetica, sans-serif;
            color:red;
        }
        body, html{
            margin: 0;
        }

    </style>
</head>

<body>
<div class="navbar">
    <a class = "button" href="home.html">T-mall</a>
    <a class = "mybutton" href="laptop.html">Laptop</a>
    <a class = "mybutton" href="tablet.html">Tablet</a>
    <a class = "mybutton" href="desktop.html">Desktop</a>
    <a class ="aboutus" href="about_us.html">About us</a>
</div>
    <div class="image">
    <img src="img/img75.jpg" style="width:100%"  alt="" />
    <div class = "top"><span>Think</span></div>
        <div class = "top2"><span>Different</span></div>
    </div>
<br><br>

<table align="center">
    <?php
        require_once "pdo.php";

        $numOfProduct = 12;
        $numOfColumn = 4;
        for($i = 0; $i < $numOfProduct / $numOfColumn; $i++)
        {
            echo "<tr>";
            for($j = 0; $j < $numOfColumn; $j++)
            {
                $id = "laptop".($i*$numOfColumn+$j+1);
                echo GetProduct($id);
            }
            echo "</tr>";
        }
    ?>
</table>
</body>
</html>
