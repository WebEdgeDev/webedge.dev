import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function ({ store, $gsap }, inject) {
  inject('scrollTrigger', {
    gsapWhite,
    killGsapWhite,
  })
  const gsap = $gsap
  async function gsapWhite() {
    gsap.registerPlugin(ScrollTrigger)
    const sections = gsap.utils.toArray('.black-sec')
    sections.forEach(section => {
      ScrollTrigger.create({
        // markers: true,
        trigger: section,
        start: 'top 30px',
        end: 'bottom 30px ',
        onEnter: () => store.commit('setWhite', true),
        onLeave: () => store.commit('setWhite', false),
        onEnterBack: () => store.commit('setWhite', true),
        onLeaveBack: () => store.commit('setWhite', false),
      })
    })
  }
  async function killGsapWhite() {
    const triggers = ScrollTrigger.getAll('.black-sec')
    triggers.forEach(trig => {
      trig.kill()
    })
  }
}
