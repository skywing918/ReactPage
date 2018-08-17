import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import rolesData from './RolesData'

function RoleRow(props) {
  const role = props.role
  const roleLink = `/system/roles/${role.id}`

  return (
      <tr key={role.id.toString()}>
        <th scope="row"><input type="checkbox" /></th>
        <th scope="row"><a href={roleLink}>{role.id}</a></th>
        <td><a href={roleLink}>{role.name}</a></td>
        <td>{role.comment}</td>
    </tr>
  )
}

class Roles extends Component {

  render() {

    const roleList = rolesData.filter((role) => role.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                    <Col xs="12" sm="6" lg="10">
                        <Form action="" method="post" inline>
                            <FormGroup className="pr-1">
                                <Label htmlFor="userNo" className="pr-1">角色名称</Label>
                                <Input type="text" id="userNo" />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs="12" sm="6" lg="2">
                        <Button type="submit" color="primary">查询</Button>
                    </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                    <Button style={{ margin: '5px' }}>增加</Button>
                    <Button style={{ margin: '5px' }}>修改</Button>
                    <Button style={{ margin: '5px' }}>删除</Button>
                    <Button style={{ margin: '5px' }}>分配权限</Button>
                </Row>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col"><input type="checkbox"/></th>
                      <th scope="col">序号</th>
                      <th scope="col">角色名称</th>
                      <th scope="col">角色描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleList.map((role, index) =>
                      <RoleRow key={index} role={role}/>
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

export default Roles;
