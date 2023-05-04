import { types } from 'react-bricks/frontend'
import layout from './layout'
import HeroUnit from './HeroUnit'
import features from './features'
import Thumbnail from './Thumbnail'
import CoverImage from './CoverImage'

const bricks = [Thumbnail, CoverImage, HeroUnit, ...layout, ...features]

export default bricks
