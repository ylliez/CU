Variable Naming Conventions:
- PHP variables must start with a letter or underscore “_”.
- PHP variables may only be comprised of alpha-numeric characters and underscores. a-z, A-Z, 0-9, or _ .
- Variables with more than one word should be separated with underscores, or camelCased (e.g. $my_variable || $myVariable)

## Arrays & Associative Arrays
Arrays are a list of any kind of data type (numbers, text-strings …), able to store multiple values in one single variable.

The most conventional method for getting data from the user is via an HTML form.
In order to send data to the server, an HTTP request is made. We then have two different HTTP methods for packaging the data that we want sent as part of the HTTP request: POST and GET :
The POST method is used to send data to a server to create/update a resource; The data sent to the server with POST is stored in the request body of the HTTP request 
GET is used to request data from a specified resource and is one of the most common HTTP methods.
GET passes parameters (i.e. query data) in the URL of the GET request i.e: ```/test/demo_form.php?name1=value1&name2=value2```