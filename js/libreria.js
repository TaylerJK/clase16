
    function calcular_mayor(){
            
        //1. Leer los datos ingresados
        let xn1 = parseFloat(document.getElementById('txtN1').value);
        let xn2 = parseFloat(document.getElementById('txtN2').value);
        let xn3 = parseFloat(document.getElementById('txtN3').value);
        
        //2. Definir una variableque guarde el mayor
        let xm = 0; //inicializar
        //3. validación
        if (xn1 > 0 && xn2 > 0 && xn3 > 0){
            //4. Proceso
            if (xn1 > xn2){
                xm = xn1;
            }else {
                xm = xn2;
            }
            if (xm < xn3){
                xm = xn3
            }
            
            document.getElementById("txtRes").value = xm;
            
        }else{
            alert("verificar numero, debe de ser entero")
        } 
    }
    function calcular_menor(){
        //1. Leer los datos ingresados
        let xn1 = parseFloat(document.getElementById('txtN1').value);
        let xn2 = parseFloat(document.getElementById('txtN2').value);
        let xn3 = parseFloat(document.getElementById('txtN3').value);
        
        //2. Definir una variableque guarde el mayor
        let xm = 0; //inicializar
        //3. validación
        if (xn1 > 0 && xn2 > 0 && xn3 > 0){
            //4. Proceso
            if (xn1 < xn2){
                xm = xn1;
            }else {
                xm = xn2;
            }
            if (xm > xn3){
                xm = xn3
            }
            
            document.getElementById("txtRes").value = xm;
            
        }else{
            alert("verificar numero, debe de ser entero")
        } 
    }
