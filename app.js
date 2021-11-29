let data = {
  'Work': {
    'Daily': {
      'current': '5hrs',
      'last':'Yesterday - 7hrs'
    },
    'Weekly': {
      'current': '32hrs',
      'last':'Last week - 36hrs'
    },
    'Monthly': {
      'current': '103hrs',
      'last':'Last month - 128hrs'
    }
  },
  'Play': {
    'Daily': {
      'current': '1hrs',
      'last':'Yesterday - 2hrs'
    },
    'Weekly': {
      'current': '10hrs',
      'last':'Last week - 8hrs'
    },
    'Monthly': {
      'current': '23hrs',
      'last':'Last month - 29hrs'
    }
  },
  'Study': {
    'Daily': {
      'current': '0hrs',
      'last':'Yesterday - 1hrs'
    },
    'Weekly': {
      'current': '4hrs',
      'last':'Last week - 7hrs'
    },
    'Monthly': {
      'current': '13hrs',
      'last':'Last month - 19hrs'
    }
  },
  'Exercise': {
    'Daily': {
      'current': '1hrs',
      'last':'Yesterday - 1hrs'
    },
    'Weekly': {
      'current': '4hrs',
      'last':'Last week - 5hrs'
    },
    'Monthly': {
      'current': '11hrs',
      'last':'Last month - 18hrs'
    }
  },
  'Social': {
    'Daily': {
      'current': '1hrs',
      'last':'Yesterday - 3hrs'
    },
    'Weekly': {
      'current': '5hrs',
      'last':'Last week - 10hrs'
    },
    'Monthly': {
      'current': '21hrs',
      'last':'Last month - 23hrs'
    }
  },
  'Self Care': {
    'Daily': {
      'current': '0hrs',
      'last':'Yesterday - 1hrs'
    },
    'Weekly': {
      'current': '2hrs',
      'last':'Last week - 2hrs'
    },
    'Monthly': {
      'current': '7hrs',
      'last':'Last month - 11hrs'
    }
  },
}

let state = 'Weekly'
const filters = document.querySelectorAll('.filter span')

/* Stat elements */
let workCurrent = document.getElementById("work-current")
let workLast = document.getElementById("work-last")

let playCurrent = document.getElementById("play-current")
let playLast = document.getElementById("play-last")

let studyCurrent = document.getElementById("study-current")
let studyLast = document.getElementById("study-last")

let exerciseCurrent = document.getElementById("exercise-current")
let exerciseLast = document.getElementById("exercise-last")

let socialCurrent = document.getElementById("social-current")
let socialLast = document.getElementById("social-last")

let selfcareCurrent = document.getElementById("self-care-current")
let selfcareLast = document.getElementById("self-care-last")

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((oldFilterElements) => {
      oldFilterElements.classList.remove('active')
    })
    filter.classList.add("active")
    state = filter.innerHTML;
    changeStats(state)
  })
})


const changeStats = (state) => {
  console.log("hello")
  if(state == 'Monthly') {
    workCurrent.innerHTML = data['Work'][state].current
    workLast.innerHTML = data['Work'][state].last

    playCurrent.innerHTML = data['Play'][state].current
    playLast.innerHTML = data['Play'][state].last

    studyCurrent.innerHTML = data['Study'][state].current
    studyLast.innerHTML = data['Study'][state].last

    exerciseCurrent.innerHTML = data['Exercise'][state].current
    exerciseLast.innerHTML = data['Exercise'][state].last

    socialCurrent.innerHTML = data['Social'][state].current
    socialLast.innerHTML = data['Social'][state].last

    selfcareCurrent.innerHTML = data['Self Care'][state].current
    selfcareLast.innerHTML = data['Self Care'][state].last

  } else if (state == 'Weekly') {
    workCurrent.innerHTML = data['Work'][state].current
    workLast.innerHTML = data['Work'][state].last

    playCurrent.innerHTML = data['Play'][state].current
    playLast.innerHTML = data['Play'][state].last

    studyCurrent.innerHTML = data['Study'][state].current
    studyLast.innerHTML = data['Study'][state].last

    exerciseCurrent.innerHTML = data['Exercise'][state].current
    exerciseLast.innerHTML = data['Exercise'][state].last

    socialCurrent.innerHTML = data['Social'][state].current
    socialLast.innerHTML = data['Social'][state].last

    selfcareCurrent.innerHTML = data['Self Care'][state].current
    selfcareLast.innerHTML = data['Self Care'][state].last
  } else {
    workCurrent.innerHTML = data['Work'][state].current
    workLast.innerHTML = data['Work'][state].last

    playCurrent.innerHTML = data['Play'][state].current
    playLast.innerHTML = data['Play'][state].last

    studyCurrent.innerHTML = data['Study'][state].current
    studyLast.innerHTML = data['Study'][state].last

    exerciseCurrent.innerHTML = data['Exercise'][state].current
    exerciseLast.innerHTML = data['Exercise'][state].last

    socialCurrent.innerHTML = data['Social'][state].current
    socialLast.innerHTML = data['Social'][state].last

    selfcareCurrent.innerHTML = data['Self Care'][state].current
    selfcareLast.innerHTML = data['Self Care'][state].last
  }
}

