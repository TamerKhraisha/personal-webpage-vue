<template>
  <section
    style=" background-image: -webkit-linear-gradient(to right, #004e92, #000428);background-image: linear-gradient(to right, #004e92, #000428);"
    id="stats"
  >
    <p
      style="font-family: Francois One !important"
      class="text-center subtitle-2 white--text ma-0 pa-3 text-uppercase"
    >
      programming quotes
    </p>
    <v-carousel cycle height="auto" hide-delimiters hide-delimiter-background>
      <v-carousel-item v-for="(quote, i) in quotes" :key="i">
        <v-sheet
          class="d-flex justify-center px-5"
          color="transparent"
          height="400"
          width="auto"
        >
          <div
            class="d-flex flex-column align-center justify-center fill-height"
            style="max-width: 1000px"
          >
            <p
              :class="[
                $vuetify.breakpoint.lgAndDown ? 'headline' : 'display-1',
                'text-center'
              ]"
            >
              " {{ quote.quote }}"
            </p>
            <p style="font-family: Francois One !important" class="title">
              {{ quote.author }}
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
<script>
export default {
  data() {
    return {
      quotes: [
        {
          quote:
            "The only way to learn a new programming language is by writing programs in it.",
          author: "Dennis Ritchie"
        },
        {
          quote:
            "Testing leads to failure, and failure leads to understanding.",
          author: "Burt Rutan"
        },
        {
          quote:
            "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
          author: "Ellen Ullman"
        },
        {
          quote:
            "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
          author: "Joyce Wheeler"
        },
        {
          quote:
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          author: "Martin Fowler"
        },
        {
          quote:
            "In programming the hard part isn't solving problems, but deciding what problems to solve.",
          author: "Paul Graham"
        },
        {
          quote: "Before software can be reusable it first has to be usable.",
          author: "Ralph Johnson"
        },
        {
          quote:
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
          author: "Patrick McKenzie"
        },
        {
          quote:
            "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
          author: "Avid Leinweber"
        },
        {
          quote:
            "Without requirements or design, programming is the art of adding bugs to an empty text file.",
          author: "Louis Srygley"
        },
        {
          quote:
            "The best programs are the ones written when the programmer is supposed to be working on something else.",
          author: "Melinda Varian"
        },
        {
          quote:
            "The key to efficient development is to make interesting new mistakes.",
          author: "Tom Love"
        },
        {
          quote: "The best error message is the one that never shows up.",
          author: "Thomas Fuchs"
        },
        {
          quote:
            "Documentation is a love letter that you write to your future self.",
          author: "Damian Conway"
        },
        {
          quote:
            "The most secure code in the world is code which is never written.",
          author: "Colin Percival"
        },
        {
          quote:
            "A user interface should be so simple that a beginner in an emergency can understand it within ten seconds.",
          author: "Ted Nelson"
        },
        {
          quote:
            "Debuggers don't remove bugs. They only show them in slow motion.",
          author: "Unknown"
        },
        {
          quote:
            "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
          author: "John Romero"
        },
        {
          quote:
            "Programming is the art of algorithm design and the craft of debugging errant code.",
          author: "Ellen Ullman"
        },
        {
          quote:
            "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
          author: "Andy Hunt"
        },
        {
          quote:
            "The first step of any project is to grossly underestimate its complexity and difficulty.",
          author: "Nicoll Hunt"
        },
        {
          quote:
            "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.",
          author: "Niklaus Wirth"
        },
        {
          quote:
            "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
          author: "Seymour Cray"
        },
        {
          quote:
            "That's what's cool about working with computers. They don't argue, they remember everything and they don't drink all your beer.",
          author: "Paul Leary"
        },
        {
          quote:
            "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
          author: "Ted Nelson"
        },
        {
          quote:
            "Write shy code - modules that don't reveal anything unnecessary to other modules and that don't rely on other modules' implementations.",
          author: "Dave Thomas"
        },
        {
          quote:
            "Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.",
          author: "Kathryn Barrett"
        },
        {
          quote:
            "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
          author: "Christopher Thompson"
        },
        {
          quote:
            "A language that doesn't affect the way you think about programming is not worth knowing.",
          author: "Alan J. Perlis"
        },
        {
          quote: "Code is like humor. When you have to explain it, it's bad.",
          author: "Cory House"
        },
        {
          quote:
            "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
          author: "Pragmatic Programmer"
        },
        {
          quote:
            "Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.",
          author: "Dan Hurvitz"
        },
        {
          quote:
            "There is nothing more unproductive than to build something efficiently that should not have been built at all.",
          author: "Milt Bryce"
        },
        {
          quote:
            "The strength of JavaScript is that you can do anything. The weakness is that you will.",
          author: "Reg Braithwaite"
        },
        {
          quote: "Good software, like wine, takes time.",
          author: "Joel Spolsky"
        },
        {
          quote: "If at first you don't succeed, call it version 1.0.",
          author: "Unknown"
        },
        {
          quote:
            "The most important property of a program is whether it accomplishes the intention of its user.",
          author: "C.A.R. Hoare"
        },
        {
          quote:
            "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
          author: "Ellen Ullman"
        },
        {
          quote:
            "So much complexity in software comes from trying to make one thing do two things.",
          author: "Ryan Singer"
        }
      ]
    };
  }
};
</script>
