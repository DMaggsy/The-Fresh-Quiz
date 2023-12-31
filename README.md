<hr>

# *The Fresh Quiz*

![Responsive Mockup](documentation/responsive-mockup.png)


<hr>

## *Description*

This quiz will cover an ocean themed set of questions. This will test your knowledge on ocean inhabitants, Human interactions with the sea & Ocean general knowledge. All questions are multiple choice, and at the end of the quiz you will be given your score. You are required to enter a username at the beginning of the quiz so we can log your score and display your result at the end. The overall theme of the quiz is based on the ocean and pirates, hence the instruction to outrun the pirates!

<br>

The site can be accessed by this [link](https://dmaggsy.github.io/The-Fresh-Quiz/)

<br>

![Intro Image](documentation/startingshot.png)


<hr> 

## *User Stories* 

### *First Time Visitor Goals*

- As a first time visitor, I want to be able to easily navigate throughout the site to find content.
- As a first time visitor, I want to be able to easily understand the quiz and how to play.

### *Returning Visitor Goals*

- As a returning visitor, I want to be able to try and beat my previous score.

### *Frequent User Goals*

- As a frequent user, I want to be able to see if there are any new questions added to the quiz.

<hr>

## *Features*

## *Title & Intro Text*

 - The title and intro text will inform the overall idea of the quiz and how to start.

![Title & Intro](documentation/titleandintro.png)

## *Username input & button*

 - The username input and button will allow the user to type and enter their chosen username so they can be identified and their score can be logged.

![Username Input](documentation/usernameinput.png)

<hr>

## *Start Quiz Button*

 - The start quiz button will allow the user to start the quiz once they have entered their username. Users will also see a good luck message prior to starting. 

![Start Quiz Button](documentation/startquizbutton.png)

<hr>

## *Background Image* 

 - The background image features an old fashioned ship to fit in with the theme of the ocean and pirates.

![Background Image](assets/images/background.webp)

<hr>

## *Question Screen*

 - The question screen will display the quiz title, the question, the multiple choice options and the submit answer button. The quiz is designed so only one multiple choice option can be selected at a time. However, the user can change their answer as many times as they like before submitting. The Submit button will only be clickable once an option has been selected.

![Question Screen](documentation/questionscreen.png)

<hr>

## *Exit Button*

 - Once a user starts the quiz, the Exit quiz button will be visibile throughout. This will allow the user to exit the quiz at any time (this will take them back to the initial username screen). It is also clearly indicated with the conventional red box and white cross (like an old fashioned browser window). 

![Exit Button](documentation/exitbutton.png)

<hr>

## *Results Screen Outcome*

 - The results screen will display the users score and a message based on their score. The user will also be able to see their username and exit button to head back to the start screen.

- Varying Results Screen 

  - 0-33.33% Shipwreck Theme 

  - 33.34-66.33% Smallboat Theme

  - 66.34-100% Pirateship Theme 

<hr>

## *Shipwreck Theme*

 - Users will see this results screen if they score between 0-33.33% (please note the exit button is in the far top left corner as per earlier screenshot). 

 ![Shipwreck Theme](documentation/shipwreckscreenshot.png)

<hr>

## *Smallboat Theme*

 - Users will see this results screen if they score between 33.34-66.33% (please note the exit button is in the far top left corner as per earlier screenshot).

 ![Smallboat Theme](documentation/smallboatscreenshot.png)

<hr>

## *Pirateship Theme*

 - Users will see this results screen if they score between 66.34-100% (please note the exit button is in the far top left corner as per earlier screenshot).

 ![Pirateship Theme](documentation/pirateshipscreenshot.png)

### Languages Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) was used to arrange items simmetrically on the pages.
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) - was used on the "Home", "What to buy", "Where to buy" pages in order to display multiple options.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) were used to make the website responsive on different screen sizes.

<hr> 

## *Design*

### *Colour Scheme ID via Hex Codes*

- The colour scheme for this quiz was designed to make the users interaction as simple as possible. For example, all in game buttons start Green and then change to yellow once selected. This makes it clear to the user which option they have picked. We also have the exit button in a clearly defined red & white box to make it familiar to the user. 


 ![Colour Palette](documentation/quizcolors.png)

 <hr>

## *Typography*

- The font used throughout the quiz is "Roboto sans-serif". This font was chosen as it is easy to read and is a common font used on many websites.

![Font](documentation/fontused.png)

<hr>

## *Bugs*

 - Solved Bugs

1. Exit Button Issue

Problem: Clicking the exit button didn't produce any action. An error appeared in the console pointing to the "Exit Quiz" button functionality where it was trying to reset a score display.

Solution: I addressed this by ensuring that all the individual quiz scores (Shipwreck, Smallboat, and Pirateship) are reset when the exit button is pressed.

 ![Bug 1](documentation/exitbug.png)

<hr>

2. Username Entry Issue

![Bug 2](documentation/usernamebugexample.gif)

Problem: Users could proceed by clicking the "Enter Username" button without actually providing a username.

Expected Behavior: The application should prompt users to enter a username before they can continue. If they try to move forward without entering one, an error message should be displayed.

Solution: I introduced a mechanism that checks for the presence of a username. If the input is empty, an error alert pops up prompting the user to enter a username. This ensures that users can't proceed without providing a name.


<hr>

## *Manual Testing*

