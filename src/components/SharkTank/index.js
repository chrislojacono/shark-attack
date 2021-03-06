import React from 'react';
import LiveStudents from '../LiveStudent';
import Graveyard from '../Graveyard';
import getAllStudents from '../../helpers/data/studentsData';

class SharkTank extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  };

  componentDidMount() {
    this.studentApiCall();
  }

  studentApiCall = () => {
    getAllStudents().then((response) => this.setState({ students: response }));
  };

  followTheLight = () => {
    const randomStudent = this.state.students[
      Math.floor(Math.random() * this.state.students.length)
    ];
    const newStudentsArray = this.state.students.filter(
      (student) => student !== randomStudent,
    );
    this.setState({
      students: newStudentsArray,
      deadStudents: this.state.deadStudents.concat(randomStudent),
    });
  };

  render() {
    const { deadStudents } = this.state;
    return (
      <>
        <button className='btn btn-danger' onClick={this.followTheLight}>
          SHARK ATTACK!!!
        </button>
        <div className='sharkTank'>
          {this.state.students.map((student) => (
            <LiveStudents key={student.name} student={student} />
          ))}
        </div>
         <Graveyard deadStudents={deadStudents} />
      </>
    );
  }
}

export default SharkTank;
