import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import studentShape from '../../helpers/props/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { student } = this.props;
    return (
        <Card className="gravestoneCard">
          <CardBody>
            <CardTitle tag='h5'>{student.name}</CardTitle>
          </CardBody>
        </Card>
    );
  }
}

export default GraveStone;
