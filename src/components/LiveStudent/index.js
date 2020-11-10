import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';
import studentShape from '../../helpers/props/studentShape';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { student } = this.props;
    return (
        <Card className="liveStudentCard">
          <CardImg
            src={student.imgUrl}
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h5'>{student.name}</CardTitle>
          </CardBody>
        </Card>
    );
  }
}

export default LiveStudents;
