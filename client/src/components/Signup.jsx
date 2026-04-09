import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import axios from "axios";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/signup", data);
      setMsg("Signup successful ✅");
    } catch (error) {
      console.log(error);
      setMsg("Signup failed ❌");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} boxShadow={3} borderRadius={2}>
        <Typography variant="h5">Signup</Typography>

        {msg && <Alert sx={{ mt: 2 }}>{msg}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)}>
          
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", { required: "Email required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", { required: "Password required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            label="Role (admin/user)"
            fullWidth
            margin="normal"
            {...register("role", { required: "Role required" })}
            error={!!errors.role}
            helperText={errors.role?.message}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
}