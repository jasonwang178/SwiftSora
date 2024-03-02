import { type Video } from '~/server/models/Video'
export const useCommunityVideos = () => useState<Video[]>('communityVideos', () => [])
export const useCommunityVideosPending= () => useState<Video[]>('communityVideosPending', () => [])
export const useDarkMode = () => useState<string>('darkMode', () => '1')
