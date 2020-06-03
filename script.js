const getRandom=()=>{
   return Math.floor(Math.random()*900)
    }
const getElement=(obj)=>{
    return(
        `<div class="card" style="width:250px">
            <img class="card-img-top" style="width:250px;height:250px" src="${obj.download_url}" alt="">
            <div class="card-body">
                <h4 class="card-title">by ${obj.author}</h4>
                <p class="card-text">${obj.width}x${obj.height}</p>
                <a href="${obj.url}" target='_blank' class="btn btn-primary">View on unsplash</a>
            </div>
        </div>`
        )
    }
const postPictures=(posts,eleId)=>{
    var i;
    var arr=[]
    for (i = 0; i < posts; i++) {
        arr.push(getRandom()) 
        }
    arr.forEach((x)=>{
        $.ajax({
            dataType: "json",
            url: `https://picsum.photos/id/${x}/info`,
            success: (result)=>{
                 $('#'+eleId).append(getElement(result))
                 },
            })
        })
    }
    postPictures(4,'results')