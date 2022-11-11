import { TextField, Button, Typography, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import http from "../../http";
import IUsuario from "../../Interface/IUsuario";

const FormularioUsuario = () => {

  const navigate = useNavigate()
  const parametros = useParams()

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSsenha] = useState('')

  useEffect(() => {
    if (parametros.id) {
      http.get<IUsuario>(`usuarios/${parametros.id}`)
        .then(res => setNome(res.data.nome))

      http.get<IUsuario>(`usuarios/${parametros.id}`)
        .then(res => setCpf(res.data.cpf))
    }
  }, [parametros])

  const submeterForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parametros.id) {
      http.put(`usuarios/${parametros.id}`, {
        nome: nome,
        cpf: parseFloat(cpf),
        senha:senha
      })
        .then(() => {
          setNome('')
          setCpf('')
          setSenha('')
          setConfirmarSsenha('')
        })
        .catch(error => {
          alert(error)
        })
    } else {
      http.post('/usuarios', {
        nome: nome,
        cpf: parseFloat(cpf),
        senha: senha
      })
      .then(() => {
        setNome('')
        setCpf('')
        setSenha('')
        setConfirmarSsenha('')
      })
    }
  }

  return (
    <>
      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <Box component='form' onSubmit={submeterForm} sx={{ width: '100%' }}>
                <Typography component="h1" variant="h6">
                  Novo Usuário
                </Typography>
                <TextField
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  label="Nome do Usuário"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                  label="Cpf do Usuário"
                  variant="standard"
                  fullWidth
                  required
                  margin="dense"
                />
                <TextField
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  label="Senha"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  value={confirmarSenha}
                  onChange={e => setConfirmarSsenha(e.target.value)}
                  label="Confirmar Senha"
                  variant="standard"
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: 1 }}
                  fullWidth
                >
                  Salvar
                </Button>
                <Button
                  onClick={() => {
                    navigate(-1)
                  }}
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: 1 }}
                  fullWidth
                >
                  Voltar
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default FormularioUsuario