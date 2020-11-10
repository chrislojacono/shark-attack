import React from 'react';
import LiveStudents from '../LiveStudent';
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
      deadStudents: randomStudent,
    });
  };

  render() {
    return (
      <div className='sharkTankCard'>
        {this.state.students.map((student) => (
          <LiveStudents key={student.name} student={student} />
        ))}
        <button onClick={this.followTheLight}>Tester</button>
      </div>
    );
  }
}

export default SharkTank;
