var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 200
canvas.height = 200
var cvh = document.getElementById('cvwidth')
var cvw = document.getElementById('cvheight')
let Btn = document.getElementById('myBtn')
// console.log(cvh.value,cvw.value)
Btn.addEventListener('click',() => {
    // console.log(cvh.value,cvw.value)
    if(cvh.value && cvw.value){
        canvas.width = cvh.value
        canvas.height = cvw.value
    }
})

// const cvw = canvas.width
// const cvh = canvas.height 
// ctx.fillRect(0,0,1,1);
// ctx.fillRect(149,149,2,2);

const selectElement = document.getElementById('choice')
const dline = document.getElementById('drawline')
const dcircle = document.getElementById('drawcircle')
const dellipse = document.getElementById('drawellipse')
const dnone = document.getElementById('none')

function updateinput(select){
    if(select == 'line' ){
        dline.style.display = 'block'
        dcircle.style.display = 'none'
        dellipse.style.display = 'none'
    }else if(select == 'circle'){
        dline.style.display = 'none'
        dcircle.style.display = 'block'
        dellipse.style.display = 'none'
    }else if(select == "ellipse"){
        dline.style.display = 'none'
        dcircle.style.display = 'none'
        dellipse.style.display = 'block'
    }
}
// console.log(selectElement.value)
updateinput(selectElement.value)
selectElement.addEventListener("change", (e) => {
    updateinput(e.target.value) 
})
let drawBtn = document.getElementById('draw')

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
    if(lineType[cntpxmk]=='1'){
        ctx.fillRect(x,y,1,1)
        console.log('start to draw')
    }
    cntpxmk++

    console.log('x',x,'y',y)
    let pk = p0
    
    while(x<xlast){
        x++
        if(pk<0){
            pk+=dy2
        }else{
            y++
            pk += dydx2
        }

        // ctx.fillRect(x,y,1,1)
        // ctx.fillRect(x,150-y-1,1,1)
        if(lineType[cntpxmk]=='1'){
            ctx.fillRect(x,y,1,1)
            console.log('start to draw')
        }
        cntpxmk++
        cntpxmk = cntpxmk%lineType.length

    }
    console.log('finish cal of slope less than 1')
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
    // ctx.fillRect(x,y,1,1)
    let cntpxmk = 0 //count pixelmask
    if(lineType[cntpxmk]=='1'){
        ctx.fillRect(x,y,1,1)
        console.log('start to draw')
    }
    cntpxmk++
    // console.log('first','x',x,'y',y)
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
        // ctx.fillRect(x,y,1,1) 
        if(lineType[cntpxmk]=='1'){
            ctx.fillRect(x,y,1,1)
            console.log('start to draw')
        }
        cntpxmk++
        cntpxmk = cntpxmk%lineType.length
        // console.log('x',x,'y',y)
    }
    console.log('finish draw line slope greater than 1')
    // ctx.fillRect(x2,y2,1,1)
}
//slope m
function lineBre3(x1,y1,x2,y2,lineType) {
    const dx = Math.abs(x1-x2)
    const dy = Math.abs(y1-y2)
    let dy2 = 2*dy
    let dydx2 = 2*(dy-dx)
    let p = 2*dy-dx
    // let dy2 = 2*dy
    // let dydx2 = 2*(dy-dx)
    // let p = 2*dy-dx
    // let m = (y2-y1)/(x2-x1)
    // let b = y1+m*x1
    // let ytest 
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
    // ctx.fillRect(x,y,1,1)
    let cntpxmk = 0 //count pixelmask
    if(lineType[cntpxmk]=='1'){
        ctx.fillRect(x,y,1,1)
        console.log('start to draw')
    }
    cntpxmk++
    console.log('x',x,'y',y,'pk',p)
    // console.log('x',x,'y',y,`(${x},${150-y})`)
    
    while(x<xlast){
        x++
        // ytest = m*x+b
        // console.log(x)
        // console.log(ytest)
        // console.log('yk-ytest',y-ytest,'and','ytest-yk-1',ytest-y+1)
        // console.log('yk',y,'and','yk-1',y-1)
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
        // console.log('pk = ',p)
        // ctx.fillRect(x,150-y,1,1)
        // ctx.fillRect(x,y,1,1)
        if(lineType[cntpxmk]=='1'){
            ctx.fillRect(x,y,1,1)
            console.log('start to draw')
        }
        cntpxmk++
        cntpxmk = cntpxmk%lineType.length
        // console.log('x',x,'y',y,)
        // console.log('x',x,'y',y,`(${x},${150-y-1})`)
    }
    console.log('finish cal of slope greater than -1')
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
    // ctx.fillRect(x,y,1,1)
    let cntpxmk = 0 //count pixelmask
    if(lineType[cntpxmk]=='1'){
        ctx.fillRect(x,y,1,1)
        console.log('start to draw')
    }
    cntpxmk++
    console.log('first','x',x,'y',y)
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
        // ctx.fillRect(x,y,1,1)
        if(lineType[cntpxmk]=='1'){
            ctx.fillRect(x,y,1,1)
            console.log('start to draw')
        }
        cntpxmk++
        cntpxmk = cntpxmk%lineType.length
        // console.log('x',x,'y',y)
    }
    console.log('finish slope no less than -1')

}

