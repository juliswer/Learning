                                        
                                    'CLASE 1'

#include <iostream>
#include <conio.h>
using namespace std;

int main(){

    cout << "Hola, mundo";

    getch();
    return 0;
}


                                    'CLASE 2'

#include <iostream>
#include <conio.h>
using namespace std;

int main(){
    char nom;
    cout<<"Introduzca su primer nombre";
    cin>>nom;
    cout<<nom;

    getch();
    return 0;
 }

int main(){ 

    int num1, num2;
    float resultado;

    cout<<"Digite dos numeros a sumar: "
    cin>>num1>>num2;

    resultado = num1 + num2
    cout<<resultado;

    getch();
    return 0;
 }
int main(){ 

    int num1, num2, num3, num4, num5;
    float resultado;

    printf("En este programa se puede calcular la operacion a+(b+c)+(d/e).")
    cout<<"Por favor, digite los valores de las variables";
    cin>>num1>>num2>>num3>>num4>>num5;

    resultado = num1 + (num2+num3) + (num4 / num5);
    cout<<resultado;

    getch();
    return 0;
 }

 int main(){
     int a, b;
     float total;

    cin>>a>>b;
    total = a / b;
    cout<<total;

     getch();
     return 0;
 }

int main(){
    int num1, num2;
    char resultado
    
    cout<<"Dame 2 numeros y te los sumo: ";
    cin>>num1>>num2;
    
    resultado = num1 + num2;
    cout<<resultado;
    
    getch();
    return 0;
}

int main(){

    int a, b;
    cout<<"Digite dos numeros: ";
    cin>>a>>b;

    if(a < b){
        cout<<b<<" es mayor";
}
    else{
        cout<<a<<" es mayor";
}
    getch();
    return 0;
}

int main();{

    int edad;
    cout<<"Necesitamos saber tu edad para verificar que sos mayor"
    cin>>edad;
    
    if(edad >= 18){
        cout<<"Okey, joya, accede papi"<<endl;

    }
    else{
        cout<<"Raja de aca que sos chiquito"
    }       

    getch();
    return 9;

int main(){

    char nacionalidad;

    cout<<"Decinos tu nacionalidad";
    cin>>nacionalidad;

    if(nacionalidad = "Chileno"){
        cout<<"Joya amigazo weon, pasá"<<endl;
    }

    else{
        cout<<"No weon, sos un qliado"<<endl;
    }

    getch();
    return 0;
}

int main(){
    float nzapatos = 0, total = 0;
    int valor = 80;
    cout<<"Señor comprador, ingrese el número de zapatos que desea pedir";
    cin>>nzapatos;
    if (nzapatos < 10){
        total = valor*nzapatos
        cout<<"El total sería ARS$ "<<total;
    }
    else if(nzapatos > 10 and nzapatos < 20){
        total = (nzapatos*valor)-(valor*0.1)
        cout<<"El total sería ARS$ "<<total;

    }
    else if(nzapatos > 20 and nzapatos < 30){
        total = (nzapatos*valor) - (valor * 0.2)
        cout<<"El total sería ARS$ "<<total;
    }
    else if(nzapatos > 30){
        total = (nzapatos*valor) - (valor*0.4)
        cout<<"El total sería ARS$ "<<total;
    }
    getch();
    return 0;
}

                                        'CLASE 3'

#include <iostream>
#include <conio.h>
using namespace std;

int main (){
    int horas, sueldo;
    cout<<"Señor trabajador, no sea mentiroso y diganos sus horas de laburo"
    cin>>horas;

    if(horas <= 40){
        sueldo = 20 * horas
        cout<< "Tu sueldo es de "<<sueldo;
    }
    else if(horas > 40){
        sueldo = 25 * horas
        cout<< "Tu sueldo es de "<<sueldo;
    }
    else{
        sueldo = 0;
        cout<< "Ponete a laburar más zurdito de mierda";
    }
    getch();
    return 0;
}

int main(){
    
    float monto, total;
    char tipo;

    cout<<"Bienvenido. Díganos su monto total: "
    cin>>monto;
    
    cout<<"Quieres aplicar algún descuento? Ingrese su tipo: "
    cin>>tipo;

    if(tipo == 'a'){
        total = monto - (monto * 0.1)
        cout<<"Su monto total es de: "<<total;
    }
    else if(tipo == 'b'){
        total = monto - (monto * 0.2) 
        cout<<"Su monto total es de: "<<total;  
    }  
    else if(tipo == 'c'){
        total = monto - (monto * 0.3)
        cout<<"Su monto total es de: "<<total;
    }
    else{
        cout<<"Su membrecía no es válida.";
    } 
     
    getch();
    return 0;
}

#include <iostream>
#include <conio.h>
using namespace std;

int main(){
    int monto, total;
    char tipo;
    char eleccion;

    cout<<"Ingrese el monto total: ";
    cin>>monto;
    cout<<"Tiene una membrecía?"
    cin>>eleccion;
    cout<<"Ahora díganos su membrecía: "
    cin>>tipo;

    if(eleccion == si){
        switch(tipo)
            case 'a':
                total = monto - (monto * 0.1)
                cout<<"Su descuento es de 10%."<<total;
                break;
            case 'b':
                total = monto - (monto * 0.2)
                cout<<"Su descuento es de 20%."<<total;
                break;
            case 'c':
                total = monto - (monto * 0.3)
                cout<<"Su descuento es de 30%"<<total;
                break;
            default:
                cout<<"Su membrecía no es válida";
    }
    else{
        total = monto;
        cout<<"Su total es de "<<total;
    }
}
        
    getch();
    return 0;

int main(){
    float medida, peso, total;
    char elección;

        cout<<"Ponga su elección(cm o kg): ";
        cin>>elección;

        if(elección == cm or elección = Cm or elección == CM or elección == "centímetros"){
            cout<<"Ponga su medida en centímetros: ";
            cin>>medida;
            total = medida * 2.54
            cout<<"SU medida final es: "<<total;
    }

        else if(elección == 'libras'){
            cout<<"Introduzca su peso, gordito";
            cin<<peso;
            total = peso * 2.20462
            cout<<"El peso convertido es: "<<total;
        }

        else{
            cout<<"Su elección no es válida";
    }

    getch();
    return 0;
}

int main(){
    float medida, peso, total;
    char elección;

    cout<<"Ponga su elección (cm o Kg";
    cin>>elección;

    switch(elección);



    
getch();
return 0;
}