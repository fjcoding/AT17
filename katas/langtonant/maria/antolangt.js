
function Grid(n, m) {
    this.n = n;
    this.m = m;
    var matriz = new Array();
    for (let i = 0; i <= n - 1; i++) {
        matriz[i] = new Array();
        for (let j = 0; j <= m - 1; j++) {
            matriz[i][j] = 0;
        }
    }
    this.cargar = function() {
        for (let i = 0; i <= n - 1; i++) {
            for (let j = 0; j <= m - 1; j++) {
                matriz[i][j] = this.random();
            }
        }
    };

    this.random = function() {
        let randomN = Math.random();
        if (randomN < 0.2) {
            return 1;
        }
        return 0;
    };
    this.imprimir = function() {
        for (let elemento in matriz) {
            console.log(elemento + '=' + matriz[elemento]);
        }
    };

    this.valor = function(n, m) {
        return matriz[n][m];
    };

    this.setValor = function(n, m, v) {
        matriz[n][m] = v;
    };
    this.setAnt = function(a, c) {
        matriz[a][c] = '&';
    };

    /* this.rigth=function(direction){
            let directions= ['n','e','s','w'];

            let i=directions.indexOf(direction);
           // console.log(i);
            if(i+1==4){
                return directions[0];
            }else{
                return directions[i+1];
            }
        }
        this.left=function(direction){
            let directions= ['n','e','s','w'];
            //const isLargeNumber = (element) => element == direction;
            let i=directions.indexOf(direction);
            if(i-1==-1){
                return directions[4];
            }else{

                return directions[i-1];
            }
        }

    this.cambiarDireccion=function(){

        let zero=0;
        let one=1;
        if(matriz.valor(a,c)==0){

            direction=this.rigth(direction);

           matriz.setValor(a,c,one);
        }
        if(matriz.valor(a,c)==1){
           direction= this.left(direction);

           matriz.setValor(a,c,zero);

        }
        console.log("---------");
        matriz.imprimir();

    }
    this.mover=function(nStep){
        for(let i=0;i<nStep;i++){

            this.cambiarDireccion();
            if(direction=='n'){
                a=a-1;
            }
            if(direction=='s'){
                a=a+1;
            }
            if(direction=='e'){
               c=c+1;
            }
            if(direction=='w'){
                c=c-1;
            }
        }
    } */
}


function Ant(a, c, direction, matriz) {
    this.a = a;
    this.c = c;

    this.direction = direction;
    this.matriz1 = matriz;

    this.setDir = function(dir) {
        this.direction = dir;
    };
    this.rigth = function() {
        let directions = ['n', 'e', 's', 'w'];

        let i = directions.indexOf(this.direction);
        console.log(this.direction + ' turn to right');
        if (i + 1 > 3) {
            return directions[0];
        } else {
            return directions[i + 1];
        }
    };
    this.left = function() {
        let directions = ['n', 'e', 's', 'w'];
        //const isLargeNumber = (element) => element == direction;
        let i = directions.indexOf(this.direction);
        console.log(this.direction + ' turn to left');
        if (i - 1 == -1) {
            return directions[4];
        } else {
            return directions[i - 1];
        }
    };

    this.cambiarDireccion = function() {
        if (this.matriz1.valor(this.a, this.c) == 0) {
            this.setDir(this.rigth());

            this.matriz1.setValor(this.a, this.c, 1);
        } else {
            this.setDir(this.left());

            this.matriz1.setValor(this.a, this.c, 0);
        }
        console.log(this.direction);
    };
    this.mover = function(nStep) {
        for (let i = 0; i < nStep; i++) {
            console.log('Ant: ' + this.a + ',' + this.c + ', ' + this.direction);

            this.cambiarDireccion();
            if (this.direction == 'n') {
                this.a = this.a - 1;
            }
            if (this.direction == 's') {
                this.a = this.a + 1;
            }
            if (this.direction == 'e') {
                this.c = this.c + 1;
            }
            if (this.direction == 'w') {
                this.c = this.c - 1;
            }
            this.matriz1.imprimir();
        }
    };
}

let grid1 = new Grid(10, 5);
grid1.cargar();
grid1.imprimir();

let ant1 = new Ant (1, 2, 's', grid1);
ant1.mover(2);