const buttons = document.querySelectorAll('.options button');
const content = document.getElementById('content');
const emergencyList = document.getElementById('emergency-resources');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const selection = this.id;
    content.innerHTML = ""; 

    
    if (selection === 'watch-videos') {
      content.innerHTML = `<h3>Not feeling fine? Let me help you</h3>
      <ul>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/tEmt1Znux58?si=klaPElRN7nZJTiq3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/8vkYJf8DOsc?si=lxmeDV_4x_wPfVKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><<iframe width="560" height="315" src="https://www.youtube.com/embed/-hwxBBChA2c?si=86OAiEdgmrGNTuSG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/-_01kgwFnw8?si=cFU2PaBH3DhAIRVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/nW1QOurqquk?si=OnUV73DYmPjtECeT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
      </ul>`;
    } else if (selection === 'listen-music') {
      content.innerHTML = `<h3>Here's a bunch of playlist to help you</h3>
      <ul>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIg42NGihn0NZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7INcD4lmarWTQiDVodjVt4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4AnAUkQNrLKlJCInZGSXRO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/39S5ThZm7hTYkMcnujZpe2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3L0kSJqXH4ZKN6dsneIdW6?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4lQQcVw2h3Yj7GhMd5iiLn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2kgIiIvUPOX4Ebxsfo4OUL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2JmLaircTq3SCxo9DHCZaY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
      </ul>`;
    } else if (selection === 'cook-nice') {
      content.innerHTML = `<h3>Treat yourself, you deserve it</h3>
      <ul>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/vtwX4aFMiK8?si=qcMAO3Q04KJpa5g5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/9_5wHw6l11o?si=RI7GqbEJRq-2FS7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/Kes2fk-Nuwo?si=YBgc9cqgSybHodzZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/45awieDmjVQ?si=ktLHadX0cOs_K8yf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/_f4ArgoSmoM?si=rxO4avApq4iK4YD1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
      </ul>`;
    } else if (selection === 'help') {
        content.innerHTML = `<h3>Talk to someone, Let us help you</h3>
        <ul>
            <li a href="https://findahelpline.com">Click here to talk to someone</li>
        </ul>`   
    
    } 
    else if (selection === 'play-game'){
        content.innerHTML = `<h3>Play something fun</h3>
        <ul>
            <li><a href="://www.htmhttpslgames.com/">Harbour Escape👾</a></li>
            <li><a href="https://www.htmlgames.com/">Bubble Busters👾</a></li>
            <li><a href="https://www.htmlgames.com/">Pinball Breakout👾</a></li>
            <li><a href="https://www.htmlgames.com/">Feed The Animals👾</a></li>
            <li><a href="https://www.htmlgames.com/">Mahajong Tower👾</a></li>`
    }

 

    
  });
});