function drawLineBre(x1,y1,x2,y2,lineType){
    let m = (y2-y1)/(x2-x1)
    console.log('slope is',m)
    if(m>=0 && m<1){
        lineBre1(x1,y1,x2,y2,lineType)
    }else if(m>=1){
        lineBre2(x1,y1,x2,y2,lineType)
    }else if(m<0 && m>=-1){  //negative
        lineBre3(x1,y1,x2,y2,lineType)
    } else if(m<-1 && isFinite(m) ){
        lineBre4(x1,y1,x2,y2,lineType)
    }else {
        lineBre2(x2,y2,x1,y1,lineType)
        console.log('error')
    }
    console.log('done')
}

function drawLineWidthX(x1,y1,x2,y2,lwidth,lineType){
    // lineBre1(x1,y1,x2,y2)
    drawLineBre(x1,y1,x2,y2,lineType)
    if(lwidth%2==1){
        let half = lwidth/2
        console.log(half)
        for(let i = 1;i<half;i++){
            drawLineBre(x1,y1-i,x2,y2-i,lineType)
            console.log('time')
        }
        for(let i = 1;i<half;i++){
            drawLineBre(x1,y1+i,x2,y2+i,lineType)
            console.log('time')
        }
    }else if(lwidth%2==0){
        console.log('even')
        let cnt = 1
        let half = lwidth/2
        console.log('half',half)
        console.log('start',x1,y1,x2,y2)
        for(let i = 1;i<half+1;i++){
            drawLineBre(x1,y1+i,x2,y2+i,lineType)
            // console.log(x1,y1,x2,y2)
            console.log(x1,y1+i,x2,y2+i)
            console.log('time down',cnt)
            cnt++
        }
        let last = lwidth-half
        console.log(last)
        for(let i = 1;i<last;i++){
            drawLineBre(x1,y1-i,x2,y2-i,lineType)
            console.log(x1,y1-i,x2,y2-i)
            console.log('time up',cnt)
            cnt++
        }
    }
}
function drawLineWidthY(x1,y1,x2,y2,lwidth,lineType){
    // lineBre1(x1,y1,x2,y2)
    drawLineBre(x1,y1,x2,y2,lineType)
    if(lwidth%2==1){
        let half = lwidth/2
        console.log(half)
        for(let i = 1;i<half;i++){
            drawLineBre(x1-i,y1,x2-i,y2,lineType)
            console.log('time')
        }
        for(let i = 1;i<half;i++){
            drawLineBre(x1+i,y1,x2+i,y2,lineType)
            console.log('time')
        }
    }else if(lwidth%2==0){
        console.log('even')
        let cnt = 1
        let half = lwidth/2
        console.log('half',half)
        console.log('start',x1,y1,x2,y2)
        for(let i = 1;i<half+1;i++){
            drawLineBre(x1+i,y1,x2+i,y2,lineType)
            // console.log(x1,y1,x2,y2)
            console.log(x1+i,y1,x2+i,y2)
            console.log('time right',cnt)
            cnt++
        }
        let last = lwidth-half
        console.log(last)
        for(let i = 1;i<last;i++){
            drawLineBre(x1-i,y1,x2-i,y2,lineType)
            console.log(x1-i,y1,x2-i,y2)
            console.log('time left',cnt)
            cnt++
        }
    }
}
// drawLineWidthX(40,40,70,60,6)
// drawLineWidthY(40,40,60,80,2)
// drawLineBre(40,40,70,60)
// drawLineBre(40,41,70,61)
// drawLineBre(40,40,70,60)
// drawLineBre(40,40,70,70)
// drawLineBre(40,40,70,80)
// drawLineBre(40,39,70,59)
//test to draw line with drawlineBre func
// drawLineBre(0,10,20,0) //test for slope 0>m>-1
// drawLineBre(0,0,20,10) //test for slope 0<m<1
// ctx.fillStyle = "rgb(255 0 0)"
// drawLineBre(0,0,20,40) // test for slope m>1
// ctx.fillStyle = "rgb(0 0 255)"
// drawLineBre(0,40,20,0) // test for slope m<-1
// ctx.fillRect(20,0,1,1)
// drawLineBre(40,30,100,100)

function circleMidpoint(xCenter,yCenter,r){
    console.log('inside',xCenter,yCenter,r)
    let x = 0
    let y = r
    let p = 1-r
    circlePlotPoint(xCenter,yCenter,x,y)
    while(x<y){
        x++
        if(p<0){
            p += 2*x+1
        }else{
            y--
            p+= 2*(x-y)+1
        }
        circlePlotPoint(xCenter,yCenter,x,y)
    }
    

}
function circlePlotPoint(xCenter,yCenter,x,y){
    ctx.fillRect(xCenter+x,yCenter+y,1,1)  //q4 down
    ctx.fillRect(xCenter+y,yCenter+x,1,1) //q4 up
    ctx.fillRect(xCenter-x,yCenter+y,1,1) //q3 down
    ctx.fillRect(xCenter-x,yCenter-y,1,1) //q2 up
    ctx.fillRect(xCenter-y,yCenter-x,1,1) //q2 down
    ctx.fillRect(xCenter-y,yCenter+x,1,1)
    ctx.fillRect(xCenter+x,yCenter-y,1,1) //q1 up
    ctx.fillRect(xCenter+y,yCenter-x,1,1) //q1 1/2 down
    console.log('finish draw circle')
}

