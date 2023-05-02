import { STORE, usePortalService } from '@meetportal/portal-js'

(async function () {
  try {
    const portal = usePortalService()

    portal.onSessionChange(session => {
      console.log('🍀 session', session)
    })

    const ehrUser = await portal.sendRequest(STORE.GET_LOCAL_STORAGE_ITEM, 'ehrUser')
    console.log('🍀 ehrUser', ehrUser)

    // if(ehrUser) {
    //   portal.setUser({
    //     id: ehrUser.id,
    //   })
    // }
  
    // const response = await portal.echo('Hello, world!')
    // console.log(response)
  
    // const off = portal.subscribe(WINDOW.ON_URL_CHANGE, '*', (url: string) => {
    //   if (!url) return
    //   console.log('URL CHANGED:', url)
    //   off()
    // })
  } catch (error: any) {
    console.error(error)
  }
})()

