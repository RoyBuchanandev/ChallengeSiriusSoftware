import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CharacterDetailsModal.scss";

const CharacterDetailsModal = ({ open, value, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="character-card">
          <CardMedia
            className="card-img"
            component="img"
            height="194"
            image={value?.image}
            alt="Paella dish"
          />
<div className="fields-container"> 
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.id}
            label={"Id"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.name}
            label={"Name"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.status}
            label={"Status"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.species}
            label={"Species"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.location.name}
            label={"Location"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          <TextField
            className="modal-input"
            disabled
            fullWidth
            value={value?.origin.name}
            label={"Origin"}
            InputLabelProps={{
              style: { color: "#fff" },
              shrink: true,
            }}
          />
          </div>
          <Button className="close" variant="outlined" onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
  );
};

export default CharacterDetailsModal;
