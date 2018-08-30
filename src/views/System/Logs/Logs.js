import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import logsData from './LogsData'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

function dateTimeFormatter(cell, row) {
    return (
        <span>{new Date(cell).toLocaleDateString()} {new Date(cell).toLocaleTimeString()}</span>
    );
}

function modalFormatter(cell, row, c, toggle) {
    return (
        <span><Button color="danger" onClick={() => toggle(row)}>查看</Button></span>
    );
}

function customTotal(from, to, size) {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );
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

        const logList = logsData;//.filter((log) => log.id < 7)
        const columns = [
            {
                dataField: 'id',
                text: '序号'
            },
            {
                dataField: 'action',
                text: '操作动作'
            },
            {
                dataField: 'model',
                text: '操作模块'
            },
            {
                dataField: 'detail',
                text: '操作内容'
            },
            {
                dataField: 'user',
                text: '操作人'
            },
            {
                dataField: 'registered',
                text: '操作时间',
                formatter: dateTimeFormatter
            },
            {
                dataField: '',
                text: '操作',
                formatter: modalFormatter,
                formatExtraData: this.toggle
            }];
        const options = {
            paginationSize: 7,
            pageStartIndex: 1,
            // alwaysShowAllBtns: true, // Always show next and previous button
            //withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            //hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '7', value: 7
            }, {
                text: '10', value: 10
            }] // A numeric array is also available. the purpose of above example is custom the text
        };
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
                                {logList &&
                                    <BootstrapTable keyField='id' data={logList} columns={columns} pagination={paginationFactory(options)} />
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Logs;
