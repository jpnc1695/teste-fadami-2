import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import IUsuario from "../../Interface/IUsuario"
import http from "../../http"

const AdminUsuarios = () => {

  const [usuarios, setUsuarios] = useState<IUsuario[]>([])
/*   const [apagar, setApagar] = useState(false)
 */
  useEffect(() => {
    http.get<IUsuario[]>('/usuarios')
        .then(res => setUsuarios(res.data))
  }, [] )

  const excluirUsuario = (usuarioExcluido:IUsuario) => {
    http.delete(`usuarios/${usuarioExcluido._id}/`)
        .then(()=> {
          const listaUsuarios = usuarios.filter(usuario => usuario._id !== usuarioExcluido._id)
          setUsuarios([...listaUsuarios])
/*           setApagar(true)
 */        })
/*           setApagar(false)
 */  }

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
              <TableRow key={usuario._id}>
                <TableCell> {usuario.nome} </TableCell>
                <TableCell> {usuario.cpf} </TableCell>
                <TableCell>
                  <Button variant='contained'> 
                      Editar 
                  </Button>
                </TableCell>
                <TableCell>
                  <Button 
                  variant='contained'
                  color='error'
                  onClick={()=> excluirUsuario(usuario) }
                  >
                      Deletar
                  </Button>      
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AdminUsuarios