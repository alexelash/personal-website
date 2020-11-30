---
layout: project
title:  "Fishway"
seo_description: "UX/UI, front-end development, and animation for a Fairmount Waterworks educational application."
featured-image: "fishway/fishway_hero.png"
featured-alt: "Screenshot of winning screen for the Fishway game."
featured-bg: "#c5eafb"
featured-size: "cropped"
casestudy: true
excerpt: "UX/UI design, front-end, animation."
hero:
    title: "Fishway touchscreen"
    tagline: "An educational game"
    desc: |
        The Fairmount Waterworks is a gem of a museum located in Philadelphia along the Schuylkill trail. The museum planned to redesign an application that accompanied their tour of the fishway, just outside of the museum. 

        Developed under the creative direction of Victoria Prizzia from [Habithèque](https://www.habitheque.com/)
    image: "fishway/fishway_hero.png"
    image-alt: "Screenshot of winning screen for the Fishway game."
    image-bg: "#c5eafb"
    image-size: "cropped"
    roles: "UX/UI design, front-end, animation"
    organization:
        name: Azavea
        url: "https://www.azavea.com/"
sections:
    - type: "default"
      layout: "text-only"
      title: "Background"
      desc: |
        This was a somewhat unusual project for Azavea, and presented a great opportunity to design something special for a local institution. The team also worked with some new-to-us techniques, writing a React App using [styled-components](https://styled-components.com/) rather than a classic SASS project set-up. 
    - type: "default"
      layout: "text-only"
      title: "Design research"
      desc: |
        The application already existed and was used by employees and visitors of the museum. As a result, we already knew the audience for the application was necessarily broad. Our first step was to make a visit to the site, notebooks and camera-phones in hand. To get the best data, we went during a high-traffic time and intended to conduct guerilla interviews. My aim was to: 

        1. Better understand the context in which the application is being used.
        2. Observe actual users and ask them questions about their experience.

        I felt it was important to include the development team in this process so that they could develop empathy for the user and become thought-partners at this early stage of the project. 
    - type: "grid"
      layout: "big-small-small"
      caption: "My colleagues and I at the Fairmount Waterworks museum."
      visual: 
        - image: "fishway/fishway_research_04.jpg"
          image-alt: "Photograph of the original Fishway application, and hand pinching on the screen."
        - image: "fishway/fishway_research_01.jpg"
          image-alt: "Two people standing in front of the original Fishway application."
        - image: "fishway/fishway_research_03.jpg"
          image-alt: "Photo from below of the original Fishway application."
    - type: "default"
      layout: "text-visual"
      desc: |
        Findings from our museum-visit ended up being invaluable to the design and development process. We learned a lot about how people used the application, what other exhibits looked like, and technical issues in the current application. As a company, we don’t typically work on games or exhibit applications, so we also were able to get a good feel for what gameplay could be like. Some key findings were:

        - The museum was fairly noisey, which ultimately influenced how we handled sound.
        - There were scrolling issues in the existing application, that caused confusion for even employees at the museum.
        - Users of the application felt that gameplay was too easy.

        After compilling our findings, I started by developing a simple diagram of a new organization for the application, and then black-and-white wireframes of improved gameplay.
      visual: 
        type: "image"
        image: "fishway/fishway_wireframes_01.jpg"
        image-alt: "An information architecture diagram underneath a wireframe."
        caption: "A diagram of a revised page structure and early wireframe."
    - type: "default"
      layout: "text-visual"
      title: "Visual design"
      desc: |
        Once we had established a new structure, I began working on a new visual style. Fortunately, we were able to use illustrations that had already been embedded into the application. I wanted to ensure that the application design would act as a semi-neutral frame for the illustrations to act as the star. 

        To this end, I established early on that the concept for the application’s structure would be going to different depths of the fishway. As the user navigates to different sections, the screen behind the content changes color to indicate depth, with the entrance and the game being partially above the waves.
    - type: "grid"
      layout: "small-small-big"
      caption: "Final visual designs."
      visual: 
        - image: "fishway/fishway_app_01.jpg"
          image-alt: "Several button styles and card styles within the application."
        - image: "fishway/fishway_app_03.jpg"
          image-alt: "Several button styles and card styles within the application."
        - image: "fishway/fishway_app_04.jpg"
          image-alt: "Several button styles and card styles within the application."
    - type: "default"
      layout: "text-only"
      title: "Front-end development"
      desc: |
        The application was built in React – it was my first opportunity to use the framework. Though the application already existed, it was built long enough ago that it made sense for our development team to start from scratch. 

        After some Udemy courses and a deep dive into the (excellent) React docs, I began applying the color scheme, creating reusable UI components, and incorporating a new typeface. I wanted mimimal UI, and chose to build the front-end upon [Rebass.js](https://rebassjs.org/). This offered some much-needed flexibility, while giving us a light-weight starting point.
    - type: "default"
      layout: "text-visual"
      title: "Animation"
      desc: |
        Last but not least, we incorporated AirBnB’s [Lottie library](https://airbnb.io/lottie/) in order to use custom SVG illustrations, as well as [React Transition Group](http://reactcommunity.org/react-transition-group/css-transition) in order to animate fish on the homescreen and smooth transitions between sections of the application.
      visual:
        type: "video"
        path: "fishway/fishway_animation_01.mp4"
        

---