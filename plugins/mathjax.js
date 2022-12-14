export default defineNuxtPlugin(nuxtApp => {

  nuxtApp.hook('page:finish', () => {

    const MathJaxConfiguration = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    } 

    //This needs to be run before MathJax script injection below
    window.MathJax = MathJaxConfiguration

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    document.body.appendChild(script)
  })

})