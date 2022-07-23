import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AdsList from "./components/AdsList";
import "./custom.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Footer from "./components/Footer";
import AdDetail from "./components/AdDetail";
import NewAd from "./components/NewAd";
import { createUploadLink } from "apollo-upload-client";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:1337/graphql",
    link: createUploadLink({
      uri: "http://localhost:1337/graphql",
    }),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AdsList />
            </>
          }
        />
        <Route path="/ad/:id" element={<AdDetail />} />
        <Route path="/nouvelle-annonce" element={<NewAd />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
