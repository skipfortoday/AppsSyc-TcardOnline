import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];


const mapStateToProps = (state) => {
  return {
    getTcardEvoPerincian: state.tcard.getTcardEvoPerincian,
    errorTcardEvoPerincian: state.tcard.errorTcardEvoPerincian,
  };
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    show { from } to { to } of { size } 
  </span>
);

const EvoPerincianCloudComponent = (props) => {

  const columns = [
    {
      dataField: "RecordNum",
      text: "RecNum",
      sort: true,
      headerStyle: () => {
        return { textAlign:'center' };
      },
      style: () => {
        return { padding: "2px" };
      },
    },
    {
      dataField: "Flag",
      text: "Flag ID",
      sort: true,
      headerStyle: () => {
        return { textAlign:'center' };
      },
      style: () => {
        return { padding: "2px" };
      },
    },
    {
      dataField: "Lokasi",
      text: "Lokasi",
      sort: true,
      headerStyle: () => {
        return { width:"10%" , textAlign:'center' };
      },
      style: () => {
        return { padding: "2px" , };
      },
    },
    {
      dataField: "Time",
      text: "Waktu",
      sort: true,
      headerStyle: () => {
        return { width: "35%",  textAlign:'center' };
      },
      style: () => {
        return { padding: "2px" };
      },
    },
  ];

  
  return (
    <Container>
      {props.getTcardEvoPerincian ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getTcardEvoPerincian}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
              <Col>
                  <div className="float-  left">
                    <FontAwesomeIcon icon={faCloud}/><h5>Data from Cloud</h5>
                  </div>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>
            
              <BootstrapTable
                {...props.baseProps}
                rowStyle={ { padding:'2',textAlign:'center'}}
                pagination={ paginationFactory({
                  showTotal: true,
                  paginationTotalRenderer: customTotal,
                  disablePageTitle: true,
                  sizePerPageList: [{
                    text: '20', value: 20
                  }, {
                    text: '35', value: 35
                  }, {
                    text: '50', value: 50
                  }]}) }
                striped
                bordered={ false }
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorTcardEvoPerincian ? (
            <h4>{props.errorTcardEvoPerincian}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(EvoPerincianCloudComponent);
