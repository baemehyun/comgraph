var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 150
canvas.height = 150
const cvw = canvas.width
const cvh = canvas.height
// ctx.fillRect(0,0,1,1);
// ctx.fillRect(149,149,2,2);

function lineBre1(x1,y1,x2,y2) {
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
    ctx.fillRect(x,y,1,1)
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
        ctx.fillRect(x,y,1,1)
        // ctx.fillRect(x,150-y-1,1,1)
    }
    console.log('finish cal of slope less than 1')
}

function lineBre2(x1,y1,x2,y2) { //m>1
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
    console.log('first','x',x,'y',y)
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
        console.log('x',x,'y',y)
    }
    console.log('finish draw line slope greater than 1')
    // ctx.fillRect(x2,y2,1,1)
}
//slope m
function lineBre3(x1,y1,x2,y2) {
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
    ctx.fillRect(x,y,1,1)
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
        console.log('pk = ',p)
        // ctx.fillRect(x,150-y,1,1)
        ctx.fillRect(x,y,1,1)
        console.log('x',x,'y',y,)
        // console.log('x',x,'y',y,`(${x},${150-y-1})`)
    }
    console.log('finish cal of slope greater than -1')
}

function lineBre4(x1,y1,x2,y2) { //m>1
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
    console.log('x',x,'y',y,`(${x},${150-y})`)

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
        console.log('x',x,'y',y)
    }
    console.log('finish slope no less than -1')

}

function drawLineBre(x1,y1,x2,y2){
    let m = (y2-y1)/(x2-x1)
    console.log('slope is',m)
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
    console.log('done')
}
//test to draw line with drawlineBre func
// drawLineBre(0,10,20,0) //test for slope 0>m>-1
// drawLineBre(0,0,20,10) //test for slope 0<m<1
// ctx.fillStyle = "rgb(255 0 0)"
// drawLineBre(0,0,20,40) // test for slope m>1
// ctx.fillStyle = "rgb(0 0 255)"
// drawLineBre(0,40,20,0) // test for slope m<-1
// ctx.fillRect(20,0,1,1)


function circleMidpoint(xCenter,yCenter,r){
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

}

// circleMidpoint(60,100,20,20)

function drawcircle(xCenter,yCenter,radius){
    //draw Center
    ctx.fillStyle = "rgb(255 0 0)"
    ctx.fillRect(xCenter,yCenter,1,1)
    ctx.fillStyle = "rgb(0 0 0)"
    //draw circle with midpoint
    circleMidpoint(xCenter,yCenter,radius,radius)
}
//test draw circle at here
drawcircle(75,75,50)
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