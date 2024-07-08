"use client";

import { Grid, Avatar, Paper, styled } from '@mui/material';

import Content from './components/Content';
import Header from './components/Header'

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
    <Grid container direction="column" alignItems="center" marginTop="100px">
      <Grid item xs={8}>
        <Avatar
            alt="profile_image"
            src="https://picsum.photos/150"
            sx={{ width: 200, height: 200, boxShadow: 5 }}
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