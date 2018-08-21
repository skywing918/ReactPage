import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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
            <td><Button color="danger" onClick={() => props.toggle(log)}>查看</Button></td>
        </tr>
    )
}

class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: '',
            model: '',
            detail: '',
            registered: '',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle(log) {
        this.setState({
            modal: !this.state.modal,
            action: log.action,
            model: log.model,
            detail: log.detail,
            registered: log.registered
        });
    }

    render() {

        const logList = logsData.filter((log) => log.id < 7)

        return (
            <div className="animated fadeIn">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-info ' + this.props.className}>
                <ModalHeader toggle={this.toggleInfo}>详细信息</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="4">
                                <Label>操作动作</Label>
                            </Col>
                            <Col xs="8">
                                {this.state.action}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Label>操作模块</Label>
                            </Col>
                            <Col xs="8">
                                {this.state.model}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Label>操作内容</Label>
                            </Col>
                            <Col xs="8">
                                {this.state.detail}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Label>操作时间</Label>
                            </Col>
                            <Col xs="8">
                                {this.state.registered}
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>取消</Button>
                        <Button color="primary" onClick={this.toggle}>确定</Button>{' '}
                    </ModalFooter>
                </Modal>

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
                                            <LogRow key={index} log={log} toggle={this.toggle} />
                                        )}
                                    </tbody>
                                </Table>
                                <nav>
                                    <Pagination>
                                        <PaginationItem><PaginationLink previous tag="button">上一页</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink next tag="button">下一页</PaginationLink></PaginationItem>
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
