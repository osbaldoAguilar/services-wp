




// This function will check all links within .entry-content, then set links to different sites to open in new tabs automatically
var  setLinkTargets = function() {

     //console.log('setLinkTargets 1144a');

var  entryContent = document.querySelector( '.entry-content' )

     if( entryContent ) {

          var atts = entryContent.attributes,
          thisSite = document.defaultView.location.origin,
          rawLinks = entryContent.getElementsByTagName('a');

     }

     //console.log('RAW LINKS: ' + rawLinks);

     if( rawLinks ) {
          numLinks = entryContent.getElementsByTagName('a').length;
     } else { return; }



     for( var i = 0, max = numLinks; i < max; i++ ) {

          var  a = entryContent.getElementsByTagName('a')[i],
               linkSite = a.origin,
               link = a.getAttribute("href");

               //console.log(linkSite);

               if ( link.endsWith('pdf') || link.endsWith('PDF') ) {

                    a.setAttribute( 'target' , '_blank' );

               }

               else if( thisSite !== linkSite ) {

                    a.setAttribute( 'target' , '_blank' );

               } else {

                    a.setAttribute( 'target' , '_self' );

               }

     }

}

setLinkTargets();








// Fix for callouts that are purposely missing titles
var  fixMissingCalloutTitles = function() {

     var  calloutBoxes = document.querySelectorAll( '.clb-callout-area' ),
          atts = calloutBoxes.attributes,
          numBoxes = calloutBoxes.length;

     for( var i = 0, max = numBoxes; i < max; i++ ) {

          var calloutHeading = calloutBoxes[i].getElementsByTagName('h3');

          if( calloutHeading[0].innerHTML === '' ) {
               calloutHeading[0].style.display = 'none';
          }

     }

}

fixMissingCalloutTitles();





// This function will check all links on the page, incl header + footer, for '#subscribe' and will add the modal data markup
// Modal HTML markup should be added in clb-cpt.php, functions.php, etc.
var  setSubscribeModal = function() {

     //console.log('setSubscribeModal 12:10p');

var  fullContent = document.querySelector( '.site-container' ),
     atts = fullContent.attributes,
     numLinks = fullContent.getElementsByTagName('a').length;

     for( var i = 0, max = numLinks; i < max; i++ ) {

          var  a = fullContent.getElementsByTagName('a')[i],
               linkSite = a.origin,
               link = a.getAttribute("href");

               if( link === '#subscribe' ) {
                    a.removeAttribute("target");
                    //a.setAttribute("toggle", "modal");
                    a.dataset.toggle = "modal";
                    //data-toggle="modal"
                    console.log( a );
               }



     }

}

setSubscribeModal();







// CLB Mega Menu Work for Corporate Pro Theme
// Dec 18 2020

var  corporateProMegaMenuFixes = function() {

     console.log('corporateProMegaMenuFixes 1235p')

     const subMenuItems = document.querySelectorAll('li.mega-menu ul.sub-menu');
     for (let i = 0; i < subMenuItems.length; i++) {

          let currentSubMenu = subMenuItems[i];
          //console.log(currentSubMenu);

          // get li
          let listItems = currentSubMenu.getElementsByTagName('li');
          for (let j = 0; j < listItems.length; j++) {

               let currentListItem = listItems[j];

               currentListItem.classList.add('sfHover');
               //console.log( currentListItem );
               currentListItem.classList.add('clb-remove-superfish');

               let currentMenuLinks = currentListItem.getElementsByTagName('a');


               for (let k = 0; k < currentMenuLinks.length; k++) {

                    let currentLink = currentMenuLinks[k];
                    //console.log(currentLink);
                    //currentLink.classList.add('clb-remove-superfish');
                    // currentLink.classList.remove('sf-with-ul');
                    // currentLink.removeAttribute("class");
                    //console.log(currentLink);


                    //.style.display = "block"

               }

          }

     }

}
corporateProMegaMenuFixes();








var el = document.querySelector("#jif-view-content");
if( el ) {
     document.querySelector("#jif-view-content").addEventListener("click", function(event) {
              //document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
              event.preventDefault();
              console.log("#jif-view-content CLICKED");
              // let scrollHeight = Math.max(
              //    document.body.scrollHeight, document.documentElement.scrollHeight,
              //    document.body.offsetHeight, document.documentElement.offsetHeight,
              //    document.body.clientHeight, document.documentElement.clientHeight
              //  );
              window.scrollBy({
                     top: window.innerHeight - 100, // could be negative value
                     left: 0,
                     behavior: 'smooth'
                   });
     }, false);
}
