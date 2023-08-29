
function sum(a: number | string, b: number | string): number | string {
 if( typeof a === "number" && typeof b === "number" ) {
    return a + b
 } else{
    return a.toString() + b.toString()
 }
    
}
// Logra que esta funcion tambien concatene strings

let result= sum( "2", "2");
