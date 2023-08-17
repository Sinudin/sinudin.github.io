gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: '.bob',
  content: '.site-container',
  smooth: 1.5,
  effects: true
})
