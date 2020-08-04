let n = readline();

function numDiamond(rows){
    let nst = 1;
    let nsp = rows/2;
    for(let r = 1;r<=rows;r++)
    {
        let s  ="";
        let ele = r;
        for(let csp =1;csp<=nsp;csp++)
        {
            s+="  ";

        }
        for(let cst =1;cst<=nst;cst++)
        {
            s= s+ele+" ";
            if(cst<=nst/2)
            ele++;
            else
            {
                ele--;
            }
            
        }
        print(s);
        if(r==rows/2)
        ele--;
        if(r<=rows/2)
        {
        nsp--;
        nst = nst+2;
        }
        else
        {
            nsp++;
            nst = nst-2;
        }
        

    }
}