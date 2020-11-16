import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [tela, setTela] = useState('home');


 useEffect(()=>{
     ListarFilmes();
 },[] );

 const ListarFilmes = ()=>{
   fetch('http://Localhost:5000/api/filmes',{
     method: 'GET'
   })
     .then(Response => Response.json())
     .then(dados =>{
       setFilmes(dados);
     })
     .catch (err => console.error(err));
 }

 const salvar = () => {
  const form = {
    titulo: filme,
    idGenero: genero
  };

  const method = (idFilme === 0 ? 'POST' : 'PUT');
  const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);

  fetch(urlRequest, {
    method: method,
    body: JSON.stringify(form),
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token-filmes')
    }
  })
    .then(() => {
      alert('Filme cadastrado');
      setIdFilme(0);
      setGenero('0');
      setFilme('');
      listarFilmes();
    })
    .catch(err => console.error(err));
}


  switch (tela) {
    case 'home':
      return Home();
      break;
    case 'filmes':
      return Filmes();
      break;
  }

  function Home(){
    return (
      <View>
        <View style={styles.header}>
          <View >
            <Image style={styles.Logo} source={require('./assets/images/logo.png')}/>
            <Text style={styles.textHeader}>Conheça nossa coletânea</Text>
          </View>
          <View style={styles.menuFilmes}>
            <TouchableOpacity onPress={() =>  setTela('home')}>
              <Text style={styles.menu}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>  setTela('filmes')}>
              <Text style={styles.menu}>Filmes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.titulo}>Monte sua coletânea de filmes...</Text>
          <Text style={styles.subtitulo}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</Text>
          <Text style={{marginLeft: '10px', marginRight: '10px'}}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit. </Text>

          <Image style={styles.cinema} source={require('./assets/images/cinema.png')}/>
          <Text style={{fontSize: '20px', fontWeight: 500, marginBottom: '15px'}}>Filmes</Text>
          <Text style={{marginLeft: '10px', marginRight: '10px'}}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </Text>

          <Image style={styles.cinema} source={require('./assets/images/theater.png')}/>
          <Text style={{fontSize: '20px', fontWeight: 500, marginBottom: '15px'}}>Gêneros</Text>
          <Text style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px'}}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </Text>
        </View>

        <View style={styles.footer}>
          <Image style={styles.Logo} source={require('./assets/images/logonegativo.png')}/>
          <View style={{width: '50%'}}>
            <Text style={styles.textFooter}>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</Text>
            <Text style={styles.textFooter}>Call us now toll free: (800)2345-6789</Text>
            <Text style={styles.textFooter}>Customer support: support@demolink.org</Text>
            <Text style={styles.textFooter}>Skype: sample-username</Text>
          </View>
        </View>
      </View>
    );
  }

  function Filmes(){
    return(
      <View>
        <View style={styles.header}>
            <View >
              <Image style={styles.Logo} source={require('./assets/images/logo.png')}/>
              <Text style={styles.textHeader}>Conheça nossa coletânea</Text>
            </View>
            <View style={styles.menuFilmes}>
              <TouchableOpacity onPress={() =>  setTela('home')}>
                <Text style={styles.menu}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>  setTela('filmes')}>
                <Text style={styles.menu}>Filmes</Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.middle}>
          <Text  style={styles.titulo}>Filmes</Text>
          <Image style={{ width: "90px",height: '90px', marginBottom: '30px'}} source={require('./assets/images/cinema.png')}/>

          <Text style={{fontSize: '20px', fontWeight: 500, marginBottom: '15px'}}>Lista de Filmes</Text>
          {
            filmes.map((item, index) => {
              return(
                <View key={index}>
                  <Text style={styles.lista}>{item.titulo} - {item.genero}</Text>
                </View>
              );
            })
          }
        </View>

        <View style={styles.footer}>
          <Image style={styles.Logo} source={require('./assets/images/logonegativo.png')}/>
          <View style={{width: '50%'}}>
            <Text style={styles.textFooter}>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</Text>
            <Text style={styles.textFooter}>Call us now toll free: (800)2345-6789</Text>
            <Text style={styles.textFooter}>Customer support: support@demolink.org</Text>
            <Text style={styles.textFooter}>Skype: sample-username</Text>
          </View>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  //HEADER
  header:{
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#FFDDC3",
  },
  Logo:{
    width: 130,
    height: 40,
    margin: "10px"
  },
  textHeader:{
    fontSize: "15px",
    fontWeight: 400,
    marginLeft: '10px'
  },
  menu:{
    fontSize: '17px',
    fontWeight: 400,
    marginRight: '20px'
  },
  menuFilmes:{
    flexDirection: 'row'
  },

  //MIDDLE HOME
  middle:{
    justifyContent:'center',
    alignItems: 'center'
  },

  titulo:{
    fontSize: '20px',
    fontWeight: 500,
    marginTop: '20px',
    marginBottom: '15px'
  },

  subtitulo:{
    fontSize: '18px',
    fontWeight: 400,
    marginBottom: '10px',
    marginLeft: '10px'
  },

  cinema:{
    width: "90px",
    height: '90px',
    marginTop: '30px'
  },

  lista:{
    fontSize: '15px',
    color: '#4B2142',
    marginBottom: '15px'
  },

  //FOOTER
  footer:{
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#FF4A3B",
    
  },

  textFooter:{
    marginBottom: '8px'
  }
});
