import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CharacterDetailsModal from "../Modal/CharacterDetailsModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import "./Listado.scss";
import TextField from "@mui/material/TextField";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";

function Listado() {
  const [handleApi, setHandleApi] = useState({ info: null, results: [] });
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [order, setOrder] = useState("asc");

  const getSortedList = (list) => {
    return list.sort(function (a, b) {
      if (a.species < b.species) {
        return order === "asc" ? 1 : -1;
      }
      if (a.species > b.species) {
        return order === "asc" ? -1 : 1;
      }
      return 0;
    });
  };

  const handleOpen = (value) => {
    setOpen(true);
    setSelectedCharacter(value);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedCharacter(null);
  };

  useEffect(() => {
    const endPoint = `https://rickandmortyapi.com/api/character/?page=${
      pageNumber + 1
    }&name=${search}`;
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setHandleApi(apiData);
        console.log(apiData);
      })
      .catch((err) => {
        Swal.fire("no se pudo conectar con la api");
      });
  }, [search, pageNumber]);

  return (
    <div className="wrapper">
      <CharacterDetailsModal
        open={open}
        handleClose={handleClose}
        value={selectedCharacter}
      />

      <div className="characters-list-header">
        <p className="text-title">Rick and Morty Characters</p>
        <div className="search">
          <TextField
            id="standard-basic"
            label=" Search by character"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      <div className="table-container">
        <TableContainer component={Paper}>
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    className="sort-label"
                    active
                    direction={order}
                    onClick={() => {
                      setOrder(order === "asc" ? "desc" : "asc");
                    }}
                  >
                    Specie
                    <Box component="span">{order === "desc" ? "" : ""}</Box>
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getSortedList(handleApi.results).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.species}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        handleOpen(row);
                      }}
                    >
                      👁
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPage={20}
          rowsPerPageOptions={[]}
          count={handleApi.info?.count ?? 0}
          page={pageNumber}
          onPageChange={(e, page) => {
            setPageNumber(page);
          }}
        />
      </div>
    </div>
  );
}

export default Listado;
