import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlKUN0gHeaYQ67L_AzQXJajXaDXLwHZYA",
  authDomain: "constructorespositivos-1a342.firebaseapp.com",
  projectId: "constructorespositivos-1a342",
  storageBucket: "constructorespositivos-1a342.appspot.com",
  messagingSenderId: "60019900085",
  appId: "1:60019900085:web:f7089a8276ec8a106448fc",
  measurementId: "G-SP58WMTJS1"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export const uploadImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`images/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("images")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadNoticiaImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`noticia/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("noticia")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadEspecialistaImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`especialista/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("especialista")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadPromotorImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`promotor/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("promotor")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadProyectoLogoImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`promotor/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("promotor")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadProyectoImage = (id, file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`proyecto/${id}/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("proyecto")
          .child(`${id}`)
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadInsumoImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`proveedor/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("proveedor")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadLeadImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`leadSustentable/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("leadSustentable")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadBannerImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`banner/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("el documento esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("banner")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};

export const uploadDocument = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`cifrasConstruccion/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("cifrasConstruccion")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};


export const uploadDocumentDp = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`datosPromotor/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("el documento esta subiendo", snapshot),
      eject,
      () => {
        console.log("enterD", file);
        storage
          .ref("datosPromotor")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};


export const uploadAcuerdosImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`acuerdos/${id}/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        storage
          .ref("acuerdos")
          .child(`${id}`)
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};
