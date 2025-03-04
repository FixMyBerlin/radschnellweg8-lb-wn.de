import { COLORS, COLORSCLASSES } from '@config/styles'
import checkIcon from '@shared/sections/maps/statusIcons/check.png'
import doneIcon from '@shared/sections/maps/statusIcons/done.png'
import ideaIcon from '@shared/sections/maps/statusIcons/idea.png'
import in_progressIcon from '@shared/sections/maps/statusIcons/in_progress.png'
import planningIcon from '@shared/sections/maps/statusIcons/planning.png'

export const routeSegmentStatus: {
  [key: string]: { color: string; icon: ImageMetadata; label: string; colorClass: string }
} = {
  idea: {
    color: COLORS.mapStatusIdea,
    icon: ideaIcon,
    label: 'Idee',
    colorClass: COLORSCLASSES.mapStatusIdea,
  },
  check: {
    color: COLORS.mapStatusCheck,
    icon: checkIcon,
    label: 'Prüfung',
    colorClass: COLORSCLASSES.mapStatusCheck,
  },
  planning: {
    color: COLORS.mapStatusPlanning,
    icon: planningIcon,
    label: 'Planung',
    colorClass: COLORSCLASSES.mapStatusPlanning,
  },
  in_progress: {
    color: COLORS.mapStatusInProgress,
    icon: in_progressIcon,
    label: 'Umsetzung',
    colorClass: COLORSCLASSES.mapStatusInProgress,
  },
  done: {
    color: COLORS.mapStatusDone,
    icon: doneIcon,
    label: 'Fertig',
    colorClass: COLORSCLASSES.mapStatusDone,
  },
}

const statusLineStyling = [
  'match',
  ['get', 'status'],
  'idea',
  routeSegmentStatus.idea.color,
  'check',
  routeSegmentStatus.check.color,
  'planning',
  routeSegmentStatus.planning.color,
  'in_progress',
  routeSegmentStatus.in_progress.color,
  'done',
  routeSegmentStatus.done.color,
  /* default */ '#ff0000', // has no status
]

export const getLinePaintRouteMap = (focusSegment?: string) => {
  return {
    'line-width': 4,
    'line-color': focusSegment
      ? ['case', ['==', ['get', 'subsectionSlug'], focusSegment], statusLineStyling, '#6B7280']
      : statusLineStyling,
  }
}

export const linePaintSimpleMap = { 'line-width': 4, 'line-color': COLORS.mapDefault }
