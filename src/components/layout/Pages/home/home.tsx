
import { Box, Grid, Text } from "@pankod/refine-chakra-ui";
import Chart from "./assets/chart";
import Card from "./assets/card";
function Home() {
  return (
    <>
      <Grid gap={8} mx={"4em"} gridTemplateColumns={"repeat(auto-fit, 300px)"} justifyContent={'space-around'}>
        <Box>
          <Card title={"projet innovent"} count={258} />
        </Box>

        <Box>
          <Card title={"stratups"} count={368} />
        </Box>

        <Box>
          <Card title={"incubateur"} count={154} />
        </Box>
      </Grid>

      <Box
        mt={"2em"}
        p={"1em 3em"}
        borderRadius={"3xl"}
        shadow={"0 0 10px rgba(0,0,0,0.2)"}
      >
        <Text fontSize={"2em"} fontWeight={"bold"} ml={5}>
          startup.dz chart
        </Text>
        <Chart />
      </Box>
    </>
  );
}

export default Home;
