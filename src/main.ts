import { STORE, usePortalService } from '@meetportal/portal-js'

(async function () {
  try {
    const portal = usePortalService()

    const s = await portal.sendRequest(STORE.GET_LOCAL_STORAGE_ITEM, 'ehrUser')
    if(s) {
      const ehrUser = JSON.parse(s) as { id: string, name: string}
      portal.setUser({
        id: ehrUser.id,
      })
    }

  } catch (error: any) {
    console.error(error)
  }
})()
