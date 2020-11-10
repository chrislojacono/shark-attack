import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

class LiveStudents extends React.Component {
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
