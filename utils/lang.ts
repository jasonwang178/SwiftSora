export const localeName = (locCode: string) => {
  switch (locCode) {
    case 'en-US':
      return 'English (US)'
    case 'en':
      return 'English'
    case 'ko-KR':
      return '한국인'
    case 'ja-JP':
      return '日本語'
    case 'zh-CN':
      return '中文 (简体)'
    case 'zh-TW':
      return '中文 (繁體)'
    default:
      return 'English (US)'
  }
  return 'English (US)'
}

export const localeIcon = (locCode: string) => {
  switch (locCode) {
    case 'en-US':
      return 'emojione:flag-for-united-states'
    case 'en':
      return 'emojione:flag-for-united-states'
    case 'ko-KR':
      return 'emojione:flag-for-south-korea'
    case 'ja-JP':
      return 'emojione:flag-for-japan'
    case 'zh-CN':
      return 'emojione:flag-for-china'
    case 'zh-TW':
      return 'emojione:flag-for-hong-kong-sar-china'
    default:
      return 'emojione:flag-for-united-states'
  }
  return 'emojione:flag-for-united-states'
}

export const getLocaleVideoStyles = () => {
  const { t } = useI18n()
  const video_styles = [
    { name: t('app.video_gen.text.style.video_styles.none'), value: 'none' },
    { name: t('app.video_gen.text.style.video_styles.analog_film'), value: 'analog_film' },
    { name: t('app.video_gen.text.style.video_styles.anime'), value: 'anime' },
    { name: t('app.video_gen.text.style.video_styles.cinematic'), value: 'cinematic' },
    { name: t('app.video_gen.text.style.video_styles.comic_book'), value: 'comic_book' },
    { name: t('app.video_gen.text.style.video_styles.digital_art'), value: 'digital_art' },
    { name: t('app.video_gen.text.style.video_styles.enhance'), value: 'enhance' },
    { name: t('app.video_gen.text.style.video_styles.fantasy_art'), value: 'fantasy_art' },
    { name: t('app.video_gen.text.style.video_styles.isometric'), value: 'isometric' },
    { name: t('app.video_gen.text.style.video_styles.line_art'), value: 'line_art' },
    { name: t('app.video_gen.text.style.video_styles.low_poly'), value: 'low_poly' },
    { name: t('app.video_gen.text.style.video_styles.modeling_compound'), value: 'modeling_compound' },
    { name: t('app.video_gen.text.style.video_styles.neon_punk'), value: 'neon_punk' },
    { name: t('app.video_gen.text.style.video_styles.origami'), value: 'origami' },
    { name: t('app.video_gen.text.style.video_styles.photographic'), value: 'photographic' },
    { name: t('app.video_gen.text.style.video_styles.pixel_art'), value: 'pixel_art' },
    { name: t('app.video_gen.text.style.video_styles.tile_texture'), value: 'tile_texture' },
  ]

  return video_styles
}

export const getLocaleVideoStyle = (styleValue: string) => {
  const { t } = useI18n()
  return t(`app.video_gen.text.style.video_styles.${styleValue}`)
}
export const getOriPath = (path: string) => path.replace(/^\/[a-zA-Z-]+/, '')
