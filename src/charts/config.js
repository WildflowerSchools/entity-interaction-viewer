
const NO_DATA = {
  label: 'No Data',
  color: '#CCCCCCC'
};

export const concentrations = {
  CONCENTRATION: {
    label: 'Concentration'
  },
  DISTRACTED_WORKING: {
    label: 'Distracted Working'
  },
  DISORDER: {
    label: 'Disorder'
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

export default {
  concentrations,
  engagements,
  interactions
};