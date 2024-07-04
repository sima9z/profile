"use client";

import { Grid, Avatar, Paper, styled } from '@mui/material';

import Header from "./components/Header"
import Content from './components/Content';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop:"50px",
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomePage () {

  return (
    <>
    <Header />
    <Grid container direction="column" alignItems="center" marginTop="50px">
      <Grid item xs={8}>
        <Avatar
            alt="profile_image"
            src="https://picsum.photos/150"
            sx={{ width: 200, height: 200, boxShadow: 3 }}
          />
      </Grid>
      <Grid item xs={8}>
        <Item>
          <Content></Content>
        </Item>
      </Grid>
    </Grid>

    <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <img src={`https://picsum.photos/2000`} />
    </div>
    </>
  );
};