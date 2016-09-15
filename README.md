#LogJam

##About Log Jam
This is an opinionated Sass `mixin` that I created to help me manage the creation of complex layouts of the projects and software I am involved in developing, parts of this `mixin` have been in production for a year or two and I feel it finally useful enough that it *might* be of help to other people.

##Motivation

What was once simple, is now complex. From our "phones" to TVs; to even refrigerators; we as web-developers have the ~~burden~~ ~~responsibility~~ pleasure of maintaining many layouts/views for many devices and platforms. It can be quite the task, or dare I say, a "hate machine" to manage such projects. After some time of getting to grips with CSS3's new toy `flexbox`; I found it to solve 99% of my issues without the hangups that grid-systems in the past have burdened me with. With this new found `flex`-ibility came new issues. I had trouble making "high-level" sense of all the properties, modes, ordering, orienting, and sizing features that flexbox comes with. I'd been repeating patterns, but with no way to efficiently manage the needed complexity I was building into my layouts. This `mixin`, LogJam, was born out of that need manage that methodology. So far, it's been pretty successful in my projects, even early on, when it had some hiccups.

##Drawbacks
LogJam for all practical purposes produces a lot of CSS, especially when run through auto-prefixer. This is *mostly* due to the fact that it's taken quite some time for browsers to settle on the semantics for the layout module itself. It also has the burden of being reliant on the somewhat confusing nature of the flexbox properties themselves.