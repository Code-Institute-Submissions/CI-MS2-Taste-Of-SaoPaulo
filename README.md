# TASTE OF SAO PAULO

[LIVE SITE ON GITHUB PAGES]()

MOCKUP IMAGE

### Overview
> This project aims to turn boring business travels into interesting opportunities to soak in the vibrant cultural life of the biggest city in Brazil. It’s all about stimulating: the curiosity of recurring and short-time travellers, emerging and thriving local businesses, a colourful approach to concrete jungle.

---

#### User Stories

> - "I often travel to Sao Paulo for business, but can’t stand going to the same places every time"
> - "I’m travelling to Sao Paulo but won’t have much time there, so I’d like to learn what’s best in town"
> - "I want to better explore what’s near me next time I go to Sao Paulo"
> - "I have a few more days in Sao Paulo and I’m sick of staying in my hotel surroundings"
> - "I need an application that helps me on the go, while I’m moving through the city"
> - "I’d like to have recommendations of places and events, so I can make better use of my schedule"

---

### UX

This is a website addressed to business people of all ages, genders, nationalities and industries who are willing to explore Sao Paulo from beyond the glass-walled buildings. The main functionality of this website is to offer options of what to do in the free time according to users preferences and time spent in the city.
Vivid images, curated content and maps are essential for this project.

---

#### 1. Strategy

> Straightforward and enticing at the same time, the UX seeks a balance between relevant information and viable schedules. The outcome has to be the right amount of options to the right amount of time. 
>
> ##### Project Goals:
>
> - Become a reference on recommendations for varied types of business travellers
> - Help users make the best use of free time while in Sao Paulo
> - Promote tourism, portraying Sao Paulo as more than a financial and business centre
> - Grow a valuable customer database to local businesses
>
> ##### Customer Goals:
>
> - Mobile-first approach, to help users on-the-go
> - Interactive maps that allow users to navigate in their area
> - Mail list to get recommendations and travel plans in advance
> - Curated and easy to find information
>
#### 2. Scope
>
> The idea is to keep it quick, simple and meaningful, just as our visitors' business trip. The challenge here is to be straightforward and enticing at the same time, taking into account the limited time our visitors will have to explore the city. For this reason, a constantly updated list of the top 10 things to do in Sao Paulo is the easiest way to help users create their own itineraries.

#### 3. Structure

> - An inviting homepage bearing a carousel of appealing photos of Sao Paulo
> - Summary about the city
> - Curated content in 4 call-to-action clusters (Eat, Visit, Enjoy, Shop) that help users to create a tour itinerary
> - Social media links allow visitors to deep-dive in São Paulo to see a wider range of options

#### 4. Skeleton

