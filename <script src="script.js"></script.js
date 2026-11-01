<script src="script.js"></script>
document.addEventListener("DOMContentLoaded", function () {

  const pages = ["home", "script", "seo", "upload", "analytics"];
  const headings = {
    home: "Dashboard",
    script: "Script Studio",
    seo: "SEO Assistant",
    upload: "Upload Center",
    analytics: "Analytics"
  };

  function openPage(page) {
    if (!pages.includes(page)) return;

    document.querySelectorAll(".page").forEach(section => {
      section.classList.toggle("hidden", section.id !== page);
    });

    document.querySelectorAll(".nav").forEach(button => {
      button.classList.toggle("active", button.dataset.page === page);
    });

    document.getElementById("heading").textContent = headings[page];
  }

  document.querySelectorAll(".nav").forEach(button => {
    button.addEventListener("click", () => {
      openPage(button.dataset.page);
    });
  });

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
      openPage(button.dataset.go);
    });
  });

  // Comedy Script Generator
  document.getElementById("makeScript").addEventListener("click", function () {
    const topic = document.getElementById("topic").value.trim();
    const style = document.getElementById("style").value;
    const output = document.getElementById("scriptOut");

    if (!topic) {
      output.textContent = "Please enter your video topic first.";
      return;
    }

    output.textContent =
`TITLE: ${topic}

STYLE: ${style}

SCENE 1 – HOOK
Start with a funny expression and say:
"Are bhai, aaj mere saath kya ho gaya!"

SCENE 2 – MAIN COMEDY
Introduce the situation:
${topic}

Add two funny dialogues and reactions.
Use different expressions and quick cuts.

SCENE 3 – ENDING
Finish with an unexpected funny punchline.

CALL TO ACTION:
Like, Share and Subscribe to Sunny Comedy!

NOTE: This is a sample script. Customize the dialogues before recording.`;
  });

  // SEO Generator
  document.getElementById("makeSeo").addEventListener("click", function () {
    const topic = document.getElementById("seoTopic").value.trim();
    const output = document.getElementById("seoOut");

    if (!topic) {
      output.textContent = "Please enter your video topic first.";
      return;
    }

    output.textContent =
`TITLE:
${topic} 😂 | Funny Comedy Shorts

DESCRIPTION:
Watch this original comedy video by Sunny Comedy!
Enjoy the funny moments and share your thoughts.

HASHTAGS:
#SunnyComedy #Comedy #Funny
#YouTubeShorts #Shorts #IndianComedy

KEYWORDS:
${topic}, comedy shorts, funny video, Indian comedy

TIP:
Use a relevant thumbnail and an accurate title.
Views are not guaranteed.`;
  });

  // Video file preview
  document.getElementById("videoFile").addEventListener("change", function () {
    const file = this.files[0];
    document.getElementById("fileName").textContent =
      file ? "Selected: " + file.name : "No file selected.";
  });

  console.log("Sunny Comedy AI Manager is ready!");
});
