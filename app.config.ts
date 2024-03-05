export const aspect_ratios = ['1:1', '16:9', '9:16']
export const video_styles = {
  none: 'None',
  _3d_model: '3D Model',
  analog_film: 'Analog Film',
  anime: 'Anime',
  cinematic: 'Cinematic',
  comic_book: 'Comic Book',
  digital_art: 'Digital Art',
  enhance: 'Enhance',
  fantasy_art: 'Fantasy Art',
  isometric: 'Isometric',
  line_art: 'Line Art',
  low_poly: 'Low Poly',
  modeling_compound: 'Modeling Compound',
  neon_punk: 'Neon Punk',
  origami: 'Origami',
  photographic: 'Photographic',
  pixel_art: 'Pixel Art',
  tile_texture: 'Tile Texture',
}

export default defineAppConfig({
  darkModeKey: 'darkMode',
  styleKey: 'style',
  aspect_ratios,
  video_styles,
})
