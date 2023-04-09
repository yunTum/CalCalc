import React, { useState } from 'react';
import type { NextPage } from 'next'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebaseConfig';

const Signin: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    console.log('Email:', email);
    console.log('Password:', password);
    //Pass1234
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push('/MyPage')
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
          <h1>カロリー計算</h1>
            <TextField
              label="Email"
              type="email"
              size="small"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              size="small"
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              margin="normal"
            />
            <Grid container justifyContent="center" sx={{ mt: 2, }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignIn}
              >
                ログイン
              </Button>
            </Grid >
            <Grid container justifyContent="center" sx={{ mt: 2, }}>
              <Link href="/Signup">
                <div>アカウント登録はこちら</div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
};

export default Signin;
