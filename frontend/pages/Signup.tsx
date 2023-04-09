import React, { useState } from 'react';
import type { NextPage } from 'next'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useRouter } from 'next/router';

const Signup: NextPage = () => {
  const router = useRouter();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("登録しました");
      router.push('/Signin')
    } catch(error) {
      alert("正しく入力してください");
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Grid sx={{ width: 500, }}>
            <h1>サインアップ</h1>
              <TextField
                label="Email"
                type="email"
                size="small"
                value={registerEmail}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                size="small"
                value={registerPassword}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
              />
              <Grid container justifyContent="center" sx={{ mt: 2, }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignUp}
                >
                  登録する
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signup;
