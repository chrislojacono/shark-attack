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
      <div className="liveStudentCard">
        <Card >
          <CardImg
            src={student.imgUrl}
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h5'>{student.name}</CardTitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LiveStudents;
