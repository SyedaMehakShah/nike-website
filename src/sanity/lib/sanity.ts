import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // We're using the API, so we don't need the CDN
  token: process.env.SANITY_API_TOKEN,
})

