import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { connect } from 'react-redux';
import { userActions } from '../../../_actions';
import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/system/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
      <tr key={user.id.toString()}>
        <th scope="row"><input type="checkbox" /></th>
        <th scope="row"><a href={userLink}>{user.id}</a></th>
        <td><a href={userLink}>{user.firstName + ' ' + user.lastName}</a></td>
        <td>{user.userId}</td>
        <td>{user.mobilePhone}</td>
        <td>{user.role}</td>
        <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td>
        <td>{user.registered}</td>
    </tr>
  )
}



class Users extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

  handleCreate = () => {
      window.location = '/system/usersCreate';
  }

  render() {
    const { user, users } = this.props;
    //const userList = this.props;//usersData.filter((user) => user.id < 10)

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
                                            <Label htmlFor="userNo" className="pr-1">工号</Label>
                                            <Input type="text" id="userNo" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userName" className="pr-1">姓名</Label>
                                            <Input type="text" id="userName" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userStatus" className="pr-1">用户状态</Label>
                                            <Input type="select" name="userStatus" id="SelectLm">
                                                <option value="0">Please select</option>
                                                <option value="1">可用</option>
                                                <option value="2">不可用</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userMobile" className="pr-1">手机号码</Label>
                                            <Input type="text" id="userMobile" />
                                        </FormGroup>
                                        <FormGroup className="pr-1">
                                            <Label htmlFor="userRole" className="pr-1">角色</Label>
                                            <Input type="text" id="userRole" />
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
                                <Button style={{ margin: '5px' }} onClick={this.handleCreate}>增加</Button>
                                <Button style={{ margin: '5px' }}>修改</Button>
                                <Button style={{ margin: '5px' }}>删除</Button>
                                <Button style={{ margin: '5px' }}>密码重置</Button>
                                <Button style={{ margin: '5px' }}>锁定</Button>
                                <Button style={{ margin: '5px' }}>解锁</Button>
                            </Row>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" /></th>
                            <th scope="col">序号</th>
                            <th scope="col">姓名</th>
                            <th scope="col">工号</th>
                            <th scope="col">手机号码</th>
                            <th scope="col">角色</th>
                            <th scope="col">状态</th>
                            <th scope="col">创建时间</th>
                        </tr>
                    </thead>
                    
                    {users.items &&
                        <tbody>
                        {users.items.map((user, index) =>
                            <UserRow key={index} user={user} />
                        )}
                        </tbody>
                    }
                   
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
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(Users);
