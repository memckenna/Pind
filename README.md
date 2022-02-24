<h1 align='center' style='font-weight: bold'>Pind</h1>

<br>
</br>

<h1 align='center' style='font-weight: bold'>Pind at a Glance</h1>

Pind is a full stack application, inspired by Pinterest, that allows users to curate peresonal boards with existing or new pins that have been created by other users or by the user themselves. Logged in users can view the feed page of all the pins that have been created by the user or by other users as well as view single pins to see the pins full details (title, image, description, source link). Users can also edit and delete a pin that they have personally created. Users can navigate to their personal profile page, where they are able to view all the boards that they have created and the pins that have been saved to them as well as create new boards to organize the pins that they save into personal categories or collections. Logged in users can also view other users profiles to see they boards that they have created as well as the pins that have been saved to them.

<br>
</br>

<div align='center'>
<h1 align='center' style='font-weight: bold'>Index</h1>
<a href='https://github.com/memckenna/Pind/wiki/MVP-Feature-List'>Feature List</a> - <a href='https://github.com/memckenna/Pind/wiki/Database-Schema'>Database Schema</a> - <a href='https://github.com/memckenna/Pind/wiki/API-Documentant'>API Documentation</a> - <a href='https://github.com/memckenna/Pind/wiki/Frontend-Routes'>Frontend Routes</a>
</div>

<br>
</br>


<div align='center'>
<h1 align='center' style='font-weight: bold'>Technologies Used </h1>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
</div>

Pind is developed using React, Redux, Flask, and SQLAlchemy to create a full stack application. Heroku was used for production hosting.

<br>
</br>


# Clone Pind

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, cd into the `react-app` directory.

     ```bash
   npm install
   ```

   ```bash
   npm start
   ```

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***


<h1 align='center' style='font-weight: bold'>Features List</h1>

## Splash Page & User Authentication

Users can either log in with an existing account or sign up to create a new account. If the user doesn't want to make an account, they can log in by using the demo user log in.

<img src="https://i.postimg.cc/QtGFR2Fd/FBFE1-EF6-B3-F7-4-C9-A-B7-C3-20-EBAF4-D084-A.jpg" />

<img src='https://i.postimg.cc/P5zgYcD8/Screen-Shot-2022-02-24-at-11-37-02-AM.png' />

<br>
</br>

## User Feed Page
When a user logs in or signs up, they will be redirected to the pins feed page, where they will be able to view pins that other useres have created, along with having the ability to create a new pin on the feed page.

<img src='https://i.postimg.cc/L4TQyRWv/E492-BFD0-CC56-4670-B18-A-44-BD34691637.jpg' />

<br>
</br>

## Pins
Users can create their own new pins that will include the image that inspired the pin, a title to describe the image, an optional description of the pin, and an optional source link that inspired the pin by clicking the + on the bottom right of feed page. Users can click on a single pin to view full pin details as well as edit or delete the pin.

<img src='https://i.postimg.cc/nzd7DddK/265-B1-E38-DDF7-40-A5-A610-BD6-F4-D5738-D0.jpg' />

<img src='https://i.postimg.cc/MTXHhzDR/1-B78-F296-2-F65-43-E0-9-B94-DE018-CD2-BFFE.jpg' />

<img src='https://i.postimg.cc/Pfw16k59/Screen-Shot-2022-02-24-at-11-29-17-AM.png' />

<br>
</br>

## Boards
Users can curate their own personal boards on their profile pages that will be populated with pins that interest them and correspond with the boards theme. (Allowing users to populate the board with pins is coming soon to the application). Users can create a new board by clicking on + button on the right side of the page. They can also edit or delete a board by clicking on the edit pen when hovering over a board. Users can also navigate to a single board where they will be able to view all the pins saved to the board.

<img src='https://i.postimg.cc/9f9c61wm/Screen-Shot-2022-02-24-at-11-20-02-AM.png' />
<img src='https://i.postimg.cc/wB8Cmz3z/Screen-Shot-2022-02-24-at-11-33-34-AM.png' />
<img src='https://i.postimg.cc/9MxgJHXr/Screen-Shot-2022-02-24-at-11-34-23-AM.png' />
<img src='https://i.postimg.cc/hPMvsCTN/Screen-Shot-2022-02-24-at-11-20-29-AM.png' />

<br>
</br>

<h1 align='center' style='font-weight: bold'>Future Implementations</h1>

## Save Pins to Boards

Users will be able to save a pin to a board by hovering over the pin and clicking on the boards button to open a modal and select the board they would like to save the pin to. Also, when users create a new pin, they will be able to select the board that they would like they pin to be saved to. Users will have the option to edit or delete a pin from a board.

<br>
</br>

## Follows

Users will be able to click on a single pin detail modal and will have the option to follow/unfollow a user. They will also be able to go to their profile page at the top and click the following / followers to open a modal to show who all they are following and the people that are following them.

<br>
</br>

## Set Boards to Public or Private

Users will be able to select the board to be public or private when creating their board.
