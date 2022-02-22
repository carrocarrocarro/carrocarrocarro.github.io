const checkBox = document.querySelector("#checkbox");
const annuallyPrices = document.querySelectorAll(".annaully-price");
const monthlyPrices = document.querySelectorAll(".monthly-price");

const annuallyPricesArray = annuallyPrices;

function togglePrice() {

    if(checkBox.checked == true) {
        console.log("Checked")

       /* for(const annuallyPrice of annuallyPrices) {
            annuallyPrice.classList.add("show");
            /* for(const monthlyPrice of monthlyPrices) {
                monthlyPrice.classList.add("hide");
            } 
       } */
       document.body.classList.add("toggle-price");

        
        
    } else {
        console.log("unChecked")
        document.body.classList.remove("toggle-price");

       /* for(const annuallyPrice of annuallyPrices) {
            annuallyPrice.classList.remove("show");

        for(const monthlyPrice of monthlyPrices) {
            monthlyPrice.classList.remove("hide");
        }
       } */
       
        
    } 
}
