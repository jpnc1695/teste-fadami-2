import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"
import { Link as RouterLink, Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">
              Administração
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Link component={RouterLink} to="/usuarios">
                <Button sx={{ my: 2, color: 'white' }}>
                  Usuarios
                </Button>
              </Link>
              <Link component={RouterLink} to="/usuarios/novo">
                <Button sx={{ my: 2, color: 'white' }}>
                  Novo Usuário
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ mt: 10 }}>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Outlet />
          </Paper>
        </Container>
      </Box>
    </>
  )
}


export default PaginaPadrao