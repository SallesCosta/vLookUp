function vlookup(lookUp_value , Table_array , Col_index){
    return Table_array[Table_array.indexOf(Col_index)][c0.indexOf(lookUp_value)];
}

//Ex 01

const c0=['A','B','C','D','E','F','G','H'];
const c1=['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8'];
const c2=['1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8'];
const c3=['2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8'];

const tab1=[c0 , c1 , c2 , c3]

let value = vlookup('A',tab1,c2);
console.log(value)











