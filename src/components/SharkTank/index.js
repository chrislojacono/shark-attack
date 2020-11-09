import React from 'react';
import LiveStudents from '../LiveStudent';
import getAllStudents from '../../helpers/data/studentsData';

class SharkTank extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    this.test();
  }

  test = () => {
    getAllStudents().then((response) => this.setState({ students: response }));
  };

  render() {
    return (
        <div className='sharkTankCard'>
            {this.state.students.map((student) => (
          <LiveStudents key={student.name} student={student} />
            ))}
    </div>

    );
  }
}

export default SharkTank;
