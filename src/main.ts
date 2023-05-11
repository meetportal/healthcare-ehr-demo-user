import { STORE, WINDOW, usePortalService } from '@meetportal/portal-js'
;
(async function () {
  try {
    const portal = usePortalService()

    let ehrUser: any

    portal.subscribe(WINDOW.ON_URL_CHANGE, '', (url: string) => {
      if (url.includes('login') && ehrUser) {
        ehrUser = null
        portal.setUser()
      } else if (!ehrUser) {
        portal.sendRequest(STORE.GET_LOCAL_STORAGE_ITEM, 'ehrUser').then(s => {
          if (s) {
            ehrUser = JSON.parse(s) as { id: string; name: string }
            try {
              if (ehrUser.id) {
                portal.setUser({
                  id: ehrUser.id,
                })
              }
            } catch (e) {
              portal.setUser()
            }
          }
        })
      }
    })
  } catch (error: any) {
    console.error(error)
  }
})()
