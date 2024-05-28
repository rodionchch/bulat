import { Box, Container } from "@mui/material";
import Table from "components/Table";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box py={8}>
        <Table />
      </Box>
    </Container>
  );
};

export default HomePage;
