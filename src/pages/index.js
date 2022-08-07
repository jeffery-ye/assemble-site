import * as React from "react";
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCopy
} from '@fortawesome/free-solid-svg-icons'
import ReactDOMServer from 'react-dom/server'

var iterations = -1;
var fullEssay = ""

export class Home extends React.Component {

  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visible: false
    }
  }
  handleClick = () => {
    this.setState({visible: true});
    iterations = iterations+1;
  }
  render() {
    return (
      <div>
        <div class="heading">
          <h1>Uncommon App</h1>
        </div>

        <div class = "description"> 
          <p>Write the worst college essay ~ 100% guaranteed rejection</p>
        </div>

        <div class = "buttons">
          <button class = "submitButton" onClick={this.handleClick}>WRITE!</button>
        </div>

        <hr/>

        { this.state.visible ? <Generator /> : null }
        
        <div class="footer">
          <h3>Made with 💩 by Jeffery and Jasmina</h3>
        </div>
      </div>
    )
  }
}

export class Generator extends React.Component {  
  render() {
    if(iterations % 3 === 0) {
      return (
        <div class = "generatorText">
          <script src="https://kit.fontawesome.com/6e0c593f27.js" crossorigin="anonymous"></script>
          <p id = "essayText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've faced hardships, challenges, and failures for my entire life, and I believe that they're fundamental 
            for future success. As { getAorAn(getSnippet(adjectives_list)) }&nbsp;{ getSnippet(org_list) }, my life was shaped by my experience 
            with { getSnippet(issues_list) }. Ever since I { getSnippet(scenario_list) }, and my mother was run over 
            by { getAorAn(getSnippet(vehic_list)) }, dying instantly, I've been living with my { getSnippet(caretaker_list) } who { getSnippet(crimes_list) } and 
            does { getSnippet(hobby_list) } in their spare time. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My life had been relatively easy up until this point, but everything changed 
            when I { getSnippet(events_list) }. I was on the brink of death for { Math.random()*50 } whole { getSnippet(times_list) } before the doctors said I would pull 
            through. From that point on, I pulled my life together. I graduated high school with a { Math.floor(Math.random()*3) + "." + Math.floor(Math.random()*9) } GPA.
            I knew that I wanted to go to { getSnippet(school_list) } and become the best { getSnippet(job_list) } the world has ever seen. Hope to see you all on campus next fall!</p>
            <button class = "copyButton" onClick={getEssay}><FontAwesomeIcon icon={faCopy} size="1x" /></button>
        </div>
      )
    }
    else if(iterations % 3 === 1) {
      return (
        <div class = "generatorText">
          <p id = "essayText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've experienced a life changing event that completely and irreversibly altered my outlook on life before.
            It affected how I viewed the world and thought about things. For much of my life, I felt stuck. I wasn't advancing, growing, or becoming a better person. 
            I had been working as { getAorAn(getSnippet(job_list)) } for { Math.random()*10 }&nbsp;{ getSnippet(times_list) }. Every day was the same; wake up, 
            go to work riding { getAorAn(getSnippet(vehic_list)) }, come home, and make dinner for my { getSnippet(caretaker_list) } who &nbsp;
            { getSnippet(crimes_list) }. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But suddenly, on a day like any other, I { getSnippet(events_list) }. This event changed my entire life for the better. 
            I quit my job, packed my bags, and set off to { getSnippet(place_list) }. I've since then viewed every day I live like an adventure, and grown 
            greatly as a { getSnippet(org_list) }. Now that I finally know what I'm doing in life, I'm applying to you: { getSnippet(school_list) }, in hopes that
            you can help me achieve greatness as the best { getSnippet(job_list) } I can be.</p>
            <button class = "copyButton" onClick={getEssay}><FontAwesomeIcon icon={faCopy} size="1x" /></button>
        </div>
      )
    }
    else {
      return (
        <div class = "generatorText">
          <p id = "essayText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In { Math.floor(Math.random()*2020) } A.D, { getAorAn(getSnippet(adjectives_list)) }&nbsp;{ getSnippet(job_list) }
          &nbsp;{ getSnippet(events_list) }. This relates to me, because I too have experienced a truly traumatising event. I was forced to move to { getSnippet(place_list) }&nbsp;
          and ride a {getSnippet(vehic_list) } for transportation. I had to get a job as { getAorAn(getSnippet(job_list)) } and deal with { getSnippet(issues_list) }. This experience taught me what it meant to truly have nothing.
          I had to move in with { getAorAn(getSnippet(org_list)) }, who I learned humility, respect, and { getSnippet(hobby_list) } from. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That time in my life was truly special, and now that
           I've become the best person I can, I am now applying to further my education in hopes of becoming { getAorAn(getSnippet(job_list)) }. When I look back to 
           my youth, when I { getSnippet(scenario_list) }, I can appreciate how far I have really come. I now wholeheartedly believe I am a 
           perfect fit for { getSnippet(school_list) }. Hope to see you on campus next fall.</p>
           <button class = "copyButton" onClick={getEssay}><FontAwesomeIcon icon={faCopy} size="1x" /></button>
        </div>
      )
    }
  }
}


