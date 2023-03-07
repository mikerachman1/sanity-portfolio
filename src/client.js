// import { SanityClient } from "@sanity/client";

// export default new SanityClient({
//   projectId: "ewu9y6v1",
//   dataset: "production"
// })

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ewu9y6v1",
  dataset: "production",
  apiVersion: '2023-03-07',
  useCdn: true
})
