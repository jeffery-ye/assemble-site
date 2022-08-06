import * as React from "react";
import '../styles/main.css';

const Home = () => {
  const [showGenerator, setShowGen] = React.useState(false)
  const onClick = () => setShowGen(true)
  return (
    <div>
      <div class="heading">
        <h1>Uncommon App</h1>
      </div>

      <div class = "description">
        <p>Write the worst college essay.</p>
      </div>

      <div class = "buttons">
        <button type="submit" value="Search" onClick={onClick}>write</button>
        
      </div>

      <hr/>

      { showGenerator ? <Generator /> : null }
      
    </div>
  )
}

const Generator = () => (
  <div class = "generatorText">
    <h5>Prompt: The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?</h5>
  </div>
)

const adjectives_list = ["laser-beam", "blue-spotted", "polka-dot", "endangered", "very normal", "crazed", "psychopathic", "part-time", "full-time", "professional", "undercover", "stupid", "idiotic", "shitty", "incontinent"];
const crimes_list = ["does drugs", "sells drugs", "buys drugs", "is a mafia boss", "possesses drugs", "hates children", "pees in public", "commits treason", "skips class", "runs over pigeons", "steals candy from children", "chews with his mouth open", "eats pickles with peanut butter", "drowns small children", "watches Fox News", "handles salmon under suspicious circumstances"]
const events_list = ["was hit by an intercontinental ballistic missile", "lived through a nuclear holocaust", "was forced to watch PragerU videos as a child", "forgot to backup a database before accidentally deleting all of it", "pressed alt+f4 mid-game", "played league of legends", "said “you too” to the waiter telling me to enjoy my food", "was hit by meteor", "talked about unionizing near an amazon hr representative", "was shat on by a bird while wearing a suit", "was dropped from the 6th floor of the phelan building", "was brined in pickle juice"]
const issues_list = ["bad urban design", "climate change", "dog racism", "stroads", "poaching", "systemic racism", "forest fires", "asteroid impacts", "fires caused by exploding teslas", "microplastics", "ronald reagan", "fashion design", "trickle down economics", "copyright infringement", "invasive advertisements", "cryptocurrency", "nfts", "microprocessor shortages"]
const times_list = ["Picoseconds", "Yoctoseconds", "Jiffies", "Centuries", "Millenniums", "Eras", "Eons", "attoseconds", "nanoseconds", "seconds", "minutes", "millidays", "moments", "hours", "days", "weeks", "months", "lunar years", "Gregorian years", "olympiads", "decades", "gigaseconds", "galactic years"]
const vehic_list = ["Unidentified Aerial Phenomena", "Kia Soul student driver", "Hydrogen powered garbage truck", "Toyota corolla", "Model train", "Little tesla sedan", "Boeing 747", "Challenger 1 shuttle", "Amazon prime drone", "Toy construction truck", "Paper airplane", "Runaway office chair", "Doordash robot", "Dog stroller"]
const school_list = ["Harvard", "BYU", "University of Southern Alabama", "Prager 'University'", "Southeastern Bible College", "Brown", "Yale", "Trade School", "Pilates class", "Public relations training", "McDonald’s Culinary Institute", "Texas Institute of Technology", "Hell’s Kitchen Culinary School"]
const place_list = ["Boring, Oregon", "Bugscuffle, Tennesee", "Bulls, New Zealand", "Chicken, Alaska", "Condom, France", "Dinkytown, Minnesota", "Fart, Virginia", "French Lick, Indiana", "Friendly, West Virginia", "Gogogogo, Madagascar", "Greasy, Oklahoma", "Hazard, Kentucky", "Hygiene, Colorado", "Kill, Ireland", "Lost, Scotland", "Lick Fork, Virginia", "My Large Intestine, Texas", "Mars", "Venus"]
const org_list = ["actor", "actress", "amoeba", "cat", "dog", "tiger", "liger", "lion", "capybara", "Anteater", "Autocrat", "E. coli", "Prophet", "Sentient alien robot", "Blue tit", "Human being"]
const job_list =["telemarketer", "computer scientist", "HR Director", "humidifier technician", "anime illustrator", "teacher", "child soldier", "president of local golf club", "revolutionary", "abstract artist", "guillotine operator", "executioner", "pirate", "YouTuber", "Twitch streamer", "groupie", "professional cuddler", "online dating ghostwriter", "hippotherapist", "snake milker", "paper towel sniffer", "waterslide tester", "bingo manager", "feng shui consultant", "dog food taster", "drying paint watcher", "full-time netflix viewer", "iceberg mover"]

function generate() {
  return "aaaa";
}

export default Home;