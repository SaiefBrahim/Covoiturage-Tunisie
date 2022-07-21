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

function App() {
  const client = new ApolloClient({
    uri: "http://192.168.1.149:1337/graphql",
    cache: new InMemoryCache(),
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
