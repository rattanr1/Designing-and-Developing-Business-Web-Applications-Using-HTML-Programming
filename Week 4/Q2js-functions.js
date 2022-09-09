function outputCountryBox(cName, cCont, cCity, cPhoto){
	
    // display div tag with html elements
    // here a variable is used to concat all elements with values of parameter
	
	
    var div = `
    <div class="item">
        <h2>`+cName+`</h2>
        <h3>`+cCont+`</h3>
        <div class="inner-box">
            <h2>Cities</h2>
            <ul>`;
			
            // here we took array then looped and displayed 
            for(var i = 0;i<cCity.length; i++){
                div += `<li>`+cCity[i]+`</li>`
            }
    div += `</ul>
        </div>
        <div class="inner-box">
            <h2>Popular Photos</h2>`;
			
            // here we took array then looped and displayed 
            for(var i = 0;i<cPhoto.length; i++){
                div += `<img src="`+cPhoto[i]+`" alt="">`
            }
    div += `
        </div>
        <button>Visit</button>
    </div>`;
    document.write(div)
}