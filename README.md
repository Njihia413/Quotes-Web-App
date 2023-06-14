# Quotes Web App
# Contributors of this Project
## By Maureen Njihia on 1st September 2022
# Description
Moringa Phase 1 Independent Project on a Quotes website that allows users to:
* View all quoes `GET/quotes`
* Create their own quote `POST/quotes`
* Like a quote `PATCH/quotes/:id`
* Delete a quote `DELETE/quotes/:id`
# Setup Requirements
* Git
* Github
* Web Browser (Chrome or Firefox)
* Node.js https://nodejs.org/en/
* JSON Server https://www.npmjs.com/package/json-server
# Setup Installation
* Copy the link of this repository
```
https://github.com/Njihia413/Quotes-Web-App.git
```
* Clone it to your local machine
```
git clone https://github.com/Njihia413/Quotes-Web-App.git
```
* Open terminal and navigate to the directory of the project
```
cd Quotes-Web-App
```
* Run the following command to install the JSON Server
```
npm install -g json-server
```
* Start the JSON Server
```
json-server --watch db.json
```
* To view the server, navigate to http://localhost:3000/quotes
* To run the application, open the `index.html` file on your browser using a suitable code editor ie https://code.visualstudio.com/
# Technologies Used
* HTML5
* CSS3
* Bootstrap 5.2
# Live Links
* Quotes Backend Link: https://quotes-json-server-vercel.vercel.app/quotes
* Quotes Web App Frontend Link: https://quotes-web-app-fawn.vercel.app/
# Some Screenshots
* Homepage
![Homepage Image](assets/Home-img.jpg)
<br />

* Quotes Section
![Quotes Container](assets/Quotes-Container.jpg)
<br />

* Create Quote Modal Form
![Quote form](assets/Quote-form.jpg)
<br />

* After submitting the form
![Quote form submission](assets/Quote-modal.jpg)
<br />

* After Deleting a Quote
![Delete quote](assets/Delete-alert.jpg)

# Known Bugs
There are no known bugs of this project at the moment 😎.
# Support and contact details
For any contributions towards this project:
* Email: developer.njihia@gmail.com
* Phone: 0704592362
# License
Copyright (c) 2022 Moringa School

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.