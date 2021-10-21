import React from "react";
import { client } from "./services/ApolloClient/client";
import { makeStyles } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import Header from "./components/Header/Header";
import PropertiesListing from "./components/PropertiesListing/PropertiesListing";
import ContentBottom from "./components/ContentBottom/ContentBottom";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: 1110,
    margin: "0 auto",
    [theme.breakpoints.down('lg')]: {
      padding: "16px"
    },
    fontFamily: "Mulish"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Header />
      <div className={classes.main}>
        <PropertiesListing />
        <ContentBottom />
      </div>
    </ApolloProvider>
  );
}

export default App;
