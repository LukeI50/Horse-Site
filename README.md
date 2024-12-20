# Equiworm

_img of multiplatform view_

[Deployed Project]()

[GitHub Repository](https://github.com/LukeI50/Horse-Site/)

[Miroboard](https://miro.com/app/board/uXjVL2snal4=/)

Equiworm is an online tool for horse owners that allows them to assess the risk of worm infection and decide whether giving treatment is neccessary.

Users can access the site and see some brief information about how to use the tool and why it is important to know when to give medication and when not to.

This website was created in response to the limited availability of easy to use, online tools for this issue.

### Notes

<details>
<summary>Installing Requirements</summary>

To install all requirements from requirements.txt run...
`pip3 install -r requirements.txt`

If Psycopg2 fails install on environment, run
`pip3 install psycopg2~=2.9.10`

</details>

## Table of Contents

1. [Equiworm](#equiworm)
2. [UX / UI](#ux--ui)
    - [Accessibility and Responsiveness](#accessibililty-and-responsiveness)
    - [Colour Palette](#colour-palette)
    - [Fonts](#fonts)
3. [Project Planning](#project-planning)
    - [Agile](#agile)
    - [User Stories](#user-stories)
    - [MoSCoW Prioritisation](#moscow-prioritisation)
    - [Wireframing](#wireframing)
    - [Entity Relationship Diagrams](#entity-relationship-diagrams)
4. [Features](#features)
5. [Future Features](#future-features)
6. [Languages and Frameworks](#languages-and-frameworks)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Tools and Resources](#tools-and-resources)
7. [Testing](#testing)
    - [Validation](#validation)
    - [Manual Testing](#manual-testing)
8. [Deployment](#deployment)
9. [Credits](#credits)

## UX / UI

### Accessibililty and Responsiveness

Mobile first design choices led our development process for the front end. All areas of the website should resize to suit a phone screen. This is particularly important for this project as we imaged that the typical user would be accessing the site from a mobile phone while they are in a paddock or stable with their horse or horses.

We also decided to try and keep the load times of the website to a minimum as we expected that fields and stabes will likely not have the best mobile internet coverage.

### Colour Palette

The colour palette for this project was chosen by looking at different horse coat colours.

<details>
  <summary>Horse coat image insipration</summary>
      <img src="" alt="Horse coats">
</details>
<br>

We ended up chosing the colours shown below. They were picked based on the Piebald horse coat colour with some additional off-white and gray colours to fill in gaps.

<details>
  <summary>Colour Palette</summary>
      <img src="" alt="Colour palette">
</details>
<br>

### Fonts

We started with a variety of fonts, sticking mainly to sans serif fonts for readability.

<details>
  <summary>Font choices</summary>
      <img src="assets/readme_images/equiworm_fonts.png" alt="Inital font choices">
</details>
<br>

Eventually we chose __font choice__ as we felt that it maintained readability while having a professional, trustworthy look.


<details>
  <summary>Project Board</summary>
      <img src="assets/readme_images/project_board.png" alt="GitHub project board">
</details>
<br>

## Project planning

Initial planning of the project was done using [Miro](https://miro.com). All colour palettes, wireframes and ERDs were posted there and developed over time.

Following this we created a kanban style project board on GitHub and populated it with user stories.

<details>
  <summary>Project Board</summary>
      <img src="assets/readme_images/project_board.png" alt="GitHub project board">
</details>
<br>

The user stories were created following a consistent style:

```
As a (role) I can (ability) in order to (outcome).

Acceptance Criteria 1: 

Acceptance Criteria 2: 

Acceptance Criteria 3: 
```

### Agile 

We applied agile methodology to our planning. In the intial stages the were no concrete commitments to non-essential choices. All essential parts of our project were decided upon early and we made those the focus of our work as we headed to our minimum viable product.

#### Iterations
Given that this project represents only one sprint or interation we moved all of our _Must Have_ and _Should Have_ user stories to the to-do section of our project board. This ensured that, by the end of he project we would have an MVP which had full functionality for a user and could provide a useful service.

#### Collaboration
As we had a brief provided by an external client we listened and incorporated their ideas into the project while providing continous feedback on how we can realistically include the required features.

Between the team we divided up work based on team member preference and made sure that we were all updated on each others progress. This allowed all developers to input ideas and suggest changes across the entire project.

### User Stories

#### Must-have User Stories 

```
As a site user I can view the about page, in order to understand the websites purpose and how to use it.

AC1: Users can easily navigate from the home page to the about page.
```

```
As a Horse owner or caretaker, I can complete a detailed questionnaire about my horse's risk factors for worm infection so that I can take appropriate preventative action or treatment measures.

AC1: Questionnaire results can be viewed at the end.
AC2: Questionnaire has meaningful questions with scores
AC3: Admins can edit the questionnaire.
```

```
As the website administrator I was to update the list of parasites, treatments, and prevention methods so that the information remains current.

AC1: Info pages can be edited from the admin panel.
```

```
As a site user I can recieve a response when I submit my form in order to get the relevant information from my form.

AC1: Form logic provides the appropriate information t based on user input.
AC2: User approval messages show on correct form submission.
```


#### Should-have User Stories - for the second iteration
```
As a Horse owner or caretaker, I want to complete a detailed questionnaire about my horse's risk factors for worm infections, So that can take appropriate preventive or treatment measures.

AC01 - Questionnaire results can be viewed at the end.
AC02 - Questionnaire has meaningful questions with scores.
AC03 - Admin can edit questionnaire.
```
```
As an admin I can create, read, update and delete blog posts in order to provide relevant information to the reader.

AC1: CRUD functionality incorporated in Django /admin panel.
AC2: Blog posts are visable to users on the appropriate page.
AC3: Only authenticated admin users can change or create blog posts.
```

```
As a user I can view a specific blog post in order to find out more about a given topic.

AC1: Single blog post view displays full blog details. Title, Date of Creation, Images, Content and Author.
AC2: Main page blog post detail view can link to single blog post view.
```

### MoSCoW prioritisation

Our user stories were sorted using the MoSCow prioritisation system:

__Must Have__: Features which form our MVP and without which the website would not function.

__Should Have__: Important features which could be missed but should be attempted during this iteraiton.

__Could Have__: Potential additions which would improve the project but aren't neccessary for the MVP.

__Wont Have__: Features which will not be included in this iteration of the project either because they are unimportant or would take up too much development time relative to their value.

### Wireframing

Wireframing was done using [Miro](https://miro.com/). Standard templates were used and then adapted for all the different pages of the website. As these wireframes were used only as a general structure they will differ slightly from our final project.

<details>
  <summary>ERD Images</summary>
      <img src="assets/readme_images/wireframe_1.png" alt="Mobile view wireframe">
      <img src="assets/readme_images/wireframe_2.png" alt="Desktop view wireframe">
</details>
<br>

### Entity Relationship Diagrams

ERDs were created using _link_.

<details>
  <summary>ERD Images</summary>
      <img src="assets/readme_images/ERD_1.png" alt="ERD blog post and feedback image">
      <img src="assets/readme_images/ERD_2.png" alt="ERD for worming survey">
</details>
<br>

## Features

- _placeholder_
- _placeholder_
- _placeholder_
- _placeholder_
- _placeholder_

## Future Features

- Horse owners can signup and login.
- Horse owners can create a profile and save previous completed surverys as a record.
- Blog post section to the website to keep users updated about current related topics.
- 
- _placeholder_

## Languages and Frameworks

### Languages

- HTML
- CSS
- Python

### Frameworks

- Django
- Bootstrap

### Tools and Resources

- [Inkscape](https://inkscape.org/) for creating vector images for logos.
- [chatGPT](https://chatgpt.com/) for code checking and suggestions.
- [Miro](https://miro.com/) for cloud based project planning.

## Testing

### Validation

In order to ensure that our code met the required guidelines we used the HTML and CSS validators from the [W3C](https://www.w3.org/) and a Python linter.

__[HTML Validator](https://validator.w3.org/)__
<br>

- _Info and images here_

__[CSS Validator](https://jigsaw.w3.org/css-validator/)__
<br>

- _Info and images here_

### Manual Testing

Maual testing was done by simply navigating through the site and making sure that all areas were working as intended. We also passed the product to non-developers to ensure that the design was intuative and to avoid issues realted to over familiarity with the project.

## Deployment

1. Create a new app on [Heroku](https://www.heroku.com/). Choose and app name and location. 
2. Under the __deploy__ tab connect Heroku with your repository.
3. In your development environment ensure that `debug` in django settings.py is set to `False` and all secret keys and database urls are hidden.
4. Set appropiate variables in Settings > Config Vars in your Heroku project.
5. On Heroku website under the deploy tab, select either automatic or manual deploys.
6. Select which branch you want to deploy from, for example `Main`.
7. Press Deploy and wait for Heroku to finish building the site.
8. You can then open app from the deploy page or from the apps dashboard.

## Credits

_Credit info_