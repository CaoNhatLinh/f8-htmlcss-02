const feedbackitems = document.querySelectorAll(".blog-item");
const feedbackBtns = document.querySelectorAll(".dot");
feedbackBtns.forEach( (btn,index) => 
{
    btn.addEventListener("click",() => {
        for(let i=0; i<feedbackBtns.length;i++){
            console.log(i);
            console.log("index:",index);
        if(index==i) {
            feedbackBtns[i].classList.add("active");
                    }
        else  
        {
            feedbackBtns[i].classList.remove("active");
            }
            }
        })
})
