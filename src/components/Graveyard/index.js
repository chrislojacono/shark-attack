import React, { Component } from 'react';
import GraveStone from '../GraveStone';

export default class Graveyard extends Component {
  render() {
    return (
      <div className='GraveYard'>
        {this.props.deadStudents.map((student) => (
          <GraveStone key={student.name} student={student} />
        ))}
      </div>
    );
  }
}
