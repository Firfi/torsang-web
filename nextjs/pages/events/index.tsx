import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Gutter } from '../../components/Gutter'
import { LightboxContextProvider } from '../../features/lightbox/provider'
import { Event } from '../../payload-types'
import * as QueryString from "querystring";

type Props = {
  test: string
  docs: Event[]
}

const collectionSlug = 'events' as const

export const getStaticProps: GetStaticProps<Props> = async (
  context,
): Promise<{
  props: Props
}> => {
  const { preview, previewData, params, locale } = context
  const { payloadToken } =
    (previewData as {
      payloadToken: string
    }) || {}
  const q = QueryString.stringify({
    locale
  });
  const pageReq = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/${collectionSlug}/all${q}`,
    {
      headers: {
        ...(preview
          ? {
              Authorization: `JWT ${payloadToken}`,
            }
          : {}),
      },
    },
  )

  if (!pageReq.ok) {
    throw new Error(`Failed to fetch ${collectionSlug} from CMS`)
  }
  return {
    props: {
      docs: (await pageReq.json()).docs as Event[],
    },
  }
}

// TODO 1-time and recurring events
const Events: React.FC<Props> = props => {
  return (
    <Gutter>
      <LightboxContextProvider>
        <div>Events: </div>
        {props.docs.map(doc => (
          <div key={doc.id}>
            <Link href={`/events/${doc.slug}`}>{doc.title}</Link>
          </div>
        ))}
      </LightboxContextProvider>
    </Gutter>
  )
}

export default Events
