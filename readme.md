In this assignment, I created a fully functioning CRUD application using the MVC
architecture with Nodejs. Features of this application include:

- Database: used to store and collect information about Rectangle models. The
minimum attributes for the squares are width, height, and color, but also added an extra attribut called bob_ross?. The bob_ross attribute 
uses an image of bob ross as a texture, instead of using a color attribute.
I used an ID as a primary key for the rectable table (database entry) so that the CRUD operations can be executed.

- The ability to add new rectangles (with corresponding attributes).
- The ability to delete existing rectangles.
- The ability to change attributes of any of the rectangles.
- The ability to display (draw) all rectangles currently in the database. 

For example, if I currently have two rectangles in my database:

ID | Width | Height | Color | bob_ross
---|-------|--------|-------|----------
1 | 90 | 15 | red | no
2 | 30 | 20 | black | yes

View:

Rendered rectangles in database using a requested JSON object from the server

Deployment:

The main application was served from a Windows Server 2016 virtual machine with
the following features (on Google Cloud Platform)

- 1 vCPUs (4 GB memory)
- Windows Server 2016 Datacenter
- Use a new 50GB standard persistent disk
- Allow HTTP traffic

Ran a separate database MySQL server on a Linux Ubuntu instance
with the following properties:

- 1 vCPUs (3.75 GB memory)
- Ubuntu 16.04 LTS
- Allow traffic on port 3306

The main application connected to the database instance through the internal IP address,
so the communication between server and database would be guaranteed each time the external IP was renewed. For
you may still receive marks for any work that you have completed.
Marking Scheme
Adding, Deleting, and Editing rectangles: 14 Marks
Displaying Rectangles properly: 10 Marks
Creativity (relative): 4 Marks
