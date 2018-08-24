import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import rolesData from './RolesData'

function customTotal(from, to, size) {
  return (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
      </span>
  );
}

class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [] };

  }

  handleUpdate = () => {
    if (this.state.selected.length == 0) {
      alert("请选择一条记录。")
      return;
    }
    var curr = this.state.selected[0]
    const userLink = `/system/roles/${curr}`
    window.location = userLink;
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

    const roleList = rolesData.filter((role) => role.id < 10)

    const columns = [
      {
        dataField: 'id',
        text: '序号'
      },
      {
        dataField: 'name',
        text: '角色名称'
      },
      {
        dataField: 'comment',
        text: '角色描述'
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
                <Row style={{ padding: '10px' }}>
                  <Button style={{ margin: '5px' }}>增加</Button>
                  <Button style={{ margin: '5px' }} onClick={this.handleUpdate}>修改</Button>
                  <Button style={{ margin: '5px' }}>删除</Button>
                  <Button style={{ margin: '5px' }}>分配权限</Button>
                </Row>
                <BootstrapTable keyField='id' data={roleList} columns={columns} selectRow={selectRow} pagination={paginationFactory(options)} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Roles;
