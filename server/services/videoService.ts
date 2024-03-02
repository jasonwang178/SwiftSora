// @ts-ignore
import { Video } from '~/server/models/Video'

export const listVideos = async (count: number, random: boolean = true) => {
  // TODO:
  // 1. Retrieve video metadata from the database (e.g., PostgreSQL, MongoDB, MySQL).
  // 2. Fetch the video from server-side storage, such as AWS S3.
  // 3. Pagination

  // @ts-ignore
  const data: any = await import('~/server/data/sora_videos.json')
  let videos: Video[] = data.default

  let rand_nums: number[] = []
  let random_videos: Video[] = []
  let size = count > 0 ? count : videos.length

  if (random) {
    while (rand_nums.length < size) {
      let rn: number = Math.floor(Math.random() * videos.length)
      if (!rand_nums.includes(rn)) {
        rand_nums.push(rn)
        // if (videos[rn] === undefined || videos[rn] === null) {
        // }
        random_videos.push(videos[rn])
      }
    }
  } else {
    random_videos = videos
  }

  if (count > 0) {
    if (random_videos) {
      return random_videos?.slice(0, count)
    }
    return {}
  }

  return random_videos
}

export const getOneRandomVideo = (videos: Video[]) => {
  let rn: number = Math.floor(Math.random() * videos.length)
  return videos[rn]
}

export const cherryPickOneVideo = async (prompt: string) => {
  let hitVideo: Video | undefined = undefined

  // @ts-ignore
  const data: any = await import('~/server/data/sora_videos.json')
  let videos: Video[] = data.default
  if (prompt) {
    const countOccurrences: Function = (arr, target) => arr.reduce((count, item) => (item === target ? count + 1 : count), 0)

    const inputTexts: string[] = prompt.split(' ')
    let occurrences: number = 0
    videos.forEach(video => {
      const videoTexts: string[] = video.prompt.split(' ')
      let currentOccurrences: number = 0

      inputTexts.forEach(t => {
        currentOccurrences = countOccurrences(videoTexts, t)
      })

      if (currentOccurrences > occurrences) {
        occurrences = currentOccurrences
        hitVideo = video
      }
    })

    if (occurrences == 0) {
      hitVideo = getOneRandomVideo(videos)
    }
  } else {
    hitVideo = getOneRandomVideo(videos)
  }

  return hitVideo
}
