# La Sale - Online Bidding!

The web application is provides online bidding opportunities for users. This took inspiration from a well-known Facebook group of a university named 'DLSU Bids to Pick' where students freely exhange products around the area. With this, the website provides the appropriate functions that replicates the bidding experience.

# Heroku App Deployment
Link: [La-Sale Web Application](https://lasale.herokuapp.com/)

## Contents
The folders found in the project directory provides appropriate organization for the codes and their specific functions.
- [controllers](https://github.com/ccapdev1920T2/s12g5/tree/master/la%20sale/controllers) - Comprises the files that provides callback functions for the request of a particular user.
- [models](https://github.com/ccapdev1920T2/s12g5/tree/master/la%20sale/models) - Contains the files for the database models, such as defining the schema, and defines the needed functions for organizing data.
- [routes](https://github.com/ccapdev1920T2/s12g5/tree/master/la%20sale/routes) - The responses of the created server for a client request are specified in the routes fule.
- [views](https://github.com/ccapdev1920T2/s12g5/tree/master/la%20sale/views) - The front-end aspect of the project are placed in this folder. This includes the hbs files, and their corresponding css and script information.
- [index.js](https://github.com/ccapdev1920T2/s12g5/blob/master/la%20sale/index.js) - Represents the primary entry point of the website.

## Installing

### Go to the la sale folder containing the index.js file and follow these instructions:

1. Navigate the folder using the command prompt.
2. Run the command `npm install` in order to setup the necessary modules for the project.
3. After which, use the command `node index.js` in order to start the server. The console should respond with a:
```
App listening at port 3000
Connected to: mongodb+srv://admin:admin@lasale-wb0sj.azure.mongodb.net/local_library?retryWrites=true&w=majority
```
Note that the database is hosted using MongoDB Atlas in Azure for data centralization. Moreover, this is used by the proponents for efficiency in creating and sharing details important in the web application. With this, internet access is needed in order for the project to function

4. Proceed to the url `localhost:3000` and you should land on the login page of the website that looks like this:
![alt text](https://media.discordapp.net/attachments/696739033371508777/698197365773041714/unknown.png?width=1345&height=677)

5. Create an account by clicking on `become an archer` which presents the display: 
![alt text](https://media.discordapp.net/attachments/696739033371508777/698197930363977789/unknown.png?width=1345&height=677)

6. Enter the necessary details and click on the register button. This should return you to the login page.

7. Enter your account information, such as username and password, in order to proceed to the main page of La Sale. You may freely navigate through the website and its functions starting here. Each page will be described for this discussion. All the pages are provided with a clock located at the bottom right of the page. This serves as a guide for identfying the date and time used for the listings in the application. 

### Main Page | Browse 
![alt text](https://media.discordapp.net/attachments/696739033371508777/698199083713691729/unknown.png?width=1348&height=677)
This page presents all the active biddings as of the moment. This means, all of which presented can be participated by all users.

### Navigation Bar 
![alt text](https://media.discordapp.net/attachments/696739033371508777/698200675967828068/unknown.png?width=1442&height=52)
The navigation bar or navbar should be used as the primary tool in order to access the various features of the website. In order to return to the homepage or browse, you may click the la.sale logo at the left side. This also contains search features for the products a user may want to browse. One of which is in terms of filtering the products in terms of their category, while the other focuses on specifying the product details. 

### Profile
![alt text](https://media.discordapp.net/attachments/696739033371508777/698201951346884618/unknown.png?width=1347&height=677)
![alt text](https://media.discordapp.net/attachments/529699127370448916/703562269300359208/unknown.png?width=884&height=431)
The profile page provides the personal information of the user in the session. Moreover, it also provides a way to edit certain information such as profile picture, password, and user description. These are optional so it may be left blank while the other information could be filled out.
  
### Listings
These show the listings related to the user.

#### My Listings
![alt text](https://media.discordapp.net/attachments/696739033371508777/698203342656241755/unknown.png?width=1356&height=677)
These represent the listings that the user owns. It is divided into completed (inactive) and ongoing or (active) listings. 

#### Pinned Listings
![alt text](https://media.discordapp.net/attachments/696739033371508777/698203430711328798/unknown.png?width=1343&height=677)
These are the listings saved or pinned by the user.

#### Listing Participations
![alt text](https://media.discordapp.net/attachments/696739033371508777/698203508020609074/unknown.png?width=1343&height=677)
These are the listings in which the user has placed a bid

### Create Listings
![alt text](https://media.discordapp.net/attachments/696739033371508777/698205288053866576/unknown.png?width=1343&height=677)
Create listings allows a user to post a product or service. The necessary details must be filled in order to successfully post a listing.

**For testing purposes** You may create a listing with the deadline set a few minutes from now. With this, you may view and interact with it in the browse page. Also, you may search for it using the filter drop down or the search bar. This will be tagged as inactive once the bidding expires, therefore removing all possible functions. Magic!

### Edit Listing
![alt_text](https://media.discordapp.net/attachments/529699127370448916/703562524016246784/unknown.png?width=884&height=431)
This is where a bid can be editted. The input fields are optional, so even a single input would be valid. Uploading an image will just append the image to the existing images that the user uploaded. Images posted cannot be deleted, since this would be unethical. 

### Listing
![alt text](https://media.discordapp.net/attachments/696739033371508777/698213732794237048/unknown.png?width=850&height=431)
A listing page contains the information about a product, and the interactions that may be conducted. This includes raising the current bid, saving the bid as pin for future references, and buy out which indicates that the user will buy the listing at the highest price possible. Try inputting invalid amounts such as a bid lower or higher than the bid range or a value not higher than current highest bid.

### Send Message
![alt text](https://media.discordapp.net/attachments/696739033371508777/698205601661976626/unknown.png?width=1348&height=677)
This feature redirects an email towards another Archer or user. It can serve as means for communcation among users. It can be tested by sending a message to your own account, considering that a valid email was used. The message will then be sent to that email, it may take a few seconds. 

### Logout
When clicking logout, the user exits the session and is redirect to the login page.


End with an example of getting some data out of the system or using it for a little demo


## Authors

**Trisha Pelagio**
**Bryce Ramirez**
**Jed Tan**

![alt text](https://media.discordapp.net/attachments/696739033371508777/698210571006509226/pizap.jpg)

