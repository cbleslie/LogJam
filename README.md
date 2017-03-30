# LogJam

## About LogJam
This is an opinionated Sass `mixin` that I created to help me manage the creation of complex layouts of the projects and software I am involved in developing, parts of this `mixin` have been in production for a year or two and I feel it finally useful enough that it *might* be of help to other people.

## Installation
`npm install --save-dev logjam-scss`

In your sass build, somewhere...  
`@import 'the/path/to/logjam';`



## Usage
If you want to use flexbox, you really should use an auto-prefixer. This `mixin` **does not handle, and will never handle vendor prefixing**.

### SCSS
```SCSS
$holy-grail: (
  layout-name: 'holy-grail', // Layout name used via [data-layout=""].
  margin-size: $layout-margin, // Default margin size for true
  breakpoints: (
    mobile-small: (
      size: $breakpoint-mobile-small, //screen size breakpoint
      area: (
        header: ( // Area name
          grow: 0, // Flex grow
          shrink: 0, // Flex shrink
          basis: 100%, // Flex Basis
          order: 1, // Render order
          margin: ( // Margin on .wrapper
            bottom: true, // If true, use default margin
            left: false, // If false, no margin
            right: 200rem, // Also accepts custom value, super useful
            top: true
          ),
         	hidden: true, // you can display: none, this hides the area
        ),
        main: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 2,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        nav: (
          grow: 1,
          shrink: 1,
          basis: 100%,
          order: 3,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        aside: (
          grow: 1,
          shrink: 1,
          basis: 100%,
          order: 4,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          ),
          hidden: true
        ),
        footer: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 5,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        )
      )
    ),
    tablet: (
      size: $breakpoint-tablet,
      area: (
        header: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 1,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        main: (
          grow: 1,
          shrink: 1,
          basis: 0%,
          order: 3,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        nav: (
          grow: 0,
          shrink: 0,
          basis: $layout-sidebar,
          order: 2,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        aside: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 4,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        footer: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 5,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        )
      )
    ),
    laptop: (
      size: $breakpoint-laptop,
      area: (
        header: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 1,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        main: (
          grow: 1,
          shrink: 1,
          basis: 0%,
          order: 3,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        nav: (
          grow: 0,
          shrink: 0,
          basis: $layout-sidebar,
          order: 2,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        aside: (
          grow: 0,
          shrink: 0,
          basis: $layout-sidebar,
          order: 4,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        ),
        footer: (
          grow: 0,
          shrink: 0,
          basis: 100%,
          order: 5,
          margin: (
            bottom: true,
            left: true,
            right: true,
            top: true
          )
        )
      )
    )
  )
);

@include logjam($holy-grail); // Call logjam to render the layout.
```
#### HTML
```HTML
<!-- We call the layout in [data-layout] we want to use -->
<div data-layout="holy-grail">    

	<!-- [data-area]'s are regions defined in the SCSS control.-->
    <header data-area="header">
    	<!-- .wrapper exists to control margin, and prevent -->
    	<!-- additional issues with flexbox on IE10 & 11 -->
      <div class="wrapper">
        <!-- Your stuff. -->
      </div>
    </header>

	<!-- We repeat this for every area defined. You can duplicate -->
	<!-- areas if needed. This is useful for evenly repeating blocks. -->
    <main data-area="main">
      <article class="wrapper">
        <!-- Your stuff. -->
      </article>
    </main>

    <nav data-area="nav">
      <div class="wrapper">
        <!-- Your stuff. -->
      </div>
    </nav>

    <aside data-area="aside">
      <div class="wrapper">
        <!-- Your stuff. -->
      </div>
    </aside>

    <footer data-area="footer">
      <div class="wrapper">
        <!-- Your stuff. -->
      </div>
    </footer>

  </div>
```
## Motivation
What was once simple, is now complex. From our "phones" to TVs; to even refrigerators; we as web-developers have the ~~burden~~ ~~responsibility~~ pleasure of maintaining many layouts/views for many devices and platforms. It can be quite the task, or dare I say, a "hate machine" to manage such projects. After some time of getting to grips with CSS3's new toy `flexbox`; I found it to solve 99% of my issues without the hangups that grid-systems in the past have burdened me with. With this new found `flex`-ibility came new issues. I had trouble making "high-level" sense of my layouts and all the properties, modes, ordering, orienting, and sizing features that flexbox comes with. I'd been repeating patterns, but with no way to efficiently manage the needed complexity I was building into my layouts; I was flummoxed. This `mixin`, LogJam, was born out of that need manage my new layout methodology. So far, it's been pretty successful in my projects, even early on, when it had some hiccups.

## Benefits
Maintainability, and standardized usage, relatively clean markup, clear separation of responsibility.

## Drawbacks
LogJam for all practical purposes produces a lot of CSS, or what my standards consider a lot of CSS, especially when run through auto-prefixer. This is *mostly* due to the fact that it's taken quite some time for browsers to settle on the semantics for the flexbox module itself. Compression helps with this issue quite a bit. It also has the user-burden of being reliant on the somewhat confusing nature of the flexbox properties themselves. If you don't know how flexbox works, you will have trouble or be completely baffled using this `mixin` it.
