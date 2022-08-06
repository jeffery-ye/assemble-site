import * as React from "react";

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


const adjectives_list = ["laser-beam", "blue-spotted", "polka-dot", "endangered", "very normal", "crazed", "psychopathic", "part-time", "full-time", "professional", "undercover", "stupid", "idiotic", "shitty", "incontinent"];
const crimes_list = ["does drugs", "sells drugs", "buys drugs", "is a mafia boss", "possesses drugs", "hates children", "pees in public", "commits treason", "skips class", "runs over pigeons", "steals candy from children", "chews with his mouth open", "eats pickles with peanut butter", "drowns small children", "watches Fox News", "handles salmon under suspicious circumstances"]
const events_list = ["was hit by an intercontinental ballistic missile", "lived through a nuclear holocaust", "was forced to watch PragerU videos as a child", "forgot to backup a database before accidentally deleting all of it", "pressed alt+f4 mid-game", "played league of legends", "said “you too” to the waiter telling me to enjoy my food", "was hit by meteor", "talked about unionizing near an amazon hr representative", "was shat on by a bird while wearing a suit", "was dropped from the 6th floor of the phelan building", "was brined in pickle juice"]
const issues_list = ["bad urban design", "climate change", "dog racism", "stroads", "poaching", "systemic racism", "forest fires", "asteroid impacts", "fires caused by exploding teslas", "microplastics", "ronald reagan", "fashion design", "trickle down economics", "copyright infringement", "invasive advertisements", "cryptocurrency", "nfts", "microprocessor shortages"]

function generate() {
  return "aaaa";
}

export default Home;