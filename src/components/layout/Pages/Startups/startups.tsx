import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Button } from "@pankod/refine-chakra-ui";
import { useList } from "@pankod/refine-core/dist/hooks";
import { Navigate, useNavigate } from "@pankod/refine-react-router-v6";
import React from "react";


function ProjetInnovant() {
  const Navigate = useNavigate();
  return (
    <>
      <Grid p={8}>
        <Button variant={"outline"} w={'fit-content'} justifySelf={'end'} onClick={() =>Navigate('create')}>
          <FontAwesomeIcon icon={faAdd} />
          Create
        </Button>
      </Grid>
    </>
  );
}

export default ProjetInnovant;