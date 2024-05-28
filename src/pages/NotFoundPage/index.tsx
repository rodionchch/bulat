import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Typography textAlign={"center"} variant={"h4"} pb={6}>
        Страница не найдена
      </Typography>
    </Container>
  );
};

export default HomePage;
