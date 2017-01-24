// 'use strict';

class Robot {

  constructor() {
    this.bearing
    this.coordinates
  }

  turnLeft() {
    switch(bearing) {
      case this.bearing === 'north':
        this.bearing = 'west'
        break;
      case this.bearing === 'east':
        this.bearing = 'north'
        break;
      case this.bearing === 'south':
        this.bearing = 'east'
        break;
      case this.bearing === 'west':
        this.bearing = 'south'
        break;
    }
  }

  turnRight() {
    // placeholder copied from turnLeft
    switch(bearing) {
      case this.bearing === 'north':
        this.bearing = 'west'
        break;
      case this.bearing === 'east':
        this.bearing = 'north'
        break;
      case this.bearing === 'south':
        this.bearing = 'east'
        break;
      case this.bearing === 'west':
        this.bearing = 'south'
        break;
    }
  }

  advance() {
    // placeholder, need to check logic
    switch(coordinates) {
      case this.bearing === 'north':
        this.coordinates[0]++
        break;
      case this.bearing === 'east':
        this.coordinates[1]++
        break;
      case this.bearing === 'south':
        this.coordinates[0]--
        break;
      case this.bearing === 'west':
        this.coordinates[1]--
        break;
    }
  }


  orient() {
    return 'yo'
  }










// end of Robot class
} // end of Robot class
