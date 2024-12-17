# Equiworm

[Deployed Project]()

[GitHub Repository](https://github.com/LukeI50/Horse-Site/)

[Miroboard](https://miro.com/app/board/uXjVL2snal4=/)

_img of multiplatform view_

_introduction to equiworm. User value, intended usage, reason for creation, client specification_

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
4. [Security and Cookies](#security-and-cookies)
5. [Features](#features)
6. [Future Features](#future-features)
7. [Languages and Frameworks](#languages-and-frameworks)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Tools and Resources](#tools-and-resources)
8. [Testing](#testing)
    - [Validation](#validation)
    - [Manual Testing](#manual-testing)
    - [User Story Testing](#user-story-testing)
9. [Deployment](#deployment)
10. [Credits](#credits)

## UX / UI



### Accessibililty and Responsiveness

_Add outline of descisions made regarding Accessibililty and Responsiveness._

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
      <img src="" alt="Inital font choices">
</details>
<br>

Eventually we chose __font choice__ as we felt that it maintained readability while having a professional, trustworthy look.


_Add summary box with image of final font choice_

## Project planning


Initial planning of the project was done using [Miro](https://miro.com). All colour palettes, wireframes and ERDs were posted there and developed over time.

Following this we created a kanban style project board on GitHub and populated it with user stories.

<details>
  <summary>Project Board</summary>
      <img src="" alt="project board">
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
As we had a bried provided by an external client we listened and incorporated their ideas into the project while providing continous feedback on how we can realistically include the required features.

Between the team we divided up work based on team member preference and made sure that we were all updated on eachothers progress. This allowed all developers to input ideas and suggest changes across the entire project.

### User Stories

_Copy user stories from [GitHub](https://github.com/users/LukeI50/projects/9)_

### MoSCoW prioritisation

All of our user stories were sorted using the MoSCow prioritisation system:

__Must Have__: Features which form our MVP and without which the website would not function.

__Should Have__: Important features which could be missed but should be attempted during this iteraiton.

__Could Have__: Potential additions which would improve the project but aren't neccessary for the MVP.

__Wont Have__: Features which will not be included in this iteration of the project either because they are unimportant or would take up too much development time relative to their value.

### Wireframing

Wireframing was done using [Miro](https://miro.com/). Standard templates were used and then adapted for all the different pages of the website. As these wireframes were used only as a general structure they will differ slightly from our final project.

_Wireframing images_

### Entity Relationship Diagrams

ERDs were created using _link_.

_erd images_

## Security and Cookies

_Can include if neccessary_

## Features

- _placeholder_
- _placeholder_
- _placeholder_
- _placeholder_
- _placeholder_

## Future Features

- _placeholder_
- _placeholder_
- _placeholder_
- _placeholder_
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

- _Placeholder_
- _Placeholder_
- _Placeholder_

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

### User Story Testing

_Table with user story testing with PASS / FAIL values._

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