// Api Key: yQ3VcZOv8dn8ISkoHD9ZNZp7DSu5AOR2GirUoLAb

// Object with functions
const Helper = {}

Helper.setHtml = function(tag,html) { // Helper function for printing out html 
    tag.innerHTML = html;
} 

// When document is loaded the functions runs
window.addEventListener('load', () => {
    rover = 'curiosity'; // Default rover on load
    fetchData(rover); // Calling the fecthData function and passing the rover name. Data from curiosity will be loaded by default
})

/***  Select list ***/
let imgGrid = document.querySelector('.img_grid'); // Reference for the container where the images will be printed
let selectList = document.querySelector('#rover_select'); // Reference for the select lits
let rover; // Reference for the rover

// Functions runs every time the select changes in the selectlist
selectList.addEventListener('change', () => {
    let selectValue = selectList.value; // Saving the value from the select list in an variable
    
    if(selectValue === '0') { // If value is 0
        rover =
     'curiosity'; // Rover is curiosity 
    }
    
    if(selectValue === '1') { // If value is 1
        rover =
     'opportunity'; // Rover is opportunity 
    }
    
    if(selectValue === '2') { // If value is 2
        rover =
     'spirit'; // Rover is spiri
        }
    fetchData(rover); // Passing rover and calling the fetchData function
});


/*** Fetching Data from Mars Curiosity ***/

function fetchData(rover){

    console.log('Selected rover is: '+rover); // Controlling selected rover
    // Reference for conatiner where the images will be displayed
    let apiRef = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol=299&api_key=yQ3VcZOv8dn8ISkoHD9ZNZp7DSu5AOR2GirUoLAb'; // Api reference 

    fetch(apiRef) // Fetching data
    .then(response => response.json())
    .then(data => {

        //console.log(data);

        let html = ''; // Saving the html in one variable
        let i = 0; // Reset i to zero
        let errorM = document.querySelector('#error_message'); // Reference for error message

        if(data.photos.length === 0 && !errorM.classList.contains('show')){ // Checking if there is no data and if the error message is not shown
            console.log('No photos');
            
            errorM.classList.toggle('show'); // Adds the class sho to display the error message
            
        }  else if(data.photos.length === 0 && errorM.classList.contains('show')) { // Cheching if there are no photos and if the error message shows
            console.log('No photos');
            return; // Return and the error message keeps showing
        }
        else { // The images displays on scrren

            if(errorM.classList.contains('show')) { // Checking if the error message shows
                errorM.classList.toggle('show'); //  Toggles the class shows and removes the error message
            
            }
            
            for(i = 0; i < data.photos.length; i++) { // Looping through the data
                console.log(i); // Controlling i
                //console.log(rover);

                
                
                if(i===3) { // If 3 is equal to 3 the loop stops (3 photos will be printed, counting 0-2)
                    console.log('Stopped loop');
                    break;
                }
                html += '<div class="img_holder">'; // Img holder
                    html += '<h2 class="rover_name">'+ data.photos[i].rover.name+'</h2>'; // Rover name
                    html += '<img src="'+ data.photos[i].img_src +'" alt="Image from Nasa Rovers on Mars '+ data.photos[i].rover.name+'. Date '+ data.photos[i].earth_date+'" class="rover_img">'; // Image
                    html += '<p class="rover_date">'+data.photos[i].earth_date+'</p>'; // Date
                html += '</div>';

            }   

        }
        

        Helper.setHtml(imgGrid,html); // Calling the setHtml function in Helper and passing imgGRid and html and printing out the data
        

    }).catch(error => console.log("Detta är fel: " + error)); 
    // Catching error if occuring and printing the promblem in the console
}
/***  Name output **/

let showName = document.querySelector('#show_alias'); // Variable for button in form
let alias = document.querySelector('#alias'); // Variable for value in the input field
let new_alias = document.querySelector('#new_alias'); // Variable for the conatiner where the name will be printed

alias.addEventListener('keyup', () => { // Every time a key is pressed in alias (input field) the functions runs
    
    let aliasLength = alias.value.length; // Gets the length of the user input in alias (input field)

    if( aliasLength < 3 ) { // Checks if the length is less than 3 

        showName.disabled = true; // If the statement is true the button showName stays disabled

    } else { // If the statement above was not true...
  
        showName.disabled = false; //... The button showName is not disabled any more 
    }
});

showName.addEventListener('click', (event) => { // Every time the showName button is pressed the functions run
    
    event.preventDefault(); // Prevent the default lap to run. In this case it prevents the site to reload since it's a form.
    let spaceAlias = document.querySelector('#space_alias');
    spaceAlias.scrollIntoView();
    new_alias.innerHTML = 'Welcome ' + alias.value + '!'; // Prints out the user input 

    alias.value = ''; // Resets and remove the value from the input field
    if(!alias.value) { // Checks the value in the input field. If the input field is empyt the button gets disabled

        showName.disabled = true; // Disables the button
    }

});

alias.addEventListener('focus', () => { // Function runs every time the alias input field is in focus
 
    alias.classList.toggle('fc_border'); // Toggles the class fc_border

});

alias.addEventListener('blur', () => { // Function runs every time the user leaves the input field (not in focus)

    alias.classList.toggle('fc_border'); // Toggles the class fc_border

});


/*** Dark mode toggle ***/
let bodyRef = document.querySelector('body'); // Reference for the body
let darkModeToggel = document.querySelector('#switchBtn'); // Reference for the toggle switch

darkModeToggel.addEventListener('click', function() { // Every time the toggle switch is clicked the functions runs

    bodyRef.classList.toggle('dark'); // Toggles the class dark and adds it to the body.

});

/*** Scroll top btn ***/

let grid = document.querySelector('#img_wrapper'); // Reference for the grid page
let scrollTopBtn = document.querySelector('#scroll_top'); // Reference for the scoll to top btn

window.addEventListener('scroll', () => { // Function running every time user scrolls
    let gridPosY = grid.offsetTop; // Getting the y postion of grid page
    let windowY = window.scrollY; // Gettign the y postion of window

    //console.log('Grid: '+ gridPosY);
    //console.log('Window: ' + windowY);

    if (windowY > gridPosY) { // If window postion is bigger than grid postion Y
        scrollTopBtn.classList.add('visible'); // Adds the visible class and shows the scroll to top button
    }

    if (windowY < gridPosY) { // If window postion is less than grid postion Y
        scrollTopBtn.classList.remove('visible'); // Removes the visible class and hides the scroll to top butt
    }
});


scrollTopBtn.addEventListener('click', () => { // Click functions for scroll to top btn
    window.scrollTo({ // Window scrolls to top when clicked
        top: 0
    });
});




