import { Container, Typography } from "@mui/material";

type TableNotFoundProps = {
  children: React.ReactNode;
};

const TableNotFound: React.FC<TableNotFoundProps> = ({ children }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Typography textAlign={"center"} variant={"h6"} pb={6}>
        {children}
      </Typography>
    </Container>
  );
};

export default TableNotFound;
