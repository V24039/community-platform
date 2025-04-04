import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ResearchUpdateStatus } from 'oa-shared'
import { NotFoundPage } from 'src/pages/NotFound/NotFound'
import { ResearchArticlePage } from 'src/pages/Research/Content/ResearchArticlePage'
import { researchService } from 'src/pages/Research/research.service'
import { pageViewService } from 'src/services/pageViewService.server'
import { generateTags, mergeMeta } from 'src/utils/seo.utils'

import type { LoaderFunctionArgs } from '@remix-run/node'
import type { IResearch, IResearchDB } from 'oa-shared'

export async function loader({ params }: LoaderFunctionArgs) {
  const research = await researchService.getBySlug(params.slug as string)
  const publicUpdates =
    research?.updates.filter(
      (x) => x.status !== ResearchUpdateStatus.DRAFT && x._deleted !== true,
    ) || []

  if (research?._id) {
    // not awaited to not block the render
    pageViewService.incrementViewCount('research', research._id)
  }

  return json({ research, publicUpdates })
}

export function HydrateFallback() {
  // This is required because all routes are loaded client-side. Avoids a page flicker before css is loaded.
  // Can be removed once ALL pages are using SSR.
  return <div></div>
}

export const meta = mergeMeta<typeof loader>(({ data }) => {
  const research = data?.research as IResearchDB
  const publicUpdates = data?.publicUpdates as IResearch.UpdateDB[]

  if (!research) {
    return []
  }

  const title = `${research.title} - Research - ${import.meta.env.VITE_SITE_NAME}`

  return generateTags(
    title,
    research.description,
    (publicUpdates?.at(0)?.images?.[0] as any)?.downloadUrl,
  )
})

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const research = data.research as IResearchDB
  const publicUpdates = data.publicUpdates as IResearch.UpdateDB[]

  if (!research) {
    return <NotFoundPage />
  }

  return (
    <ResearchArticlePage research={research} publicUpdates={publicUpdates} />
  )
}
