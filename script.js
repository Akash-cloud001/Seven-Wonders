var scrollAnchor = document.querySelectorAll('.ul-list a');

for(var i=0 ; i<scrollAnchor.length;i++){
  scrollAnchor[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    console.log(targetSection);
    var interval = setInterval(function(){
      var targetSectionCoordi = targetSection.getBoundingClientRect();
      console.log(targetSectionCoordi)
      if(targetSectionCoordi.top<=0 ||  targetSectionCoordi.y== 280.6000061035156){
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,50);
    },10);
  });
}