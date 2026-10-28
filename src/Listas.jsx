import Cards from "./Cards";
import { useState } from "react";

const Listas = () => {
    const peliculas = [
        { id: 1, nombre: 'Interestelar', imagen: 'interestelar.png' },
        { id: 2, nombre: 'Spiderman', imagen: 'spiderMan.jpg' },
        { id: 3, nombre: 'AvengerEnd', imagen: 'avengerEnd.jpg' },
    ];

    const [total ,setTotal]=useState(0);
    const [busqueda, setBusqueda] =useState("");
    const peliculasFiltradas = peliculas.filter((pelicula)=> pelicula.nombre.toLowerCase().includes(busqueda.toLowerCase()));

    return (
        <div style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>Total de likes de Peliculas: {total}</h1>

            <input 
            style={{
                padding: '10px',
                marginBottom: '20px',
                width: '500px',
                border: '1px solid #ccc',
                borderRadius: '7px',
                backgroundColor: 'rgb(245, 245, 244)',
                borderColor: 'rgb(34, 197, 94)',
            }}
             type="text" placeholder="Ingrese el nombre de la pelicula que busca" 
             onChange={(e)=>{
                setBusqueda(e.target.value);
             }} />

            <div style={{display: 'flex',}} >
                {peliculasFiltradas.length === 0 && <p style={{color: 'rgb(232, 16, 128)',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>No se encontraron peliculas con el nombre: {busqueda}</p>}
                {peliculasFiltradas.map((pelicula) => {
                    return (
                        <Cards 
                        key={pelicula.id} 
                        nombre={pelicula.nombre}
                        imagen={pelicula.imagen}
                        onLike={()=> {
                            console.log("Like en Padre")
                            setTotal(total + 1)
                        }}
                        />
                    
                    );
                })}
            </div>
        </div>
    );
};

export default Listas;
