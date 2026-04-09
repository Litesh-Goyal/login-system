import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center" sx={{ boxShadow: 3, p: 4, borderRadius: 2 }}>
        
        <Typography variant="h4" gutterBottom>
          Welcome 👋
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>

      </Box>
    </Container>
  );
}