export default defineNuxtPlugin(nuxtApp => {

  /**
   * Append scripts contained in posts to the body
   */
  nuxtApp.hook('page:finish', () => {
    const scripts = window.document.getElementsByClassName('scriptacular')

    for (let index = 0; index < scripts.length; index++) {
      const toInject = document.createElement('script')
      const script = scripts[index]
      toInject.innerHTML = script.innerHTML
      document.body.appendChild(toInject)
      script.remove()     
    }    
  })

})