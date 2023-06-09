import type { AfterChangeHook } from 'payload/dist/collections/config/types'

// ensure that the home page is revalidated at '/' instead of '/home'
export const formatAppURL = ({ doc }, locale?: string): string => {
  const pathToUse = doc.slug === 'home' ? '' : doc.slug
  const { pathname } = new URL(`${process.env.PAYLOAD_PUBLIC_SITE_URL}/${pathToUse}`)
  // TODO will /en revalidate / and vice versa?
  return `${locale ? `/${locale}` : ''}${pathname}`
}

// Revalidate the page in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
export const revalidatePage: AfterChangeHook = ({ doc, req }) => {
  const url = formatAppURL({ doc }, req.locale)

  const revalidate = async (): Promise<void> => {
    try {
      const res = await fetch(
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATION_KEY}&revalidatePath=${url}`,
      )

      if (res.ok) {
        req.payload.logger.info(`Revalidated path ${url}`)
      } else {
        req.payload.logger.error(`Error revalidating path ${url}`, res.body)
      }
    } catch (err: unknown) {
      req.payload.logger.error(`Error hitting revalidate route for ${url}`, err)
    }
  }

  revalidate().catch(e => {
    req.payload.logger.error(`Error revalidating path ${url}`, e)
  })

  return doc
}
