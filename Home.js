var list = [
    { title: "EcoKB (2019-2022)", image: "images/projects/ecokb.jpg", description: "EcoKB was a Minecraft server I co-founded with a friend a few years ago. It marked my initial experience with team management and coding, primarily using Skript. Over the next few years, we dedicated ourselves to maintaining and developing the server as it gradually expanded." },
    { title: "Moul (2022)", image: "images/projects/moul.png", description: "Moul was one of our most ambitious projects, where I collaborated with a team of developers to create a fully customized game within the Minecraft universe. This endeavor included crafting unique models, textures, user interfaces, sound effects, and a bunch of other creative elements." },
    { title: "Crusaders (2023)", image: "images/projects/crusaders.png", description: "Crusaders a unique Low Poly Medieval RTS game that pushed my modeling skills to their limits, as it was the first time I truly would go on to work with Blender. The game never got finished, but it for sure earns a spot here, because of its complexity!" },
    { title: "Minigolf VR (2023)", image: "images/projects/roblox.png", description: "Minigolf VR was a small duo project in which we made a VR game from the ground up using the Roblox Engine. It was a massive challenge, but we made it happen. This was also my introduction to more complex coding due to the nature of the project!" },
    { title: "Other Projects", image: "images/projects/other.png", description: "I've been involved in numerous smaller projects, from assisting others with their endeavors to working on my own creations. The images above provide just a glimpse into the many rewarding experiences and accomplishments I've gained through these diverse projects." },
];

var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById("arrow-left");
var num = 0;
function updateProjects(num) {
    document.getElementById("project-title").textContent = list[num].title;
    document.getElementById("project-description").textContent = list[num].description;
    document.getElementById("project-image").src = list[num].image;
}

arrowRight.onclick = function(e) {
    num += 1;
    if (num > list.length - 1) {
        num = 0;
    }
    updateProjects(num)
}

arrowLeft.onclick = function(e) {
    num -= 1;
    if (num < 0) {
        num = list.length - 1;
    }
    updateProjects(num)
}

updateProjects(num)