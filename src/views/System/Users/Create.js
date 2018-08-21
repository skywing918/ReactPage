import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormText, Card, CardFooter, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                fullName: '',
                userName:'',
                mobilePhone:'',
                userRole:'',
                userStatus:'',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.userName && user.password) {
            dispatch(userActions.register(user));
        }
    }
    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col md="5">
                    <Card>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>

                        <CardHeader>
                            <strong>增添账号</strong>
                        </CardHeader>
                        <CardBody>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">姓名</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="text-input" placeholder="Text"  name="fullName" value={user.fullName} onChange={this.handleChange}/>
                                    </Col>
                                 </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">工号</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="text-input" placeholder="Text" name="userName" value={user.userName} onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">手机号码</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="text-input" placeholder="Text" name="mobilePhone" value={user.mobilePhone} onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectRole">角色</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" id="selectRole" name="userRole" value={user.userRole} onChange={this.handleChange}>
                                                <option value="0">Please select</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Member">Member</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectStatus">状态</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" id="selectStatus" name="userStatus" value={user.userStatus} onChange={this.handleChange}>
                                                <option value="Active">可用</option>
                                                <option value="Inactive">不可用</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="password-input">Password</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="password" id="password-input" placeholder="Password" autoComplete="new-password" name="password" value={user.password} onChange={this.handleChange}/>
                                        <FormText className="help-block">Please enter a complex password</FormText>
                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="password-input">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" id="password-input" placeholder="Password" autoComplete="new-password" />
                                            <FormText className="help-block">Please enter a complex password</FormText>
                                        </Col>
                                    </FormGroup>
                            
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                        </Form>
                        </Card>
                        </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(CreateUser);
