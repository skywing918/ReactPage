import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import customersData from './CustomersData'

function CustomerRow(props) {
  const customer = props.customer
  const customerLink = `#/customers/customers/${customer.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' : 'secondary'
  }

  return (
        <tr key={customer.id.toString()}>
        <th scope="row"><input type="checkbox" /></th>
        <th scope="row"><a href={customerLink}>{customer.id}</a></th>
        <td><a href={customerLink}>{customer.name}</a></td>
        <td>{customer.mobilePhone}</td>
        <td>{customer.email}</td>
        <td>{customer.registered}</td>
        <td>{customer.role}</td>
        <td><Badge href={customerLink} color={getBadge(customer.status)}>{customer.status}</Badge></td>
        <td><a href={customerLink}>被监护人</a></td>
    </tr>
  )
}

class Customers extends Component {

  render() {

    const customerList = customersData.filter((customer) => customer.id < 10)

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
                                            <Label htmlFor="userNo" className="pr-1">用户名</Label>
                                            <Input type="text" id="userNo" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userName" className="pr-1">注册手机</Label>
                                            <Input type="text" id="userName" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userStatus" className="pr-1">状态</Label>
                                            <Input type="select" name="userStatus" id="SelectLm">
                                                <option value="0">Please select</option>
                                                <option value="1">可用</option>
                                                <option value="2">不可用</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userMobile" className="pr-1">注册时间</Label>
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
                <Row>
                    <Button style={{ margin: '5px' }}>删除</Button>
                    <Button style={{ margin: '5px' }}>锁定</Button>
                    <Button style={{ margin: '5px' }}>解锁</Button>
                </Row>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col"><input type="checkbox"/></th>
                      <th scope="col">序号</th>
                      <th scope="col">用户名</th>
                      <th scope="col">注册手机</th>
                      <th scope="col">邮箱</th>
                      <th scope="col">注册时间</th>
                      <th scope="col">注册方式</th>
                      <th scope="col">状态</th>
                      <th scope="col">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerList.map((customer, index) =>
                      <CustomerRow key={index} customer={customer}/>
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

export default Customers;
