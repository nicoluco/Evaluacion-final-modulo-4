function cargarUsuarios() {
                const lista = document.getElementById("usuarios");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petici+on (request) a la API

                fetch(url)
                    .then(function(respuesta) {
                        // Recibe la respuesta en bruto y le da formato JSON
                        return respuesta.json();
                    })

                    .then(function(data) {
                        // Arreglo de usuarios
                        let usuarios = data;
                        console.log(usuarios);
                        // Recorre el arreglo y crea dinámocamente elementos para la lista
                        usuarios.forEach(function(usuario) {
                            let li = document.createElement("li");
                            li.textContent =
                                usuario.name;

                            lista.appendChild(li);
                        }); 
                    })
                    .catch(function(error) {
                        // Entra en el caso de haber error al conectar a la API
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}
            
function promtUsuario() {
    let nombre = window.prompt('Ingrese nombre');

      const lista = document.getElementById("infoUsuario");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petición (request) a la API
                
                fetch(url)
                .then(function(respuesta) {
                    // Recibe la respuesta en bruto y le da formato JSON
                    return respuesta.json();
                })
                
                .then(function(data) {
                    // Arreglo de usuarios
                    let usuarios = data;
                    // Recorre el arreglo 
                    let usuarioEncontrado = usuarios.find(function(usuario) {
                        return usuario.name.toLowerCase() === nombre.trim().toLowerCase();
                    });

                    let li = document.createElement("li");

                    if (usuarioEncontrado) {
                        
                        li.textContent = `${usuarioEncontrado.username} ${usuarioEncontrado.email}`;
                    } else {
                       
                        li.textContent = `Usuario no encontrado`;
                    }
                    lista.appendChild(li);
                    })
                    .catch(function(error) {
                        // Entra en el caso de haber error al conectar a la API
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}



function promtNombre() {
    let nombre = window.prompt('Ingrese un nombre');

      const lista = document.getElementById("direccion");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petición (request) a la API
                
                fetch(url)
                .then(function(respuesta) {
                    // Recibe la respuesta en bruto y le da formato JSON
                    return respuesta.json();
                })
                
                .then(function(data) {
                    // Arreglo de usuarios
                    let usuarios = data;
                    // Recorre el arreglo 
                    let usuarioEncontrado = usuarios.find(function(usuario) {
                        return usuario.name.toLowerCase() === nombre.trim().toLowerCase();
                    });

                    let li = document.createElement("li");

                    if (usuarioEncontrado) {
                        
                        li.textContent = `${usuarioEncontrado.address.street}, 
                        ${usuarioEncontrado.address.suite},
                        ${usuarioEncontrado.address.city},
                        ${usuarioEncontrado.address.zipcode},
                        ${usuarioEncontrado.address.geo.lat},
                        ${usuarioEncontrado.address.geo.lng}`;
                        
                        console.log(usuarioEncontrado.address);
                    } else {
                       
                        li.textContent = `Usuario no encontrado`;
                    }
                    lista.appendChild(li);
                    })
                    .catch(function(error) {
                        // Entra en el caso de haber error al conectar a la API
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}


function promtName() {
    let nombre = window.prompt('Ingrese un nombre');

      const lista = document.getElementById("infoAvanzada");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petición (request) a la API
                
                fetch(url)
                .then(function(respuesta) {
                    // Recibe la respuesta en bruto y le da formato JSON
                    return respuesta.json();
                })
                
                .then(function(data) {
                    // Arreglo de usuarios
                    let usuarios = data;
                    // Recorre el arreglo 
                    let usuarioEncontrado = usuarios.find(function(usuario) {
                        return usuario.name.toLowerCase() === nombre.trim().toLowerCase();
                    });

                    let li = document.createElement("li");

                    if (usuarioEncontrado) {
                        
                        li.textContent = `${usuarioEncontrado.phone}, 
                        ${usuarioEncontrado.website},
                       
                        ${usuarioEncontrado.company.name},
                        ${usuarioEncontrado.company.catchPhrase},
                        ${usuarioEncontrado.company.bs}`;
                        
                        console.log(usuarioEncontrado.phone);
                        console.log(usuarioEncontrado.website);
                        console.log(usuarioEncontrado.company.name);
                        console.log(usuarioEncontrado.company.catchPhrase);
                        console.log(usuarioEncontrado.company.bs);
                    } else {
                       
                        li.textContent = `Usuario no encontrado`;
                    }
                    lista.appendChild(li);
                    })
                    .catch(function(error) {
                        // Entra en el caso de haber error al conectar a la API
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}



function fraseCompania() {
    const lista = document.getElementById("fraseCompania");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petici+on (request) a la API

                fetch(url)
                    .then(function(respuesta) {
                        // Recibe la respuesta en bruto y le da formato JSON
                        return respuesta.json();
                    })

                    .then(function(data) {
                        // Arreglo de usuarios
                        let usuarios = data;
                        console.log(usuarios);
                        // Recorre el arreglo y crea dinámocamente elementos para la lista
                        usuarios.forEach(function(usuario) {
                            let li = document.createElement("li");
                            li.textContent =
                                `${usuario.company.name}, ${usuario.company.catchPhrase}  `
                                ;
                            console.log(`${usuario.company.name}, ${usuario.company.catchPhrase}  `)
                            lista.appendChild(li);
                        }); 
                    })
                    .catch(function(error) {
                        // Entra en el caso de haber error al conectar a la API
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}

function alfabeto() {
                const lista = document.getElementById("alfabeto");
                const url = "https://jsonplaceholder.typicode.com/users";
                lista.innerHTML = "";
                // Hace la petici+on (request) a la API

                fetch(url)
                    .then(function(respuesta) {
                        return respuesta.json();
                    })
                    .then(function(data) {
                        let usuarios = data;
                       
                        usuarios.sort(function(a, b) {
                            return a.name.localeCompare(b.name);
                        });
                       
                        console.log(usuarios);

                        usuarios.forEach(function(usuario) {
                            let li = document.createElement("li");
                            li.textContent = usuario.name;
                            lista.appendChild(li);
                        }); 
                    })
                    .catch(function(error) {
                        console.log("Ocurrió un error:");
                        console.log(error);
                    });
}