import React from 'react';
import { Alert } from 'reactstrap';
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
    return (
      <Alert show='true' color='danger'>
        {randomStudent.name} has been eaten alive!!!
      </Alert>
    );
  };

  render() {
    const { deadStudents } = this.state;
    return (
      <>
        <button className='btn btn-danger' onClick={this.followTheLight}>
          Someone gets eaten!!
        </button>
        <div className='sharkTankCard'>
          {this.state.students.map((student) => (
            <LiveStudents key={student.name} student={student} />
          ))}
          <Graveyard deadStudents={deadStudents} />
        </div>
      </>
    );
  }
}

export default SharkTank;
