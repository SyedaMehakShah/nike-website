export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-12'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skwdRoY4wmmLJi7Ssakk9ZP4VcLzyQXw0rJ1F3Kttdarc6YuwkX6bTNX9ytwimnjKr9vjnu2DJ6ky6gfFvOGuIrsP3ZgL9wXOUyuSkyG62kRi8xSavOTwq0CdFREqpi9mRopfZTZZtZO5ha1zrbZ39JkYdp40rEOHhSgXFT6NNh0PQ4eKiDP",
  'Missing environment variable: SANITY_API_TOKEN'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