const adjectives_list = ["wanted-by-the-FBI", "chronically ill", "WHO watchlist member", "very normal", "hopped-up-on-amphetamines", "psychopathic", "part-time", "full-time", "professional", "undercover", "clinically insane", "incontinent", "endorsed-by-the-catholic-church"];
const crimes_list = ["does drugs", "sells drugs", "is a mafia boss", "hates children", "urinates in public", "commits treason", "commits truancy", "runs over pigeons", "steals candy from children", "chews with their mouth open", "plays Genshin Impact", "commits drive-by baptisms", "watches Fox News", "handles salmon under suspicious circumstances"]
const events_list = ["was hit by an intercontinental ballistic missile", "lived through a nuclear holocaust", "was forced to watch PragerU videos", "forgot to backup a database before accidentally deleting all of it", "pressed alt+f4 mid-game", "played League of Legends", "said “you too” to the waiter saying 'enjoy your food'", "was wrong on the internet", "talked about unionizing near an Amazon HR representative", "was shat on by a bird while wearing a suit", "was dropped from the 6th floor of the Phelan building", "was brined in pickle juice"]
const issues_list = ["bad urban design", "climate change", "dog racism", "stroads", "poaching", "littering", "forest fires", "fires caused by exploding teslas", "microplastics", "Ronald Reagan", "fashion design", "trickle down economics", "copyright infringement", "invasive advertisements", "cryptocurrency", "NFTs", "microprocessor shortages"]
const times_list = ["Picoseconds", "Jiffies", "Centuries", "Millenniums", "Eras", "Eons", "nanoseconds", "seconds", "minutes", "millidays", "hours", "days", "weeks", "months", "lunar years", "decades", "gigaseconds"]
const vehic_list = ["an unmarked government vehicle", "Unidentified Aerial Phenomena", "Kia Soul student driver", "model train", "RT-2PM2 Topol-M Sickle B solid fuel rocket", "Boeing 747", "Challenger space shuttle", "Amazon Prime delivery drone", "toy construction truck", "paper airplane", "runaway office chair", "doordash robot", "child's stroller"]
const school_list = ["Harvard", "BYU", "University of Southern Alabama", "Prager 'University'", "Southeastern Bible College", "Brown", "Yale", "Electrician Trade School", "South Side Pilates class", "Amazon Public relations training", "McDonald’s Culinary Institute", "Hell’s Kitchen Culinary School"]
const place_list = ["Boring, Oregon", "Bugscuffle, Tennesee", "Bulls, New Zealand", "Chicken, Alaska", "Condom, France", "Dinkytown, Minnesota", "French Lick, Indiana", "Friendly, West Virginia", "Gogogogo, Madagascar", "Greasy, Oklahoma", "Hazard, Kentucky", "Hygiene, Colorado", "Kill, Ireland", "Lost, Scotland", "Lick Fork, Virginia", "My Large Intestine, Texas", "Mars", "Venus"]
const org_list = ["b-list actor", "cute puppy with laser pointer attachment", "brain-eating amoeba", "k9 drug dog", "robotic bird", "biblical angel", "liger", "pokemon", "capybara", "anteater", "autocrat", "e. coli bacterium", "religious prophet", "sentient alien robot", "human being"]
const job_list = ["tinfoil hat quality assurance manager", "telemarketer", "copy paster (computer scientist)", "space heater technician", "humidifier technician", "anime illustrator", "body armor tester", "child soldier", "president of a local golf club", "communist revolutionary", "member of the mob", "guillotine operator", "drug dealer", "(online) pirate", "YouTuber", "Twitch streamer", "groupie", "professional online dater", "animal therapist", "snake milker", "paper towel sniffer", "waterslide tester", "bingo club manager", "feng shui consultant", "dog food taster", "drying paint watcher", "full-time netflix viewer", "NSA whistleblower"]
const scenario_list = ["reported my parents to the CIA for un-american activity","was dropped on my head as a baby", "was left on the side of the road in the middle of the Mojave Desert", "was sold to cannibals living in the Canadian wilderness", "was gifted to a satanic cult", "was saved from a squirrel attack that claimed the lives of my father and multiple bystanders", "was brought via stork to the Wendy's on 4th and 9th", "got lost in the Costco fruit aisle"];
const hobby_list = ["crochet", "extreme sidewalk mountain biking", "long distance ultimate frisbee", "underwater football", "underwater basket weaving", "children's karate", "weeaboo katana practice", "amateur weed growing", "some light trespassing", "ceramic bird shooting with high explosives", "Texas ice fishing"]
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

function getEssay() {
  fullEssay = document.getElementById("essayText").innerText;
  fullEssay.replaceAll("&nbsp;","");
  navigator.clipboard.writeText(fullEssay)
}

function getEssayText() {
  fullEssay = document.getElementById("essayText").innerText;
  fullEssay.replaceAll("&nbsp;","");
  return fullEssay;
}

export default Home;