> - [Wireframes](https://github.com/roliveira81/CI-MS2-Taste-Of-SaoPaulo/blob/master/assets/docs/WF_MS2.pdf): One-page website with **4** main sections.
> - One-page website with 4 main sections
> - Fixed navigation bar (Home, About, Tours, More, Info)
> - Footer with copyright info and Social Media icons

#### 5. Surface

> - Colours: a combination of dark tones and vibrant colours makes it classy and contemporary while suggestive: black, white, crimson and #05303e
> - Typography: choices favor comfort to the eye in mobile and are in line with a practical approach: "Montserrat"
> - Images: high-quality, bright pictures with the power to appeal to visitors’ curiosity
> - Maps: interactive maps allow visitors to check areas of interest and plan the commuting between the touristic attractions suggested
> - Design Choices: modern and bold as the city of São Paulo with a simplicity touch


### Features

##### Existing Features

> - Designed with HTML5, CSS3, JavaScript.
> - Home/Landing page with 4 pages in total.
> - Fixed navigation allows the user to easily navigate, regardless of which page visited.
> - About section feature the Sao Paulo city.
> - Tours section gives the suggested tours options to the users.
> - More section has a Contact Form to allow the users to request a personalized tour suggestion.
> - Info section bring some important touristic informations and by the Exchange Rates API the current exchange rate. 
> - Footer with social media links.

### Technologies Used

##### 1. Languages

> [HTML5](https://en.wikipedia.org/wiki/HTML5)
> [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
> [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

##### 2. Integration

> [Icons8](https://icons8.com/) Icons for Tour Section and Social Media links in Footer.
> [Google Maps](https://maps.google.com/) - Google Maps API.
> [Google Fonts](https://fonts.google.com/) - Overall Typography import.
> [EmailJS](https://www.emailjs.com/) - Send e-Mail API  
> [Exchange Rates API](https://exchangeratesapi.io/ ) - Exchange Rates API  

##### 3. Workspace, version control and Repository storage

> [VSCode](https://code.visualstudio.com/) - Main workspace IDE (Integrated Development Environment)
> [Git](https://git-scm.com/) - Distributed Version Control tool to store versions of files and track changes.
> [GitHub](https://github.com/) - A cloud-based hosting service to manage my **Git** repositories.

##### 4. Other

> - [Autoprefixer](https://autoprefixer.github.io/) Parses CSS and adds vendor prefixes.
> - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) Mobile-friendly check on site.
> - [Website Page Test](https://www.webpagetest.org/) Runs a website speed test from multiple locations around the globe using real browsers (IE and Chrome) and at real consumer connection speeds.
> - [Online-Spellcheck](https://www.online-spellcheck.com/) Online spelling and grammar checks.

##### 5. IDE Extensions used in GitPod

> - Live Server

---

### Resources

> - [Code Institute Course Content](https://courses.codeinstitute.net/) - Main source of fundamental knowledge.
> - [Stack Overflow](https://stackoverflow.com/) - General resource.
> - [Web CIFAR youtube Channel](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ)
> - [CSS-Tricks](https://css-tricks.com/) - General resource.
> - [w3schools.com](https://w3schools.com.com/) - General resource.
> - [Am I Responsive](http://ami.responsivedesign.is/) - Responsive website mockup image generator.
> - [Balsamiq](https://balsamiq.com/wireframes/) - Wireframing design tool.

---

### Testing

> ### HTML
>
>   * Ran HTML code through [HTML Validator](https://validator.w3.org/) 
>   
> ### CSS
> * Ran CSS code through [CSS Validator](https://jigsaw.w3.org/css-validator/)
>   *  No errors found.
> 
> ### JAVASCRIPT
>
>  * General
iframes. Ref: [Stack Overflow](https://stackoverflow.com/a/27453371/14197670). It seems that this can be ignored.
>    * Received warnings in console for 'Same-Site cookies'. To fix this, I had to add in javascript file the Secure attribute to your SameSite=None cookies. A Secure cookie is only sent to the server with an encrypted request over the HTTPS protocol. I found the solution on StackOveflow.
> * Navigation & Home
>   * Clicked on all navbar links to ensure smooth scrolling is consistent top to bottom, to each section and bottom to top.
>   * Tested links from mobile view Hamburger menu icon, and menu closes when clicking on one of the menu items, as desired.
> * Tours section
>    * Clicked each tours options cards and the content hidden and positions on map appears as expected.
>    * Point A, B e C shows correctly all the informacions about each touristic point.
>  * More section
>    * Tested completed form submission and modal appears confirming email has been sent.
>    * Confirmed that form resets to blank fields after form submission has been completed.
>  * Passed all code through [JSHINT](https://jshint.com/) and the following were rectified as a result. 
>
> ### GENERAL (Site Testing on live page)
> 
>   * Navigation
>     * Clicked Navigation bar Logo/Text and confirmed it returns to Home/Intro.
>     * Clicked About on the navbar and scrolls to correct section.
>     * Clicked Tour on the navbar and scrolls to correct section.
>     * Clicked More on the navbar and scrolls to correct section.
>   * Tour Section
>     * Clicked on each tour option and the tour details section opens and scrolls correctly and shows the accurate content and the points marked on maps
>   * Contact section
>     * Clicked Submit button without any form entries. Expected warning popup retuned of "Please fill out this field". Further, tested all required form fields for same.
>     * The modal window with success message appears correctly after the form submission.
>
> ### RESPONSIVENESS
>
>   * Application tested on all different sizes by Google DevTools: from 360 x 640 up to 1024 x 1366
>   * Viewed site on above range (including Responsive mode) on : Google Chrome, Edge 
>   * Viewed on physical devices: large phone (414px) | large tablet (768px) | Medium laptop (1366px) | Large Desktop screen (1920px)

---

### Code validity

> HTML - [W3C](https://validator.w3.org/) - Markup Validation
> CSS - [W3C](https://jigsaw.w3.org/css-validator/) - CSS Validation
> JavaScript - [JSHINT](https://jshint.com/) - JavaScript code warning & error check. It threw 11 warnings regarding ES6
> TAGS - [Closing Tag Checker for HTML5](https://www.aliciaramirez.com/closing-tags-checker/) - Validates all tags are opening and closing correctly.

---

### Version Control

> - Used Git for version control.
---

### Deployment

This project has been deployed on GitHub Pages with the following process:

> - All code was written on VSCode, a local IDE (Integrated Development Environment).
> - The code was then pushed to GitHub where it is stored in my [Repository](https://github.com/roliveira81/CI-MS2-Taste-Of-SaoPaulo).
> - Under the Settings section of the GitHub repository, scrolled down to GitHub Pages section.
> - Under 'Source' drop-down, the 'Master branch' was selected.
> - Once selected, this publishes the project to GitHub Pages and displays the site URL.
> - There is no difference between the deployed version and the development version.
> - The code can be run locally through clone or download.
> - You can do this by opening the repository, clicking on the green 'Code' button and selecting either 'clone or download'.
> - The Clone option provides a URL, which you can use on your desktop IDE.
> - The Download ZIP option provides a link to download a ZIP file which can be unzipped on your local machine.

### Credits

> ##### Media
>
> - Looking for training to create HTML layouts independently of bootstrap use I ended up on [WEB CIFAR](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ) channel, where I did the three hours class and build the structure of this layout
> - The layout conception from [WEB CIFAR](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ)
> - Text Reveal Effect [WEB CIFAR](https://youtu.be/LKNDqHtIkVg​)
> - Responsive Nav-bar [WEB CIFAR](https://youtu.be/pZUQ7tlbi70​)
> - Hambuger [WEB CIFAR](https://youtu.be/UfPQe-v8CeE)
> - Home, About and Tour sections images from [Pexels.com](https://www.pexels.com)
> - All the icons from [Icons8](https://icons8.com/)
> - As a model for Readme doc from [Jim Lynx Github](https://github.com/JimLynx)
> - The form feedback modal from [sabe.io](https://sabe.io/tutorials/how-to-create-modal-popup-box)

> ##### Content
>
> - The content was extract from the official content web site [CidadeDeSaoPaulo](http://cidadedesaopaulo.com/)
> - The selection and compound of the tours and the texts was self-made
>
> ##### Code Snippets
>
> - CSS: Layout structure adapted from [WEB CIFAR](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ)
> - HTML, CSS e JavaScript Modal structure adapted from [sabe.io](https://sabe.io/tutorials/how-to-create-modal-popup-box*/)
> - Navigation bar adapted from [WEB CIFAR](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ)
> - Send email and Map Init JavaScript functions from Rosie's project [CodeInstitute Class](https://courses.codeinstitute.net/)

---