
const NO_DATA = {
  label: 'No Data',
  color: '#CCCCCC'
};

export const concentrations = {
  CONCENTRATION: {
    label: 'Concentration',
    color: '#00FF00'
  },
  DISTRACTED_WORKING: {
    label: 'Distracted Working',
    color: '#FFFF00'
  },
  DISORDER: {
    label: 'Disorder',
    color: '#FF0000'
  },
  NO_DATA
};

export const engagements = {
  GA: {
    label: 'Group Activity',
    color: '#DCFFFD'
  },
  GL: {
    label: 'Getting Lesson',
    color: '#05E0E9'
  },
  HA: {
    label: 'Horsing Around',
    color: '#CFEED1'
  },
  Wait: {
    label: 'Waiting',
    color: '#FF2768'
  },
  Wd: {
    label: 'Wandering',
    color: '#52FFEE'
  },
  BR: {
    label: 'Bathroom',
    color: '#FF0000'
  },
  OS: {
    label: 'Out of Sight',
    color: '#C0FFEE'
  },
  W: {
    label: 'Working',
    color: '#4FB477'
  },
  S: {
    label: 'Snacking',
    color: '#3F6634'
  },
  Obs: {
    label: 'Observing',
    color: '#345511'
  },
  Other: {
    label: 'Other',
    color: '#BA2C73'
  },
  NO_DATA
};

export const interactions = {
  behaviors: {
    orientated: {},
    looking: {},
    touching: {},
    distracted: {},
    intentional: {},
    careful: {}
  },
  levels: {
    COMPLETELY: {
      label: 'Completely',
      color: '#00FF00'
    },
    PARTIAL: {
      label: 'Partial',
      color: '#FFFF00'
    },
    NOT: {
      label: 'NOT',
      color: '#FF0000'
    }
  }
};

export const theme = {
  // shared chart styles
  // https://github.com/plouc/nivo/blob/master/packages/core/src/theming/defaultTheme.js
  fontSize: 13,
  textColor: 'currentColor',
  axis: {
    legend: {
      text: {
        fontSize: 13
      }
    }
  }
};

export default {
  concentrations,
  engagements,
  interactions
};