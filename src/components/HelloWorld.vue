<template>
  <div>
    <v-content> </v-content>
    footer
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      articles: [
        {
          src: require("@/assets/finance.jpg"),
          title: "A Holistic Approach to Financial Data Science",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        },
        {
          src: require("@/assets/pencils.jpg"),
          title: "Think outside the box",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "Small changes, big difference",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
        }
      ],
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "Vibrant Community",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-update",
          title: "Frequent Updates",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ],
      stats: [
        ["24k", "Github Stars"],
        ["330+", "Releases"],
        ["1m", "Downloads/mo"],
        ["5m", "Total Downloads"]
      ],
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
