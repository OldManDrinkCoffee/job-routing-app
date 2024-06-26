import { Box, Modal, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../data.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function JobModal() {
  let params = useParams();
  let job = getJob(params.jobId);

  const [modalOpen] = useState(true);
  const navigate = useNavigate();

  // eslint-disable-next-line
  /*
  useEffect(() => {
    if ([location.pathname]) {
      job = getJob(params.jobId);
      setModalopen(true);
    } else {
      setModalopen(false);
    }
  }, [location.pathname]);
  */

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => {
          navigate(-1);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.description}
            <br />
            Location: {job.city}
            <br />
            Experience: {job.yrsXPExpected}
            <br />
            Salary: {job.salaryLow} - {job.salaryHigh}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
