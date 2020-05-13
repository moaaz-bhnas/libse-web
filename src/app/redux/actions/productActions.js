function uuidGenerator() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const uploadProductToFirestore = async (firestore, dispatch, sellerId, product) => {
  const { productName, category, subCategory, description, colors, price } = product;
  
  firestore.collection('products').doc().set({
    seller_id: sellerId,
    name: productName,
    category,
    sub_category: subCategory,
    description,
    colors,
    price
  }).then(() => {
    dispatch({ type: 'ADD_PRODUCT_SUCCESS' });
  }).catch(err => {
    dispatch({ type: 'ADD_PRODUCT_ERROR', err });
  });
};

export const addProduct = (sellerId, product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const { colors } = product;
    const firebase = getFirebase();
    const firestore = getFirestore();

    const uploadImage = (lastColor, lastImage, imageIndex, imagesArray, file) => {
      const uuid = uuidGenerator();
      const fileExtenstion = file.name.split('.')[1];
      const storageRef = firebase.storage().ref(`products/${uuid}.${fileExtenstion}`);
      const task = storageRef.put(file);
      task.on('state_changed', 
        function progress(snapshot) {
          const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          storageRef.getDownloadURL().then(url => {
            imagesArray[imageIndex] = url;
            
            if (lastColor && lastImage) uploadProductToFirestore(firestore, dispatch, sellerId, product); 
          })
        }
      )
    }

    // const downloadURLs = [];
    (function uploadImages() {
      colors.forEach((color, colorIndex, colorsArray) => {
        const { images } = color;

        images.forEach((image, imageIndex, imagesArray) => {
          const lastColor = (colorIndex === colorsArray.length-1);
          const lastImage = (imageIndex === imagesArray.length-1);

          const { file } = image;

          uploadImage(lastColor, lastImage, imageIndex, imagesArray, file);
        })
      })
    })();
  }
}