import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";



import { storageSave, storageRemove, storageGet } from './Storage'

const firebaseConfig = {
  apiKey: "AIzaSyC14ryo4DHl4-huGSGMD0Ym9a3vo7i0dPM",
  authDomain: "pet-recovery.firebaseapp.com",
  projectId: "pet-recovery",
  storageBucket: "pet-recovery.appspot.com",
  messagingSenderId: "1079054730536",
  appId: "1:1079054730536:web:55a04e2dc5e94cc8927c1d",
  measurementId: "G-55X7KZB66N"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((usuario) => {
        storageSave("TOKEN_KEY", usuario.user.uid)
        resolve(true)
      })
      .catch((error) => {
        storageRemove("TOKEN_KEY")
        let erro = error.code
        if (erro === "auth/wrong-password")
          reject("Usuário ou Senha Inválidos")
        else
          reject("Algo deu errado!")
      })
  })
}


export const sigin = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve("Usuário Registrado!")
      })
      .catch(() => {
        reject("Usuário já inserido no banco!")
      })
  })
}


export const logoff = () => {
  return new Promise((resolve, reject) => {
    storageRemove("TOKEN_KEY")
    signOut(auth).then(() => {
      resolve()
    }).catch((error) => {
      reject()
    });
  })
}


export const saveEquipes = (equipe) => {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "equipes"), equipe);
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const saveContato = (contato) => {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "contato"), contato);
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const deleteEquipes = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, 'equipes', id));
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const getEquipes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "equipes"));
      let dados = []
      querySnapshot.forEach((doc) => {
        dados.push({
          id: doc.id,
          nome: doc.data().nome,
          tag: doc.data().tag,
          jogo: doc.data().jogo,
          descricao: doc.data().descricao,
        })
      });
      resolve(dados)
    } catch (error) {
      reject(error)
    }
  })
}

export const getContato = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "contato"));
      let dadosc = []
      querySnapshot.forEach((doc) => {
        dadosc.push({
          id: doc.id,
          email: doc.data().email,
          assunto: doc.data().assunto,
          descricaoc: doc.data().descricaoc,
        })
      });
      resolve(dadosc)
    } catch (error) {
      reject(error)
    }
  })
}

export const isAuthenticated = () => storageGet("TOKEN_KEY") !== null;
export const getToken = () => storageGet("TOKEN_KEY")