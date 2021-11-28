let data = {
  'Work': {
    'daily': {
      'current': '5hrs',
      'previous':'7hrs'
    },
    'weekly': {
      'current': '32hrs',
      'previous':'36hrs'
    },
    'monthly': {
      'current': '103hrs',
      'previous':'128hrs'
    }
  },
  'Play': {
    'daily': {
      'current': '1hrs',
      'previous':'2hrs'
    },
    'weekly': {
      'current': '10hrs',
      'previous':'8hrs'
    },
    'monthly': {
      'current': '23hrs',
      'previous':'29hrs'
    }
  },
  'Study': {
    'daily': {
      'current': '0hrs',
      'previous':'1hrs'
    },
    'weekly': {
      'current': '4hrs',
      'previous':'7hrs'
    },
    'monthly': {
      'current': '13hrs',
      'previous':'19hrs'
    }
  },
  'Exercise': {
    'daily': {
      'current': '1hrs',
      'previous':'1hrs'
    },
    'weekly': {
      'current': '4hrs',
      'previous':'5hrs'
    },
    'monthly': {
      'current': '11hrs',
      'previous':'18hrs'
    }
  },
  'Social': {
    'daily': {
      'current': '1hrs',
      'previous':'3hrs'
    },
    'weekly': {
      'current': '5hrs',
      'previous':'10hrs'
    },
    'monthly': {
      'current': '21hrs',
      'previous':'23hrs'
    }
  },
  'Self Care': {
    'daily': {
      'current': '0hrs',
      'previous':'1hrs'
    },
    'weekly': {
      'current': '2hrs',
      'previous':'2hrs'
    },
    'monthly': {
      'current': '7hrs',
      'previous':'11hrs'
    }
  },
}

let state = 'weekly'


const filters = document.querySelectorAll('.filter span')

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    let newState = filter.innerHTML;
    filter.classList.add("active")
  })
})


const updateState = () => {
  
}

