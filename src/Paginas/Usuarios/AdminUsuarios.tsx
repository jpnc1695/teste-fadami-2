import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from "@mui/material"
import usuarios from '../../usuarios.json'

const AdminUsuarios = () => {

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Usuario
              </TableCell>
              <TableCell>
                Cpf
              </TableCell>
              <TableCell>
                Editar
              </TableCell>
              <TableCell>
                Deletar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map(usuario =>
              <TableRow key={usuario.id}>
                <TableCell> {usuario.nome} </TableCell>
                <TableCell> {usuario.cpf} </TableCell>
                <TableCell>
                  <Button variant='contained'> Editar </Button>
                </TableCell>
                <TableCell>
                  <Button variant='contained' color='error'>Deletar</Button>      
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AdminUsuarios