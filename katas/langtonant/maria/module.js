
   function Grid(n,m){
       this.n=n;
       this.m=m;
        matriz=new Array();
        for(let i=0;i<=n-1;i++){
            matriz[i]=new Array();
          
        }
        this.cargar=function(){
            for(let i=0;i<=n-1;i++){
               
                for(let j=0;j<=m-1;j++){
                    matriz[i][j]=this.random();
                } 
        }
       
    }

        this.random=function(){
            let randomN=Math.random();
            if (randomN<0.2){
                return 1;
            }
            return 0;
        }
        this.imprimir=function(){
            for (let elemento in matriz){
                console.log(elemento + "=" + matriz[elemento]);
            }
        }

        this.valor=function(n,m){
            return matriz[n][m];
        }

        this.setValor=function(n,m,v){
            matriz[n][m]=v;
        }

    }

    
   

   
 

function ant(a,c,direction){
    
        this.a=a;
        this.c=c;
        
        this.direction=direction;
    
 
    this.rigth=function(direction){
        
    }
    this.left=function(direction){
       
    }

    this.cambiarDireccion=function(matriz1){
        
        if(matriz1.valor(a,c)==0){
            console.log(direction);
            this.direction=this.rigth(direction);
           matriz1.setValor(a,c,1);
        }
        if(matriz1.valor(a,c)==1){
           this.direction= this.left(direction);
           matriz1.setValor(a,c,0);
        }
        
    
    }
    this.mover=function(nStep,matriz1){
        for(let i=0;i<nStep;i++){

            this.cambiarDireccion(matriz1);
            if(direction=='n'){
                this.a=a-1;
            }
            if(direction=='s'){
                this.a=a+1;
            }
            if(direction=='e'){
               this.c=c+1;
            }
            if(direction=='w'){
                this.c=c-1;
            }
        }
    }

} 

let grid1= new Grid(10,10);
grid1.cargar();
grid1.imprimir();
