# MS2
milestone 2 project
# LAMUR
![image](https://user-images.githubusercontent.com/63070414/169714514-7aa74372-d2ba-4026-989e-b59de4cf9e26.png)

- Link to finished product will be put here later

## Author
Patrick Zoet

## Project Overview
- The basics of the project idea was from a colleague whom is starting her own make up brand.
- She wanted a simple website with mainly black and white features and simplicity to showcase some of her products and services in the future.

## UX

### Project Goals
- This project goal was to have a simple and clean website
- list the products in terms of importance (discussed with the colleague to meet her wishes)
- mainly focussed on women between the age of 16 to 30

#### User Goals

- The main focus is based on women who want to book make up stylist
- Buy make up products provided by LAMUR

#### Developer Goals

- My personal goals as developer were pushed due to a very big time limit on basically all the projects, therefor i wanted to catch up with some custom CSS
which I did not have the time for in my previous project.
- The second goal was to catch up as much as i can to automate at least one process and hopefully be able to squeeze in Email.js as well to automate emails
for booking the artist(s)
- further more of course to keep progressing in UX and UI design.

#### Website Owner Goals

The owner of the website wanted to get inspiration for websites to build in the future to launch her website late 2022, this to sell products
and have bookings as a make up artist

### Design Choices
- The main design feature was simplicity, therefor I chose for a simple layout without much things going on.
- Second choice was to make certain parts feel like its an actual magazine that youre scrolling through.
- the website was meant to feel similar to a phone use while using it on the bigger screens as  well.
- intentionally had a lot of white space with only things in the middle except for the navbar

#### Colors

- Black & White are the main colors of this website, this was the choice of the colleague, I discussed with her that the website could become a bit blend
and that certain other colors would fit the make up theme better, but she was set on these colors as primary (almost only) colors.
- There are a few accent colors definition, example around the brand name on the landing page which will be matching with the make up line name color "BADDIE"
which is gold.

#### Typography

- Font sizes chosen to be mostly 50% off of eachother.
- The font families are chosen because "Varela" (for headers) are the same as the logo
and "Lora" to keep the feel of a magazine.
![image](https://user-images.githubusercontent.com/63070414/169715520-b2a4b314-98c4-4471-a9a4-e3f764c4d254.png)
![image](https://user-images.githubusercontent.com/63070414/169715526-3feeb01f-0435-4ea6-8dd7-c6d10781c1d8.png)
https://fonts.google.com/specimen/Varela
https://fonts.google.com/specimen/Lora?query=lora


#### Images

The current images are taken from https://unsplash.com/ this because her current photos where not available yet.
The images do vary in color schemes and do not perfectly match the intended look, which will change when the owners images are available.
I did put all the current products as they fit the upcoming products from the owner.

#### Design Elements

- list out the type of elements you want to use on your site, this will help you  when choosing a framework and goes hand in hand when doing the wireframes. If you did something out of the ordinary, or think something was particularly clever, add a sentence and a screenshot or reference the file the code or css is in.

> - top menu (desktop navigation)
> - footer
> - containers/cards (products, dynamically build with json)
> - buttons (contact button etc.)
> - text input (intended with contact form)
> - textarea inputs (intended with contact form)
> - dropdowns (burger menu)
> - images
> - tooltips (intended to put this with the contact form)
> - icons (favicon)
> - contact form (intended to do but not enough time)


#### Animations and Transitions

- hover state effects for menu on desktop change of color, and size of contact button
- transitions intentionally put in before and after to make certain the transtions were smooth both ways.
- smooth scrolling through webpage when clicked action

#### Custom Javascript
learning from https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
and with the help of Miss Mun
- js customized to dynamically build the products page


### Wireframes
####desktop
![image](https://user-images.githubusercontent.com/63070414/169716097-6b087a64-177f-489c-9ff6-2aaed4d6a0fe.png)
![image](https://user-images.githubusercontent.com/63070414/169716111-6bc9c747-f096-4705-83de-84ada25513db.png)
![image](https://user-images.githubusercontent.com/63070414/169716122-7c7753ca-4e41-4864-8e7b-16e96dea59a7.png)

####Mobile
![image](https://user-images.githubusercontent.com/63070414/169716303-f2252a0e-40e3-494a-aa89-c9d00f1d2fae.png)
![image](https://user-images.githubusercontent.com/63070414/169716314-8b376cb2-da1c-4118-934e-bf77f34a62c4.png)
![image](https://user-images.githubusercontent.com/63070414/169716320-e787f89f-db41-4f68-8103-b4c7a04550b7.png)

### Features

- Landing section is used to display the brand and the latest released make up line with a link to it.
- The "main" section is used to book a call with the make up artist since this will be the main income at the begin this is showed first.
- Product section is used to showcase the product and later when detirmined the prices and depending on owners choice a add to shopping or a contact form to order.

#### Future Features
- possible selling page
- updated images and products, including added products and changed products.
- contact form + email system with API
- shop locations
- detailed contact list

### Programing Languages
- CSS 
- JS
- HTML
- Markdown

### Frameworks and Extensions
- bootstrap 5

### Fonts
- Google fonts Varela & Lora

### Tools
- Github to commit and host the project
- VSC as IDE to watch live changes to ease the workflow (I did not link this to my github yet which I will do for the next project to also commit directly)
- Balsamic for the wireframes
- https://uigradients.com/ for gradients 

## Testing
- Issue with mobile nav bar not closing when event clicked.
- scrolling to products bit too far down.
- contact button no function due to time issue
- box shadow landing bottom not overlapping as intended

### HTML validator
![image](https://user-images.githubusercontent.com/63070414/169728893-096e07f5-1b74-408d-9c88-802fc5924657.png)
### CSS validator
![image](https://user-images.githubusercontent.com/63070414/169728963-2d2936c9-2f55-407c-a623-02c36dd4afae.png)


### Lighthouse Audits 
#### Desktop
![image](https://user-images.githubusercontent.com/63070414/169727212-3e4ae232-954b-476b-ad32-713c6848df34.png)

#### Mobile
![image](https://user-images.githubusercontent.com/63070414/169727241-7858ed85-4fc6-4910-aef7-d52a52a448b5.png)

main issue loading size img takes too long, imporoved since last project.


## Credits
- Malia for the READ.me template
- [Dr Mun helped me ](https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm) as help for the json
- https://uigradients.com used for gradients
- https://blog.logrocket.com/three-ways-style-css-box-shadow-effects/ starting point for shadow effects
- https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0 burger menu
- https://unsplash.com/ used for images


