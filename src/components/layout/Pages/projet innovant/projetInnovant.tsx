import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Button } from "@pankod/refine-chakra-ui";

import { useNavigate } from "@pankod/refine-react-router-v6";


import client from "./assets/client";

import Table from "./assets/table";
function ProjetInnovant() {
  const Navigate = useNavigate();
  return (
    <>
      <Grid p={8}>
        <Button variant={"outline"} w={'fit-content'} justifySelf={'end'} onClick={() =>Navigate('create')}>
          <FontAwesomeIcon icon={faAdd} />
          Create
        </Button>
        <Table clients={client()} />
      </Grid>
    </>
  );
}

export default ProjetInnovant;
