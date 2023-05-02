import { WINDOW, usePortalService } from '@meetportal/portal-js'

(async function () {
  try {
    const portal = usePortalService()
  
    const response = await portal.echo('Hello, world!')
    console.log(response)
  
    const off = portal.subscribe(WINDOW.ON_URL_CHANGE, '*', (url: string) => {
      if (!url) return
      console.log('URL CHANGED:', url)
      off()
    })
  } catch (error: any) {
    console.error(error)
  }
})()

