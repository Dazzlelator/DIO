const map1 = new Map();
map1.set('Raphael','admin')
map1.set('admin1','admin')
map1.set('usuario1', 'usuario')
map1.set('usuario2', 'usuario')
map1.set('usuario3', 'usuario')

// console.log(map1.get(admin))

function getAdmins(maps){
    let lista = []
    for([key, value] of maps){
        if(value === "admin"){           
            lista.push(key)
        }
    }
    return lista;
}

console.log(getAdmins(map1))

const array1 = [30, 30, 40, 5, 223, 2049, 3034, 5]
const set1 = new Set(array1);

console.log(set1);