// circleMidpoint(60,100,20,20)

function drawcircle(xCenter,yCenter,radius){
    //draw Center
    ctx.fillStyle = "rgb(255 0 0)"
    ctx.fillRect(xCenter,yCenter,1,1)
    ctx.fillStyle = "rgb(0 0 0)"
    //draw circle with midpoint
    circleMidpoint(xCenter,yCenter,radius)
}
//test draw circle at here
// drawcircle(80,80,30)
// drawcircle(75,75,20)

function round(a){
    return a+0.5
}
function ellipseMidpoint(xCenter,yCenter,rx,ry){
    let rx2 = rx*rx
    let ry2 = ry*ry
    let rx22 = 2*rx2
    let ry22 = 2*ry2
    let p 
    let x = 0
    let y = ry  
    let px = 0
    let py = rx22*y
    //plot the first set of Point
    ellipsePlotPoint(xCenter,yCenter,x,y)

    //region 1
    p = round(ry2-(rx2*ry)+(0.25*rx2))
    while(px<py){
        x++
        px += ry22
        if(p<0){
            p += ry2+px
        }else{
            y--
            py -= rx22
            p += ry2+px-py
        }
        ellipsePlotPoint(xCenter,yCenter,x,y)
    }

    //region2
    p = round(ry2*(x+0.5)*(x+0.5)+rx2*(y-1)*(y-1)-rx2*ry2)
    while(y>0){
        y--
        py -= rx22
        if(p>0){
            p += rx2-py
        }else{
            x++
            px +=ry22
            p += rx2-py+px
        }
        ellipsePlotPoint(xCenter,yCenter,x,y)
    }
}
function ellipsePlotPoint(xCenter,yCenter,x,y){
    ctx.fillRect(xCenter+x,yCenter+y,1,1) //q4
    ctx.fillRect(xCenter-x,yCenter+y,1,1) //q3
    ctx.fillRect(xCenter+x,yCenter-y,1,1) //q1
    ctx.fillRect(xCenter-x,yCenter-y,1,1) //q2

}
function drawEllipse(xCenter,yCenter,semiMaj,semiMin){
    ctx.fillStyle = "rgb(255 0 0)"
    ctx.fillRect(xCenter,yCenter,1,1)
    ctx.fillStyle = "rgb(0 0 0)"
    ellipseMidpoint(xCenter,yCenter,semiMaj,semiMin)
}


//test for ellipseMid
// drawEllipse(75,75,40,50)
// drawEllipse(75,75,50,40)
// ellipseMidpoint(0,149,40,100)

function drawObject(select){
    if(select == 'line' ){
        let x1 = document.getElementById('x1')
        let y1 = document.getElementById('y1')
        let x2 = document.getElementById('x2')
        let y2 = document.getElementById('y2')
        let lwidth = document.getElementById('linewidth')
        let linetype = document.getElementById('linetype')
        // drawLineBre(Number(x1.value),Number(y1.value),Number(x2.value),Number(y2.value))
        let pixelmaskdotted = '101010'
        let pixelmaskdashed = '111000'
        let pixelMask = '111111'
        if(linetype.value == 'dashed'){
            pixelMask =  '1111000'
            console.log('you got dashed line')
        }else if(linetype.value == 'dotted'){
            pixelMask =  '101010'
            console.log('you got dotted line')
        }else{
            console.log('nothing change')
        }
        if(Math.abs(Number(x1.value)-Number(x2.value))>=Math.abs(Number(y1.value)-Number(y2.value))){
            drawLineWidthX(Number(x1.value),Number(y1.value),Number(x2.value),Number(y2.value),Number(lwidth.value),pixelMask)
        }else{
            drawLineWidthY(Number(x1.value),Number(y1.value),Number(x2.value),Number(y2.value),Number(lwidth.value),pixelMask)
        }
    }else if(select == 'circle'){
        let xcenter = document.getElementById('xcenter')
        let ycenter = document.getElementById('ycenter')
        let radius = document.getElementById('radius')
        console.log(xcenter.value,ycenter.value,radius.value)
        drawcircle(Number(xcenter.value),Number(ycenter.value),Number(radius.value))
    }else if(select == "ellipse"){
        let xcenterEl = document.getElementById('xcenterEl')
        let ycenterEl = document.getElementById('ycenterEl')
        let maj = document.getElementById('semimajor')
        let min = document.getElementById('semiminor')
        drawEllipse(Number(xcenterEl.value),Number(ycenterEl.value),Number(maj.value),Number(min.value))
    }
}