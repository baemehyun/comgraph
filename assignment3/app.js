var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
var cvh = document.getElementById('cvwidth')
var cvw = document.getElementById('cvheight')
let Btn = document.getElementById('myBtn')
let clearBtn = document.getElementById('clear')
let drawBtn = document.getElementById('draw')
// console.log(cvh.value,cvw.value)
clearBtn.addEventListener('click',() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

// const cvw = canvas.width
// const cvh = canvas.height 
// ctx.fillRect(0,0,1,1);
// ctx.fillRect(149,149,2,2);

const selectElement = document.getElementById('choice')
const depitrochoid = document.getElementById('epitrochoid')
const dhypotrochoid = document.getElementById('hypotrochoid')
const dnone = document.getElementById('none')

// function updateinput(select){
//     if(select == 'epitrochoid' ){
//         depitrochoid.style.display = 'block'
//         dhypotrochoid.style.display = 'none'
//     }else if(select == 'hypotrochoid'){
//         depitrochoid.style.display = 'none'
//         dhypotrochoid.style.display = 'block'
//     }
// }
// console.log(selectElement.value)
// updateinput(selectElement.value)
// selectElement.addEventListener("change", (e) => {
//     updateinput(e.target.value) 
// })

drawBtn.addEventListener('click',()=>{
    drawObject(selectElement.value)
})
function lineBre1(x1,y1,x2,y2,lineType) {
    const dx = Math.abs(x1-x2)
    const dy = Math.abs(y1-y2)
    let dy2 = 2*dy
    let dydx2 = 2*(dy-dx)
    let p0 = 2*dy-dx
    let x,y,xlast
    if(x1>x2){
        x=x2
        y=y2
        xlast = x1
    }else{
        x = x1
        y = y1
        xlast = x2
    }
    // ctx.fillRect(x,150-y-1,1,1)
    let cntpxmk = 0 //count pixelmask
    ctx.fillRect(x,y,1,1)
    let pk = p0
    while(x<xlast){
        x++
        if(pk<0){
            pk+=dy2
        }else{
            y++
            pk += dydx2
        }
        ctx.fillRect(x,y,1,1)
        // ctx.fillRect(x,150-y-1,1,1)
    }
    // console.log('finish cal of slope less than 1')
}

function lineBre2(x1,y1,x2,y2,lineType) { //m>1
    const dx = Math.abs(x1-x2)
    const dy = Math.abs(y1-y2)
    let dx2 = 2*dx
    let dxdy2 = 2*(dx-dy)
    let p0 = 2*dx-dy
    let x,y,ylast
    if(y1>y2){
        x=x2
        y=y2
        ylast = y1
    }else{
        x = x1
        y = y1
        ylast = y2
    }
    // ctx.fillRect(x,150-y-1,1,1)
    ctx.fillRect(x,y,1,1)
    let pk = p0
    while(y<ylast){
        y++
        if(pk<0){
            pk += dx2
        }else{
            x++
            pk += dxdy2
        }
        // ctx.fillRect(x,150-i-1,1,1)
        ctx.fillRect(x,y,1,1) 
        // console.log('x',x,'y',y)
    }
    // console.log('finish draw line slope greater than 1')
    // ctx.fillRect(x2,y2,1,1)
}
//slope m
function lineBre3(x1,y1,x2,y2,lineType) {
    const dx = Math.abs(x1-x2)
    const dy = Math.abs(y1-y2)
    let dy2 = 2*dy
    let dydx2 = 2*(dy-dx)
    let p = 2*dy-dx

    let x,y,xlast
    if(x1>x2){
        x=x2
        y=y2
        xlast = x1
    }else{
        x = x1
        y = y1
        xlast = x2
    }
    // ctx.fillRect(x,150-y,1,1)
    ctx.fillRect(x,y,1,1)
    // console.log('x',x,'y',y,`(${x},${150-y})`)
    while(x<xlast){
        x++
        if(p<0){
            p += dy2
            // y--
            // pk += dydx2
        }else{
            // console.log('y decrease')
            y--
            p += dydx2
            // pk += dy2
        }
        // ctx.fillRect(x,150-y,1,1)
        ctx.fillRect(x,y,1,1)
        // console.log('x',x,'y',y,)
        // console.log('x',x,'y',y,`(${x},${150-y-1})`)
    }
    // console.log('finish cal of slope greater than -1')
}

function lineBre4(x1,y1,x2,y2,lineType) { //m>1
    const dx = Math.abs(x1-x2)
    const dy = Math.abs(y1-y2)
    //choose expression like lineBre2
    let dx2 = 2*dx
    let dxdy2 = 2*(dx-dy)
    let p = 2*dx-dy
    
    let x,y,ylast
    if(y1>y2){
        x=x2
        y=y2
        ylast = y1
    }else{
        x = x1
        y = y1
        ylast = y2
    }
    // ctx.fillRect(x,150-y,1,1)
    ctx.fillRect(x,y,1,1)
    // console.log('first','x',x,'y',y)
    // console.log('x',x,'y',y,`(${x},${150-y})`)

    while(y<ylast){
        y++
        if(p<0){
            p += dx2
        }else{
            x--
            p += dxdy2
        }
        // ctx.fillRect(x,150-i-1,1,1)
        ctx.fillRect(x,y,1,1)

        // console.log('x',x,'y',y)
    }
    // console.log('finish slope less than -1')

}

function drawLineBre(x1,y1,x2,y2){
    let m = (y2-y1)/(x2-x1)
    // console.log('slope is',m)
    if(m>=0 && m<1){
        lineBre1(x1,y1,x2,y2)
    }else if(m>=1){
        lineBre2(x1,y1,x2,y2)
    }else if(m<0 && m>=-1){  //negative
        lineBre3(x1,y1,x2,y2)
    } else if(m<-1 && isFinite(m) ){
        lineBre4(x1,y1,x2,y2)
    }else {
        lineBre2(x2,y2,x1,y1)
        console.log('error')
    }
    // console.log('done')
}

function drawLineWidthX(x1,y1,x2,y2,lwidth){
    // lineBre1(x1,y1,x2,y2)
    drawLineBre(x1,y1,x2,y2)
    if(lwidth%2==1){
        let half = lwidth/2
        // console.log(half)
        for(let i = 1;i<half;i++){
            drawLineBre(x1,y1-i,x2,y2-i)
            // console.log('time')
        }
        for(let i = 1;i<half;i++){
            drawLineBre(x1,y1+i,x2,y2+i)
            // console.log('time')
        }
    }else if(lwidth%2==0){
        console.log('even')
        let cnt = 1
        let half = lwidth/2
        console.log('half',half)
        console.log('start',x1,y1,x2,y2)
        for(let i = 1;i<half+1;i++){
            drawLineBre(x1,y1+i,x2,y2+i)
            // console.log(x1,y1,x2,y2)
            // console.log(x1,y1+i,x2,y2+i)
            // console.log('time down',cnt)
            cnt++
        }
        let last = lwidth-half
        console.log(last)
        for(let i = 1;i<last;i++){
            drawLineBre(x1,y1-i,x2,y2-i)
            // console.log(x1,y1-i,x2,y2-i)
            // console.log('time up',cnt)
            cnt++
        }
    }
}
function drawLineWidthY(x1,y1,x2,y2,lwidth){
    // lineBre1(x1,y1,x2,y2)
    drawLineBre(x1,y1,x2,y2)
    if(lwidth%2==1){
        let half = lwidth/2
        // console.log(half)
        for(let i = 1;i<half;i++){
            drawLineBre(x1-i,y1,x2-i,y2)
            // console.log('time')
        }
        for(let i = 1;i<half;i++){
            drawLineBre(x1+i,y1,x2+i,y2)
            // console.log('time')
        }
    }else if(lwidth%2==0){
        console.log('even')
        let cnt = 1
        let half = lwidth/2
        // console.log('half',half)
        // console.log('start',x1,y1,x2,y2)
        for(let i = 1;i<half+1;i++){
            drawLineBre(x1+i,y1,x2+i,y2)
            // console.log(x1,y1,x2,y2)
            // console.log(x1+i,y1,x2+i,y2)
            // console.log('time right',cnt)
            cnt++
        }
        let last = lwidth-half
        // console.log(last)
        for(let i = 1;i<last;i++){
            drawLineBre(x1-i,y1,x2-i,y2)
            // console.log(x1-i,y1,x2-i,y2)
            // console.log('time left',cnt)
            cnt++
        }
    }
}


function drawObject(select){
    let colour = document.getElementById('colour')
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let k = document.getElementById('k')
    let lwidth = document.getElementById('linewidth')
    if(select == 'epitrochoid' ){
        console.log(a.value,b.value,k.value)
        epitrochoid(Number(a.value),Number(b.value),Number(k.value),5000,500/2,500/2,Number(lwidth.value),colour.value)
    }else if(select == 'hypotrochoid'){
        hypotrochoid(Number(a.value),Number(b.value),Number(k.value),5000,500/2,500/2,Number(lwidth.value),colour.value)
    }
}
// ctx.fillStyle = "orange"
// drawLineBre(100,150,8.4,148.3)
// ctx.fillStyle = "rgb(0 0 0)"
function epitrochoid(a,b,k,n,xcenter,ycenter,lwidth,c){
    let points = []
    console.log(c)
    ctx.fillStyle = c
    console.log(a,b,k,n,xcenter,ycenter,lwidth)
    for(let i =0;i<n;i++){
        t = i/(n-1)
        x = (a+b)*Math.cos(360*t)-k*Math.cos(360*(a+b)*t/b)
        y = (a+b)*Math.sin(360*t)-k*Math.sin(360*(a+b)*t/b)
        ctx.fillRect(Math.round(x)+xcenter,Math.round(y)+ycenter,1,1)
        points.push([Math.round(x)+xcenter,Math.round(y)+ycenter])
    }  
    console.log(points)
    for(let i = 0;i<points.length-1;i++){
        x1 = points[i][0]
        x2 = points[i+1][0]
        y1 = points[i][1]
        y2 = points[i+1][1]
        if(Math.abs(x1-x2)>=Math.abs(y1-y2)){
            drawLineWidthX(x1,y1,x2,y2,lwidth)
        }else{
            drawLineWidthY(x1,y1,x2,y2,lwidth)
        }
    }
}


function hypotrochoid(a,b,k,n,xcenter,ycenter,lwidth,c){
    let points = []
    console.log(c)
    ctx.fillStyle = c
    for(let i =0;i<n;i++){
        t = i/(n-1)
        x = (a-b)*Math.cos(360*t)+k*Math.cos(360*(a-b)*t/b)
        y = (a-b)*Math.sin(360*t)-k*Math.sin(360*(a-b)*t/b)
        ctx.fillRect(Math.round(x)+xcenter,Math.round(y)+ycenter,1,1)
        points.push([Math.round(x)+xcenter,Math.round(y)+ycenter])
    } 
    console.log(points)
    for(let i = 0;i<points.length-1;i++){
        x1 = points[i][0]
        x2 = points[i+1][0]
        y1 = points[i][1]
        y2 = points[i+1][1]
        if(Math.abs(x1-x2)>=Math.abs(y1-y2)){
            drawLineWidthX(x1,y1,x2,y2,lwidth)
        }else{
            drawLineWidthY(x1,y1,x2,y2,lwidth)
        }
    }
}
