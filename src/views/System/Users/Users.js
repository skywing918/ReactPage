import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';

import { connect } from 'react-redux';
import { userActions } from '../../../_actions';

function statusFormatter(cell, row) {
    const getBadge = (status) => {
        return status === 'Active' ? 'success' :
            status === 'Inactive' ? 'secondary' :
                status === 'Pending' ? 'warning' :
                    status === 'Banned' ? 'danger' :
                        'primary'
    }

    return (
        <Badge color={getBadge(row.userStatus)}>{row.userStatus}</Badge>
    );
}

function dateTimeFormatter(cell, row) {
    
    return (
        <span>{ new Date(cell).toLocaleDateString() } {new Date(cell).toLocaleTimeString()}</span>
    );
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
        const columns = [
            {
                dataField: 'id',
                text: '序号'
            },
            {
                dataField: 'fullName',
                text: '姓名'
            },
            {
                dataField: 'userName',
                text: '工号'
            },
            {
                dataField: 'mobilePhone',
                text: '手机'
            },
            {
                dataField: 'userRole',
                text: '角色'
            },
            {
                dataField: 'userStatus',
                text: '状态',
                formatter: statusFormatter
            },
            {
                dataField: 'registered',
                text: '创建时间',
                formatter: dateTimeFormatter
            }];
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true
        };

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
                                {users.items &&
                                    <BootstrapTable keyField='id' data={users.items} columns={columns} selectRow={selectRow} />
                                }
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
