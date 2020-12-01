Overview
In this assignment, you will be creating a fully functioning CRUD application using the MVC
architecture. This is an individual assignment and will be hosted on the same project as
assignment 2:
- Database: you should create a database called “cmpt470”. In the using this database
create a model called “Rectangle” to collect information about a series of Rectangles. The
minimum attributes for the squares are width, height, and color (you may decide what
these attributes are for). In addition, you may add as many other rectangle attributes as
you’d like (Be creative, there will be a creative component to the mark :P). You must
decide on a primary key for your table so that the CRUD operations can be executed.
- Your app should have the following features:
1. The ability to add new rectangles (with corresponding attributes).
2. The ability to delete existing rectangles.
3. The ability to change attributes of any of the rectangles.
4. The ability to display (draw) all rectangles currently in the database (including any other
information you collect). For example, if you currently have two rectangles in your
database as follows:
Rectangle Database
1
2
width
90
15
height
30
30
color
red
black
The display page could look something like this:
View:
In addition, you may also add or display any other attributes you wish. For
example, you could choose to display the area of the rectangle. Please note that
the requirements stated above is a minimum list, you may add to them as you see
fit. Please be creative, part of your grade will be based on effort and creativity.Architecture
Your application must use the Model View Controller architecture and you may use existing PHP
framework or NodeJS package to accomplish this. You may send back a rendered page from the
server OR send a JSON object from the server for the client-side code to display it on the browser
(it is totally up to you).
Your main application should be served from a Windows Server 2016 virtual machine (compute
engine) called “asn3-4” with the similar properties as the second assignment:
- 1 vCPUs (4 GB memory)
- Windows Server 2016 Datacenter
- Use a new 50GB standard persistent disk
- Allow HTTP traffic
You must run a separate database MySQL server on a Linux Ubuntu instance called “asn3-4-DB”
with the following properties:
- 1 vCPUs (3.75 GB memory)
- Ubuntu 16.04 LTS
- Allow traffic on port 3306
Your main application should connect to the database instance through the internal IP address,
otherwise, the connection will not be guaranteed each time you renew your external IP. For
more information on connecting to a MySQL instance on GCP, see the following article:
https://cloud.google.com/solutions/mysql-remote-access
Submission
Be sure to turn off your virtual machines before the submission date. Similar to assignment 2, we
will simply turn on the virtual machines for your application and the database server instances,
then click on the external IP of your application. We should then be able to view your application.
Please add the following emails as Owners of your project:
-
-
bobbyctchab@gmail.com (NO typo)
sumukhabharadwaj21@gmail.com
Similar to assignment 2, please also submit your PHP/NodeJS code to coursys:
https://courses.cs.sfu.ca/. If for any reason, you cannot get the database connections working,
you may still receive marks for any work that you have completed.
Marking Scheme
Adding, Deleting, and Editing rectangles: 14 Marks
Displaying Rectangles properly: 10 Marks
Creativity (relative): 4 Marks