| feature | action | expected result | tested | passed |
| --- | --- | --- | --- | --- |
| Username Data Field | Click on field | User can start typing username | Yes | Yes |
| Username Data Field | Type in username | Username is displayed in field | Yes | Yes |
| Enter Username Button | Click on Enter Username button | Quiz accepts username | Yes | Yes |
| Enter Username Button | Click on Enter Username button | Quiz does not accept blank username | Yes | Yes |
| Start Quiz Button | Click on Start Quiz button | Quiz starts | Yes | Yes |
| Multiple Choice Answers | Click on answer | Answer changes colour | Yes | Yes |
| Submit Answer Button | Click on Submit Answer button | Answer is submitted | Yes | Yes |
| Submit Answer Button | Click on Submit Answer button without selected an answer | Quiz does not accept blank answer | Yes | Yes |
| Exit Quiz Button | Click on Exit Quiz button | Quiz exits | Yes | Yes |
| Shipwreck Theme | Score between 0-33.33% | Shipwreck theme is displayed | Yes | Yes |
| Smallboat Theme | Score between 33.34-66.33% | Smallboat theme is displayed | Yes | Yes |
| Pirateship Theme | Score between 66.34-100% | Pirateship theme is displayed | Yes | Yes |

## *Testing*

- In order to confirm the correct functionality, responsiveness and user experience of the website, it was tested on the following browsers:

  ### Google Chrome

    - ![Google Chrome](documentation/chrome1.png)
    - ![Google Chrome](documentation/chrome2.png)
    - ![Google Chrome](documentation/chrome3.png)
  
  ### Microsoft Edge
  
    - ![Microsoft Edge](documentation/edge1.png)
    - ![Microsoft Edge](documentation/edge2.png)
    - ![Microsoft Edge](documentation/edge3.png)
    
  ### Mozilla Firefox
   
    - ![Mozilla Firefox](documentation/firefox1.png)
    - ![Mozilla Firefox](documentation/firefox2.png)
    - ![Mozilla Firefox](documentation/firefox3.png)


## *Validator Testing*

### HTML 

- The HTML code was tested using [W3C HTML Validator](https://validator.w3.org/).

- There was one warning in regards to the empty h2 tag for id="question". This is because the question is dynamically generated via Javascript & the json file. 

![HTML Validator](documentation/htmlchecker.png)


### CSS

- The CSS code was tested using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

- There were no errors found.

![CSS Validator](documentation/csschecker.png)


### Javascript

- The Javascript code was tested using [JSHint](https://jshint.com/).

![Javascript Validator 1](documentation/jshint1.png)


## *Responsiveness*

- The app was tested with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  ### Mobile

    - 320x480

    ![Mobile 1](documentation/320x480_.gif)

    - 320x568

    ![Mobile 2](documentation/320x568_.gif)

    - 375x667

    ![Mobile 3](documentation/375x667_.gif)

    - 414x736

    ![Mobile 4](documentation/414x736_.gif)

  ### Tablet 

    - 600x960

    ![Tablet 1](documentation/600x960_.gif)

    - 768x1024

    ![Tablet 2](documentation/768x1024_.gif)

    - 1024x768

    ![Tablet 3](documentation/1024x768_.gif)

    - 1366x1024

    ![Tablet 4](documentation/1366x1024_.gif)

  ### Desktop

    - 1024x600

    ![Desktop](documentation/1024x600_.gif)

    - 1366x768

    ![Desktop](documentation/1366x768_.gif)

    - 1680x1050

    ![Desktop](documentation/1680x1050_.gif)

    - 1920x1080
    
    ![Desktop](documentation/1920x1080_.gif)

<hr>

## *Lighthouse Testing*

- The website was tested using [Lighthouse](https://developers.google.com/web/tools/lighthouse).

![Lighthouse 1](documentation/lighthouse1.png)
    
## *Deployment*

- This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

- The live link can be found here - [The Fresh Quiz](https://dmaggsy.github.io/The-Fresh-Quiz/)

<hr>

## *Local Deployment*

- In order to make a local copy of this repository, you can type the following command in your IDE terminal:

  - `git clone https://github.com/DMaggsy/The-Fresh-Quiz.git

- Alternatively, if using Gitpod, you can [click here](https://gitpod.io/#https://github.com/DMaggsy/The-Fresh-Quiz.git)

<hr>

## *Credits*

- All the end screen images were created within [Canva](https://www.canva.com/)

- The background image was taken from [Unsplash](https://unsplash.com/photos/z-gL7br3MTk)

- The Hex code image was created using [Coolors](https://coolors.co/)

- Responsive testing videos were converted to gif using [Adobe Express](https://express.adobe.com/)

- The code template was taken from [Code Institute](https://codeinstitute.net/)

- The GitHub logo was taken from [GitHub](https://github.com/)

- Screenshots and videos were recording for the Readme file using [Snipping Tool](https://support.microsoft.com/en-us/windows/open-snipping-tool-and-take-a-screenshot-a35ac9ff-4a58-24c9-3253-f12bac9f9d44#:~:text=Press%20Windows%20logo%20key%20%2B%20Shift,%2C%20and%20Free%2Dform%20mode.)


## *Wireframes*

### Mobile

![Wireframe 1](documentation/mobile-home.png)

![Wireframe 2](documentation/mobile-start.png)

![Wireframe 3](documentation/mobile-question.png)

![Wireframe 4](documentation/mobile-endscreen.png)

### Tablet

![Wireframe 5](documentation/tablet-home.png)

![Wireframe 6](documentation/tablet-start.png)

![Wireframe 7](documentation/tablet-question.png)

![Wireframe 8](documentation/tablet-endscreen.png)


### Desktop

![Wireframe 9](documentation/desktop-home.png)

![Wireframe 10](documentation/desktop-start.png)

![Wireframe 11](documentation/desktop-question.png)

![Wireframe 12](documentation/desktop-endscreen.png)