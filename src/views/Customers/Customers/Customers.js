import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import customersData from './CustomersData'

function statusFormatter(cell, row) {
  const getBadge = (status) => {
      return status === 'Active' ? 'success' : 'secondary'
  }

  return (
    <Badge color={getBadge(row.status)}>{row.status}</Badge>
  );
}

function dateTimeFormatter(cell, row) {
  return (
    <span>{new Date(cell).toLocaleDateString()} {new Date(cell).toLocaleTimeString()}</span>
  );
}

function actionFormatter(cell, row) {
  const customerLink = `/customers/customers/${row.id}`
  return (
    <span><a href={customerLink}>被监护人</a></span>
  );
}

function customTotal(from, to, size) {
  return (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
      </span>
  );
}
class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [] };

  }
  handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState(() => ({
        selected: [...this.state.selected, row.id]
      }));
    } else {
      this.setState(() => ({
        selected: this.state.selected.filter(x => x !== row.id)
      }));
    }
  }
  render() {

    const customerList = customersData.filter((customer) => customer.id < 10)
    const columns = [
      {
        dataField: 'id',
        text: '序号'
      },
      {
        dataField: 'name',
        text: '用户名'
      },
      {
        dataField: 'mobilePhone',
        text: '注册手机'
      },
      {
        dataField: 'email',
        text: '邮箱'
      },
      {
        dataField: 'registered',
        text: '注册时间',
        formatter: dateTimeFormatter
      },
      {
        dataField: 'role',
        text: '注册方式'
      },
      {
        dataField: 'status',
        text: '状态',
        formatter: statusFormatter
      },
      {
        text: '操作',
        formatter: actionFormatter
      }];
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      selected: this.state.selected,
      onSelect: this.handleOnSelect,
    };

    const options = {
      paginationSize: 4,
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
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }] // A numeric array is also available. the purpose of above example is custom the text
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
                <Row style={{ padding: '10px' }}>
                  <Button style={{ margin: '5px' }}>删除</Button>
                  <Button style={{ margin: '5px' }}>锁定</Button>
                  <Button style={{ margin: '5px' }}>解锁</Button>
                </Row>

                <BootstrapTable keyField='id' data={customerList} columns={columns} selectRow={selectRow} pagination={paginationFactory(options)} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Customers;
