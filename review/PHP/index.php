<!DOCTYPE html>
<html>
    <head>
        <title>CART451 - PHP</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>CART451-PHP</h1>
        <p>I'm the CART451-PHP index page.</p>

        <!-- BASIC PHP -->
        <!-- <?php 
            echo "Hello World!";  
            echo phpinfo();
        ?> -->
        <!-- <?php 
            echo "Hello World!";  
            echo "Hello World Again!";  
            // has the same output as:
            echo "Hello World!";echo "Hello World Again!";  
        ?> -->
        <!-- <?php
            echo "<br> <h2> Hello World in header tags </br> </h2>";
        ?> -->
        <!-- <?php 
            echo "<div> Hello World in div tags </div>";
        ?> -->
        <!-- <?php 
            echo "<div> Hello World in div tags </div>";
            // echo "<div id="divWithSpecificStyle">Hello World in div tags using a <strong>specific</strong> style </div>"; // NO DOUBLE QUOTES!
            echo "<div id ='divWithSpecificStyle'> Hello World in div tags using a <strong>specific</strong> style </div>";
            // echo "<div id= \"divWithSpecificStyle\"> Hello World in div tags using a <strong>specific</strong> style </div>"; // OR escape double quotes
        ?>         -->
        <!-- <?php   
            echo "<div id ='divWithExtStyle'> Hello World in div tags using an <strong>external</strong> style </div>";
        ?> -->
        <!-- <?php
            // declare some variables ...
            $firstName = "Maria";
            $lastName = "Smith";
            $age =22;
            $occupation ="Receptionist";
            // use them by writing them to the browser using the echo command.
            echo"<h3> the original assignments to our variables::</h3>";
            echo $firstName."<br \>";
            echo $lastName."<br \>";
            echo $age."<br \>";
            echo $occupation."<br \>";
            // now change the variables and echo again::
            $firstName = "Sarah";
            $lastName = "Keene";
            $age =24;
            $occupation ="Graphic Designer";
            echo "<div id ='divWithExtStyle'>";
            // use them again by writing them to the browser using the echo command.
            echo"<h3> the variables reassigned::</h3>";
            echo $firstName."<br \>";
            echo $lastName."<br \>";
            echo $age."<br \>";
            echo $occupation."<br \>";
            echo  "</div>";
        ?>
        <div id ='divWithSpecificStyle'> TEST DIV <?php echo $firstName; ?></div> -->
        
        <!-- VARIABLES -->
        <!-- <?php
            $numYear = 2014;
            $numDay =4;
            $month ="February";
            $stringDay = "Tuesday";
            // echo "<br />";
            // echo $stringDay;
            // echo $numDay;
            // echo $month;
            // echo $numYear;
            // echo "<br />";
            // OR
            // echo $stringDay .$numDay .$month .$numYear;
            // OR
            // echo $stringDay." ".$numDay ." ". $month ." ".$numYear."<br />";
            // OR
            // echo "$stringDay  $numDay $month $numYear <br />";
            // NOT, use double quotes to print out the values of the variables when using the “echo” command!!
            // echo '$stringDay  $numDay $month $numYear <br />';
        ?> -->

        <!-- OPERATORS -->
        <!-- <?php
            // Define a variable called $addingNumbers and assign it an expression which adds 2 values together:
            $addingNumbers =  27 + 32;
            // same output
            echo "Perform addition: 27 + 32 = ". (27+32) ."<br />";
            echo "Perform addition: 27 + 32 = ".$addingNumbers."<br />"; 
            echo "Perform addition: 27 + 32 = $addingNumbers <br />"; 
            // will not work - is interpreted as a string literal
            echo "Perform addition: 27 + 32 = (27+32) <br />";
        ?> -->
        <!-- <?php
            $valOne =34;
            $valTwo =50;
            // use if /else construct to execute the correct statement
            // condition test using less than operator
            if ($valOne<$valTwo)
            {
            echo "$valOne is less than $valTwo <br />";
            }
            else
            {
            echo "$valOne is greater than $valTwo <br />";
            }
        ?> -->
        <!-- <?php
            $valOne =75;
            $valTwo =50;
            switch($valOne>$valTwo){
              case true:
                   echo "switch construct says: $valOne is greater than $valTwo <br />";
                   break;
              case false:
                   echo "switch construct says: $valOne is less than $valTwo <br />";
                   break;
              default:
                   echo "switch case constructs says:: the expression equates to something else than t or f <br />";
             
            }
        ?> -->
        <!-- <?php
            // select a random number between 1 and 10
            $myRandomNum = rand(1,10);
            switch($myRandomNum){
            case 1:
                echo "the value is 1 <br />";
                break;
            case 2:
                echo "the value is 2 <br />";
                break;
            case 3:
                echo "the value is 3 <br />";
            break;
            case 4:
                echo "the value is 4 <br />";
                break;
            case 5:
                echo "the value is 5 <br />";
                break;
            case 6:
                echo "the value is 6 <br />";
                break;
            case 7:
                echo "the value is 7 <br />";
                break;
            case 8:
                echo "the value is 8 <br />";
                break;
            case 9:
                echo "the value is 9 <br />";
            break;
            case 10:
                echo "the value is 10 <br />";
                break;
            default:
            echo " the value is not between 1 and 10 ...";
            }
        ?> -->

        <!-- ARRAYS -->
        <!-- <?php
            $shoppingList=array('Milk', 'Bread', 'Beans');
            echo "I need " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] . ".";
            $shoppingList[1] ="Crackers";
            echo "<br /> I need now: " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] . ".";
            echo "<br /> Current Array length: ". count($shoppingList);
            $shoppingList[3] ="Oranges";
            echo "<br /> Final Shopping list: " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] ." and ".$shoppingList[3] .".";
            echo "<br /> New Array length: ". count($shoppingList);
        ?> -->
        <!-- <?php
            // fill the array with the values
            $math201grades["Mary"] = "B";
            $math201grades["John"] = "A-";
            $math201grades["Steve"] = "B+";
            $math201grades["Gina"] = "B-";
            // output
            echo "Mary's MATH 201 final grade: " . $math201grades["Mary"] . "<br />";
            echo "John's MATH 201 final grade: " . $math201grades["John"] . "<br />";
            echo "Steve's MATH 201 final grade: " . $math201grades["Steve"] . "<br />";
            echo "Gina's MATH 201 final grade: ". $math201grades["Gina"] ."<br />";
            $keys = array_keys($math201grades);
            // var_dump() function outputs the contents of the array to the screen...
            var_dump($keys);
            echo "<br />";
            
            $values = array_values($math201grades);
            var_dump($values);
            echo "<br />";
        ?> -->

        <!-- LOOPS -->
        <!-- <?php
            // // for loop
            // // fill the array with values
            // $shoppingList = array("milk","bread", "butter", "eggs","chocolate","oranges","peppers","chicken","potatoes","cheese");
            // echo "Example using a for loop <br \>";
            // // now loop through the array
            // for($counter =0; $counter < count($shoppingList); $counter =$counter+1){
            //     echo $shoppingList[$counter]."<br \>";
            // }
            // // while loop
            // echo "Same example using a while loop <br \>";
            // $counter =0;
            // while($counter < count($shoppingList)){
            //     echo $shoppingList[$counter]."<br \>";
            //     $counter=$counter+1;
            // }
            // $keysArr = array_keys($math201grades);
            // for($i=0; $i<count($keys); $i++) {
            // echo" the value at index: ". $i . " is " . $math201grades[$keysArr[$i]]. " for the key: ".$keysArr[$i]. "<br />";
            // }
            // foreach($math201grades as $entry) {
            //     echo("the value using an associative array:: ".$entry."<br />");   
            // }
            // foreach ($math201grades as $key => $entry)  {
            //     echo "Key: $key; Value: $entry<br />";
            // }
        ?> -->

        <!-- INCLUDE & REQUIRE -->
        <?php
            // INCLUDE
            // include('header.php');
            // echo('<p style = "color:red;"> echo content here after the error</p>');
            // W/ ERROR
            // include('headers.php');
            // echo('<p style = "color:red;"> echo content here after the error</p>');
            // REQUIRE
            // require('header.php');
            // echo('<p style = "color:red;"> echo content here after the error</p>');
            // require('headers.php');
            // echo('<p style = "color:red;"> echo content here after the error</p>');
            // DIFF in error handling -> recommended to use require(), because scripts should not continue executing if files are missing or misnamed…
        ?>
        
    </body>
</html>