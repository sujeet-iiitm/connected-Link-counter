const sentence = document.querySelector("#filess");

function readfile(){
  


}

function countInternalLinks() {
    const links = document.querySelectorAll('a');
    let internalLinkCount = 0;
  
    links.forEach(link => {
      if (link.href.startsWith(window.location.origin)) {
        internalLinkCount++;
      }
    });
    document.getElementById("answer").innerHTML=console.log(`Number of internal Links are: ${internalLinkCount}`);
  }
  
  console.log('Number of internal links:', countInternalLinks());
  

