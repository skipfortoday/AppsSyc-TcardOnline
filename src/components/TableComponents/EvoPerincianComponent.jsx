import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser } from "../../actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faServer } from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;


const handleClick = (dispatch, id) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const rowStyle = { };

const EvoPerincianComponent = (props) => {

  const columns = [
    {
      dataField: "id",
      text: "Flag ID",
      sort: true,
      style: () => {
        return { padding: "2px" };
      },
    },
    {
      dataField: "nama",
      text: "Kode Cabang",
      sort: true,
      style: () => {
        return { padding: "2px" };
      },
    },
    {
      dataField: "alamat",
      text: "Waktu",
      sort: true,
      style: () => {
        return { padding: "2px" };
      },
    },
  ];

  
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
            
              <Row>
              <Col>
                  <div className="float-left">
                    <FontAwesomeIcon icon={faServer}/><h5>Data from Server</h5>
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
                rowStyle={ rowStyle }
                pagination={paginationFactory({sizePerPage:'20'})}
                striped
                bordered={ false }
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(EvoPerincianComponent);
