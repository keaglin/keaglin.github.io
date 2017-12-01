portfolio things
  - Who you are
  - What kind of work you do
  - How you do that work
  - Where you want to go next
  - And who YOU really want to work with.

Applicable tips from "10 tips" listicle
1. start with eye candy/teaser (you got 50 milliseconds kid. make em count!) and brief, straightforward blurb about self in 1st person; be concise but friendly
2. clear navigation (simple, consistent; maybe work/about/contact/blog)
3. tell the story of who you are (share a pov on something, current level of expertise, achievements, where you're from, personal trivia)

logo/branding stuff
buy a domain (keaglin.com would prolly work)
~ is where the heart is
~/kevon

I actually want my nav UNDER my hero gif then sticky at the top when I scroll but I don't know how to do that yet and I should totoally focus on base functionality for the moment


TECHNICAL NOTES
body needs to be a flex container of columns for its children to stack (even though that's not what I want as an end result) and it needs to have a direction: column and justify-contents: space-between 

footer needs to be a flex container, justify-content: space-around
each thing should be like a flex item so I can space it nicely
related: how to create those vertical separators?

each section should fill the viewport on its own (eg. work, about, whatevs)
  - so maybe I an add like an "active" class and use that to like apply the styles for filling the viewport
  - click, remove active from all other sections and add it to this one that just got clicked on

sticky nav
  - starts at the bottom of the viewport
  - on scroll down/activating nav, jump to the top of the viewport and stick there
  - issues/complications:
    - header (which contains nav) is already a flex item and cannot be moved outside of that paradigm by other methods (align-self?)
  - may need a mix of positioning and flexboxing
  - want the width of the `li` to light up on hover
  - want the height to be like ~60px

style a tags
  - want them to be uppercase
headings
  - either 8 bit or typewriter style font with black background
