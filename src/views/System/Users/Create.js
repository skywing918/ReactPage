import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormText, Card, CardFooter, CardBody, CardHeader, Col, Row } from 'reactstrap';

class CreateUser extends Component {

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col md="5">
                    <Card>
                        <CardHeader>
                            <strong>增添账号</strong>
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">姓名</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                    </Col>
                                 </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">工号</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">手机号</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select">角色</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="select" id="select">
                                                <option value="0">Please select</option>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select">状态</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="select" id="select">
                                                <option value="0">Please select</option>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="password-input">Password</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                                        <FormText className="help-block">Please enter a complex password</FormText>
                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="password-input">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                                            <FormText className="help-block">Please enter a complex password</FormText>
                                        </Col>
                                    </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                        </Card>
                        </Col>
                </Row>
            </div>
        )
    }
}

export default CreateUser;
