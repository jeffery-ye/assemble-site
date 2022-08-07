import * as React from "react";
import '../styles/main.css';

export class Home extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visible: false
    }
  }
  handleClick = () => {
    this.setState({visible: true});
  }
  render() {
    return (
      <div>
        <div class="heading">
          <h1>Uncommon App</h1>
        </div>

        <div class = "description"> 
          <p>Write the worst college essay.</p>
        </div>

        <div class = "buttons">
          <button class = "submitButton" onClick={this.handleClick}>WRITE!</button>
        </div>

        <hr/>

        { this.state.visible ? <Generator /> : null }
        
      </div>
    )
  }
}

const Generator = () => (
  <div class = "generatorText">
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've faced hardships, challenges, and failures for my entire life, and I believe that they're fundamental for future success. 
      As { getAorAn(getSnippet(adjectives_list)) } &nbsp;
      { getSnippet(org_list) }, my life was shaped by my experience 
      with { getSnippet(issues_list) }. Since I was { getSnippet(scenario_list) }, and my mother was run over 
      by { getAorAn(getSnippet(vehic_list)) }, I've been living with my { getSnippet(caretaker_list) } who { getSnippet(crimes_list) } and 
      does { getSnippet(hobby_list) } in their spare time. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My life had been relatively easy up until this point, but everything changed 
      when I { getSnippet(events_list) }. I was on the brink of death for { Math.random()*50 } whole { getSnippet(times_list) } before the doctors said I would pull 
      through. From that point on, I pulled my life together. I graduated high school with a { Math.floor(Math.random()*4) + "." + Math.floor(Math.random()*9) } GPA.
      I knew that I wanted to go to { getSnippet(school_list) } and become the best { getSnippet(job_list) } the world has ever seen.</p>
  </div>
)


const adjectives_list = ["blue-spotted", "chronically ill", "endangered", "very normal", "hopped-up-on-amphetamines", "psychopathic", "part-time", "full-time", "professional", "undercover", "clinically insane", "incontinent", "endorsed-by-the-church"];
const crimes_list = ["does drugs", "sells drugs", "buys drugs", "is a mafia boss", "possesses drugs", "hates children", "urinates in public", "commits treason", "skips class", "runs over pigeons", "steals candy from children", "chews with his mouth open", "eats pickles with peanut butter", "drowns small children", "watches Fox News", "handles salmon under suspicious circumstances"]
const events_list = ["was hit by an intercontinental ballistic missile", "lived through a nuclear holocaust", "was forced to watch PragerU videos as a child", "forgot to backup a database before accidentally deleting all of it", "pressed alt+f4 mid-game", "played league of legends", "said “you too” to the waiter telling me to enjoy my food", "was hit by meteor", "talked about unionizing near an amazon hr representative", "was shat on by a bird while wearing a suit", "was dropped from the 6th floor of the phelan building", "was brined in pickle juice"]
const issues_list = ["bad urban design", "climate change", "dog racism", "stroads", "poaching", "littering", "forest fires", "asteroid impacts", "fires caused by exploding teslas", "microplastics", "ronald reagan", "fashion design", "trickle down economics", "copyright infringement", "invasive advertisements", "cryptocurrency", "nfts", "microprocessor shortages"]
const times_list = ["Picoseconds", "Jiffies", "Centuries", "Millenniums", "Eras", "Eons", "nanoseconds", "seconds", "minutes", "millidays", "hours", "days", "weeks", "months", "lunar years", "decades", "gigaseconds"]
const vehic_list = ["Unidentified Aerial Phenomena", "Kia Soul student driver", "hydrogen powered garbage truck", "Toyota Corolla", "model train", "little tesla sedan", "Boeing 747", "Challenger space shuttle", "Amazon Prime drone", "toy construction truck", "paper airplane", "runaway office chair", "doordash robot", "stroller holding a chihuahua"]
const school_list = ["Harvard", "BYU", "University of Southern Alabama", "Prager 'University'", "Southeastern Bible College", "Brown", "Yale", "Trade School", "Pilates class", "Public relations training", "McDonald’s Culinary Institute", "Texas Institute of Technology", "Hell’s Kitchen Culinary School"]
const place_list = ["Boring, Oregon", "Bugscuffle, Tennesee", "Bulls, New Zealand", "Chicken, Alaska", "Condom, France", "Dinkytown, Minnesota", "French Lick, Indiana", "Friendly, West Virginia", "Gogogogo, Madagascar", "Greasy, Oklahoma", "Hazard, Kentucky", "Hygiene, Colorado", "Kill, Ireland", "Lost, Scotland", "Lick Fork, Virginia", "My Large Intestine, Texas", "Mars", "Venus"]
const org_list = ["b-list actor", "brain-eating amoeba", "k9 drug dog", "robotic bird spy drone", "biblical angel", "liger", "pokemon", "capybara", "anteater", "autocrat", "e. coli bacterium", "Prophet", "Sentient alien robot", "Human being"]
const job_list = ["telemarketer", "computer scientist", "HR Director", "humidifier technician", "anime illustrator", "teacher", "child soldier", "president of local golf club", "revolutionary", "abstract artist", "guillotine operator", "executioner", "pirate", "YouTuber", "Twitch streamer", "groupie", "professional cuddler", "online dating ghostwriter", "hippotherapist", "snake milker", "paper towel sniffer", "waterslide tester", "bingo manager", "feng shui consultant", "dog food taster", "drying paint watcher", "full-time netflix viewer", "iceberg mover"]
const scenario_list = ["reported my parents to the CIA for un-american activity","dropped on my thick head as a baby, causing an explosion with the equivalent energy of 1.2 megatons of TNT", "left on the side of the road in the middle of the Mojave Desert", "sold to cannibals living in the Canadian wilderness", "gifted to the cult of the sun", "saved from a squirrel attack that claimed the lives of my father and multiple bystanders", "was brought via stork to the Wendy's on 4th and 9th"];
const hobby_list = ["crochet", "extreme sidewalk mountain biking", "long distance ultimate frisbee", "underwater football", "underwater basket weaving", "children's karate", "weeaboo katana practice", "potion brewing with the local wizard", "ceramic bird shooting with high explosives", "Texas ice fishing"]
const caretaker_list = ["uncle", "orphanage overseer", "labor camp warden", "local governer", "state-mandated carrier pigeon", "fellow communist revolutionary", "district representative"]
function getAorAn(input) {
  const str = input;
  if(str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u' ) {
    return "an " + input + "";
  }
  else {
    return "a " + input + "";
  }
}

function getSnippet(arr) {
  const newArray = [].concat(arr);
  return newArray[Math.floor(Math.random()*newArray.length)];
}



export default Home;