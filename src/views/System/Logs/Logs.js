import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import logsData from './LogsData'

function LogRow(props) {
  const log = props.log
  return (
      <tr key={log.id.toString()}>
        <th scope="row">{log.id}</th>
        <td>{log.action}</td>
        <td>{log.model}</td>
        <td>{log.detail}</td>
        <td>{log.user}</td>
        <td>{log.registered}</td>
        <td>查看</td>
    </tr>
  )
}

class Logs extends Component {

  render() {

    const logList = logsData.filter((log) => log.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                            <Row>
                                <Col xs="12" sm="6" lg="7">
                                    <Form action="" method="post" inline>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userNo" className="pr-1">操作动作</Label>
                                            <Input type="text" id="userNo" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userName" className="pr-1">操作人</Label>
                                            <Input type="text" id="userName" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userMobile" className="pr-1">操作时间</Label>
                                            <Input type="text" id="userMobile" />
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col xs="12" sm="6" lg="5">
                                    <Button type="submit" color="primary">查询</Button>
                                </Col>
                            </Row>
               
              </CardHeader>
                        <CardBody>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th scope="col">序号</th>
                            <th scope="col">操作动作</th>
                            <th scope="col">操作模块</th>
                            <th scope="col">操作内容</th>
                            <th scope="col">操作人</th>
                            <th scope="col">操作时间</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logList.map((log, index) =>
                            <LogRow key={index} log={log} />
                        )}
                    </tbody>
                </Table>
                <nav>
                    <Pagination>
                        <PaginationItem>
                            <PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                        <PaginationItem active>
                            <PaginationLink tag="button">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Logs;
