/* const [favoritos , setFavoritos] = useState([])
//Listamos las peliculas del localStorage
  useEffect(() => {
      const favsLocal = localStorage.getItem('favs');
      if(favsLocal !== null){
          const favsArray = JSON.parse(favsLocal);
          setFavoritos(favsArray);
        }
      } , [setFavoritos]) 
   
 //Verificamos is hay peliculas listadas 
  const addOrRemove = (e) => { 
  const favsLocal = localStorage.getItem('favs');  
  let backMovies;
  if(favsLocal == null){
    backMovies = [];
  }else{
    backMovies =JSON.parse(favsLocal);
  }
//Tomamos los datos de la pelicula seleccionada
  
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const movieId = parent.getAttribute('movieid')
    console.log(movieId)
    const img = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      img , title  , overview ,
      id : movieId
    }
 //Verificamos si la pelicula ya esta Listada   
  let movieCheck = backMovies.find(oneMovie => {
    return oneMovie.id === movieData.id
  });
  console.log(movieCheck)
//Si no esta , La agregamos
  if(!movieCheck){ 
    backMovies.push(movieData)
    console.log(`se a agergado ${movieData.title}`)
    localStorage.setItem('favs' , JSON.stringify(backMovies))
    setFavoritos(backMovies);
    btn.classList.add('like');
  }else {
//Si esta , entonces la sacamos de la lista    
    let newList = backMovies.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    });
    localStorage.setItem('favs' , JSON.stringify(newList))
    console.log(`se elimino ${movieData.title}`)
    setFavoritos(newList);
    btn.classList.remove('like')
  } 
  } */

    //Una manera de redireccionar 
    /* const history = useNavigate(); 
    useEffect(() => {
        if(token == null){
        history("/");
        }
    } , [])  */