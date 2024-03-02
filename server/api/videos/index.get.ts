import { Video } from '~/server/models/Video'
//@ts-ignore
import { listVideos } from '~/server/services/videoService'

export default defineEventHandler(async event => {
  const params = getQuery(event)
  let c: any = params.c
  let r: any = params.r
  let count: number = -1
  let random: boolean = true

  if (c) count = parseInt(c)
  if (r && r === '0') random = false

  const videos:Video[] = await listVideos(count, random)
  // appendHeader(event, 'Content-Type', 'application/json')

  const data = {
    createdAt: new Date(),
    toJSON() {
      return videos
    },
  }

  return data
})
