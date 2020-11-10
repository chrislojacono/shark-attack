import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

class GraveStone extends React.Component {
  render() {
    const { student } = this.props;
    return (
        <Card className="gravestoneCard" >
          <CardBody>
            <CardTitle tag='h5'>{student.name}</CardTitle>
          </CardBody>
        </Card>
    );
  }
}

export default GraveStone;
