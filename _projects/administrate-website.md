---
layout: project
casestudy: true
category: marketing
barba-namespace: project

title: "Administrate Website"
seo_description: "In-house rebuild of a B2B SaaS marketing website using Astro, Sanity CMS, Tailwind, and Claude Code. Faster deployments, API-driven content automation, and a near-perfect post-launch SEO audit."

featured-image: "administrate/administrate_website_hero.png"
featured-size: "cropped"
featured-alt: "Administrate marketing website on desktop and mobile."
featured-bg: "#3B1EA3"

excerpt: "Full-stack rebuild of a legacy WordPress site"

hero:
  title: "Administrate Website"
  tagline: "A B2B SaaS marketing site"
  desc: "Strategy, planning, and code for in-house rebuild of a B2B SaaS website."
  image: "administrate/administrate_website_hero.png"
  image-size: "cropped"
  image-alt: "Administrate marketing website on desktop and mobile."
  roles: "Creative Direction, Strategy, Architecture, Development"
  timeline: "6 months"
  impact:
    - "PageSpeed 50–64 → 94 (mobile)"
    - "CMS edit time: 6–8 hrs → 15 min"
    - "£1k annual cost savings"
  organization:
    name: Administrate
    url: "https://www.getadministrate.com/"

sections:
  - type: "default"
    layout: "text-only"
    title: "Background"
    desc: |
      When I started at Administrate in 2021, the company had a Wordpress website that had been built by an external (much-derided) agency and then reworked by the Software Engineering department. By 2025, the CMS was excruciatingly slow and tech debt acquired over the years meant a fragile, poorly performing site. Editors complained constantly, as a simple content update could eat up most of a day. Additionally, page speed scores were unpredictable and cost to maintain was high.

      Rebuilding the whole site with a two-person team (one of whom being myself, who could only devote part of my time to the project), a hard deadline, and no agency support was a risk, but one that I felt was finally worth taking.

  - type: "default"
    layout: "text-only"
    desc: |
      ## The problem
      There were three main issues that needed to be resolved:

      **Performance.** PageSpeed scores hovered around 70 on desktop and in the 40s on mobile, both fluctuating unpredictably. We were on a legacy WPEngine package and running ancient versions of Bootstrap and jQuery. Our caching was a dance between WPRocket and Cloudflare, both having to be cleared in a particular order so we could be sure that the final content was visible. Speed improvements we made over time would still level back out to disappointing scores after a week or so.

      **Editorial experience.** We were on WordPress Classic with no live editing and a painful page-building experience. The CMS regularly seized up on editors mid-workflow, sometimes losing us hours of work. Almost a decade of old content lingered on the site, including over 300 irrelevant redirects - all impossible to audit or clean up in any reasonable way.

      **Technical debt.** Plugins were in varying states of neglect. Hosting, caching, and tag management were all spread across separate tools with no coherent system connecting them. Worse, migrating changes wasn't easily done required an unnecessarily complicated process using tags and terminal. Hosting, caching, and tag management spread across separate tools with no coherent system connecting them. The site ran on institutional knowledge more than good architecture.

  - type: "default"
    layout: "text-only"
    desc: |
      ## My role and approach
      I led the project end to end: making the business case, selecting and documenting the tech stack, developing and managing the timeline, and contributing production code alongside a skilled Web Developer based in Qatar.

  - type: "default"
    layout: "visual-only"
    visual:
      type: "image"
      caption: "Project planning and development process."
      image: "administrate/administrate_website_plan_01.jpg"
      image-alt: "Written documentation for collaborating with Web Developer on auditing and re-evaluating our current tooling."
  - type: "default"
    layout: "text-only"
    desc: |
      Before writing a single line of new code, I pushed for a full audit of every page, template, component, and integration on the existing site. That audit became a Gantt chart covering six months, which I presented to my manager for sign-off.

  - type: "default"
    layout: "visual-only"
    visual:
      type: "image"
      caption: "Gantt chart and project plan created in Monday.com."
      image: "administrate/administrate_website_plan_02.jpg"
      image-alt: "Gantt chart for the six-month website rebuild project."

  - type: "default"
    layout: "text-only"
    desc: |
      Early on, we decided to avoid rebuilding in WordPress Gutenberg. We had the chance to go with something completely new, and very little of our website needed anything dynamic. 

      We researched static site builders, CMS options, hosting considerations, and packages. All got input from our Marketing team and others across the company, including our CEO and VP of Engineering. Bringing in those perspectives early meant that final decisions would have genuine buy-in.

      I also made the call to adopt Claude Code for both of us. To meet our deadline, we had to move faster than a two-person team realistically could on a project of this complexity. AI-assisted development made that possible. At the time, just a few engineers were trialing it, and we joined that early cohort: quickly becoming power users. My usage ended up being so high that our admin reached out directly to ask what I was doing with it!

  - type: "default"
    layout: "text-only"
    desc: |
      ## Technical decisions
      Each of our tools were chosen to get us better performance, more flexibility, easier upkeep, a better editing experience, and an excellent site experience for our end-users. We ultimately went with the following:

      **[Astro for static site generation.](https://astro.build/)** A natural fit for a marketing site where most pages are text and image-heavy and don't need client-side dynamism. Build times are short, pushing to production is straightforward.

  - type: "default"
    layout: "visual-only"
    visual:
      type: "image"
      caption: "Homepage of the new website."
      image: "administrate/administrate_website_01.jpg"
      image-alt: "Mobile and desktop versions of the homepage and navigation."

  - type: "default"
    layout: "text-only"
    desc: |
      **[Sanity CMS for content management.](https://www.sanity.io/)** We considered going CMS-free, but recognized that for a website of our size, it would be challenging for anyone but web developers to update. It would also mean hacking some sort of custom Markdown solution to implement rich page-building functionality. 

      Moreover, we had a lot of existing content to shift over to the new website and knew we'd benefit most from a CMS with a solid API for us to migrate existing content from WordPress.

  - type: "default"
    layout: "visual-only"
    visual:
      type: "image"
      caption: "Visual editing feature implemented on our website's CMS."
      image: "administrate/administrate_website_cms_01.jpg"
      image-alt: "Visual editing in Sanity."

  - type: "default"
    layout: "text-only"
    desc: |
      The visual editing experience in Sanity was a key deciding factor. Now editors can click directly into text on a preview page rather than navigating a separate admin panel.

      Sanity's structured content model allowed also allows us to design relationships between content types rather than writing duplicative data across a WordPress database. This means that we can always update a testimonial, stat, and more from a single location and rest easy knowing that it will be updated everywhere.

      Additionally, Sanity's highly configurable. We created many custom React components for functionality that had only been a pipedream in our old WordPress instance. For example, an icon-picker directly integrated with our brand's icon library (Font Awesome) was suddenly trivial to implement.

  - type: "grid"
    layout: "side-by-side"
    caption: "Customizations in our CMS."
    visual:
      - image: "administrate/administrate_website_cms_03.jpg"
        image-alt: "Custom icon picker that is integrated with our brand's icon library."
      - image: "administrate/administrate_website_cms_02.jpg"
        image-alt: "Screenshot of customizations we made within CMS for different types of guides."

  - type: "default"
    layout: "text-only"
    desc: |

      **Cloudflare for hosting and tag management.** We had already shifted from Google Tag Manager to [Cloudflare's Zaraz tag management solution](https://developers.cloudflare.com/zaraz/) for hosting our pixels, scripts, and tags. So it was a natural choice to begin hosting our site on Cloudflare, too. Using Cloudflare Workers meant we could manage caching, deployment, A/B testing, and analytics in a single, trusted location. Our two-tool cache-clearing ritual was gone on day one.

  - type: "default"
    layout: "visual-only"
    visual:
      type: "image"
      caption: "Deployment structure in our Github repo."
      image: "administrate/administrate_website_deployments_01.jpg"
      image-alt: "Deployment structure in our Github repo."

  - type: "default"
    layout: "text-only"
    desc: |
      **[Preline on bare Tailwind for the component library.](https://preline.co/)** As Preline is built on top of Tailwind with no abstraction layer, we could move faster during the build without accumulating new technical debt: any developer who picks this up in the future will find familiar, widely-documented patterns.

  - type: "default"
    layout: "text-only"
    desc: |
      ## What I built
      Beyond directing the project, I was a hands-on contributor. A few things worth highlighting specifically:

      **Real-time visual editing.** I implemented Sanity's visual editing integration personally. Editors can now click directly into any piece of text or content on a live page and edit it in place. No separate CMS tab, no guessing how something will look once published. This was the single most-requested improvement from the editorial team and it required custom work to fit our specific component architecture.

      **Relational content model.** Content that had previously been scattered across the WordPress database is now structured properly. Testimonials are a discrete document type in Sanity, related to a Person, which is related to a Company. Every relationship has fallbacks — if a field is missing or a name changes, the site handles it gracefully. Updating a job title or company name now happens once, in one place, and propagates everywhere.

      **Custom SEO with Graph Schemas.** Replaced Yoast with a bespoke SEO layer that generates structured data dynamically. Video indexing, meta information, and open graph tags are all handled in code, with schema types matched to the content being rendered.

      **Design tokens and CI pipeline.** I set up design tokens for the full project and configured the GitHub Actions deployment pipeline. Our process is now clean, documented, and reproducible. No institutional knowledge is required to deploy, and technically anyone can run a deployment using the Github UI.

  - type: "default"
    layout: "text-only"
    desc: |
      ## Results
      The new site launched on time, six months after kickoff. Everything went so smoothly that it was almost anticlimatic. Internally, the immediate reaction across the company was to comment on how fast everything now felt. But months later, we also have the data:

  - type: "grid"
    layout: "side-by-side"
    caption: "Stats comparing a 3mo period before and after launch; performance score on mobile."
    visual:
      - image: "administrate/administrate_website_analytics_01.jpg"
        image-alt: "Form fills up 175%."
      - image: "administrate/administrate_website_analytics_02.jpg"
        image-alt: "Page views up 33.3%."
      - image: "administrate/administrate_website_analytics_03.jpg"
        image-alt: "Pageviews per user up 32%."
      - image: "administrate/administrate_website_analytics_04.jpg"
        image-alt: "Performance at 91 (mobile) and 94 (desktop) for the website."

  - type: "default"
    layout: "text-only"
    desc: |
      The improvement in CMS edit time also deserves a little context. 

      Changes previously meant waiting on WordPress to load (one particularly long page became almost uneditable), navigating the Classic editor, clearing WPRocket then clearing Cloudflare in sequence, and waiting on the deployment dance. Now, launching a whole new page can take 15 minutes start to finish using Sanity's API and a good script.

      Beyond the numbers, the project meant something harder to quantify: that a two-person in-house team working with the right tools and a clear process can deliver infrastructure work that most companies would hand to an agency. It was genuinely fun to roll up my sleeves and get to collaborate in this way, and the results speak for themselves.

      >"She's rebuilt our website with a small team, managed our SEO and advertising agency partners, transformed our event presence and led the sprints that keep our marketing team moving with real momentum. She covers an enormous amount of ground and does it incredibly well."
      >
      > — Brent Daily, VP of Marketing at Administrate
---
