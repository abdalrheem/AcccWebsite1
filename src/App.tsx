import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Component } from "react";
import NavBar from "./Component/NavBar";
import GameGrid from "./Component/GameGrid";
import GenresList from "./Component/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav   nav" "aside   main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" width="200px" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
