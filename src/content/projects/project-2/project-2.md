---
path: "/projects/project-2"
cover: "./blocks.jpg"
date: "2019-12-16"
title: "Learned 068"
---
# Learned 068
* DevOps concept is a culture, not just some technology. It's trying to more strongly couple the Development and Operations, hence it's name.
* Continuous integration is a practice in DevOps culture which means that developers continously integrate new changes into single shared repository. Continous integration makes it easier to detect e.g. incompatibilities in work of several different developers.
* Continuous delivery means being able and aiming to deliver new features as soon as they are ready for production. CI practice helps to shorten the feedback loop from the customers and improve the quality of the products.
* Important part of the DevOps culture is automating all these practices as far as possible. In CI/CD practices this means making automated CI/CD pipelines that e.g. test and deploy the code automatically if the tests are passing.
* Good CI/CD tool for github based projects is Travis CI. Travis CI is easy to use with .travis.yaml file in the root of the project. Other tools, for example Jenkins or gitlab CI/CD might be a good solution if the projects are stored elsewhere than github.
* CI/CD automation tools like Travis clone the project from the repo to a container where they build the project and perform desired actions in an environment that can be configured by the developers. Finally the built project can be deployed into for example test environment or production environment.
* I also learned some new things about GatsbyJS by building the course project with it. It was interesting to see how travis CI can be plugged into a Gatsby project. I've worked with GatsbyJS before but never built a complete project from a scratch. In my opinion it's an interesting technology and I was glad I was able to experiment with it during the course.
* The most difficult part of the course was to see the big picture of CI/CD pipelines and how they work. It was a huge help that I also completed Cloud systems and technologies course at the same time. Without this knowledge about virtual machines and cloud I suppose my learning could've been shallower.

### Sidenotes
I built the course project (this webpage) to work as a skeleton for my portfolio page, which I'm continuing to build after the course. That's why there might be some odd namings (e.g. projects instead of blog posts) in the source code. However I tried to edit everything visible on the page to suit the purpose of this exercise project.



