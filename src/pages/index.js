import * as React from "react";

const string1 = "hi jasmina";

const Home = () => {
  const [showGenerator, setShowGen] = React.useState(false)
  const onClick = () => setShowGen(true)
  return (
    <div>
      <div class="heading">
        <h1>Uncommon App</h1>
        <h4>subtext</h4>
      </div>

      <div class = "description">
        <p>description</p>
      </div>

      <hr/>

      <div class = "buttons">
        <button type="submit" value="Search" onClick={onClick}> hello </button>
        { showGenerator ? <Generator /> : null }
      </div>
    </div>
  )
}

const Generator = () => (
  <div class = "generatorText">
    Generator
    { generate() }
  </div>
)

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);
  
  return arr;
}

syncReadFile('../_.txt');

const organism_list = ["a", "b", "c"];

function generate() {
  return nouns_list[1];
}

export default Home;