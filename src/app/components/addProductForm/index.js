import { memo, useState, useCallback, useContext } from 'react'
import {
  Form,
  Title,
  FormContainer
} from './style';
import Information from './components/information'; 
import ProgressBar from './components/ProgressBar';
import ColorsAndSizes from './components/colorsAndSizes';
import Price from './components/price';
import { AuthContext } from '../../contexts/auth';
import { addProduct } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const AddProductForm = () => {
  const { uid: sellerId } = useContext(AuthContext);
  const dispatch = useDispatch();

  // Inputs
  const [ productName, setProductName ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ subCategory, setSubCategory ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ colors, setColors ] = useState([
    { value: '', sizes: [], images: [] }
  ]);
  const [ price, setPrice ] = useState('');
  const [ salePrice, setSalePrice ] = useState('');

  const product = { productName, category, subCategory, description, colors, price };
  
  // Active step
  const [ activeStep, setActiveStep ] = useState(1);
  console.log('activeStep: ', activeStep);

  const handleStepSubmit = useCallback((event, disabled) => {  
    console.log('handleStepSubmit'); 
    console.log('disabled: ', disabled); 
    if (!disabled) {
      event.preventDefault();
      setActiveStep(activeStep + 1);
    }
  }, [ activeStep ]);

  const goToPreviousStep = useCallback(() => {
    console.log('goToPreviousStep');
    setActiveStep(activeStep - 1);
  }, [ activeStep ]);

  const finishedStep1 = productName && category && subCategory && description;
  const finishedStep2 = colors[0].value && colors[0].sizes.length && colors[0].images.length;
  const finishedStep3 = price;

  const finishedStep = (
    finishedStep3 ? 3 :
    finishedStep2 ? 2 :
    finishedStep1 ? 1 :
    0
  ); 

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    // if (finishedStep !== 3) return;

    console.log('product: ', product);
    dispatch(addProduct(sellerId, product))
  }, [ finishedStep ])
    
  return (
    <Form onSubmit={handleFormSubmit}>
      <Title>Add Product</Title>

      <ProgressBar 
        activeStep={activeStep} 
        setActiveStep={setActiveStep}
        finishedStep={finishedStep}
      />

      <FormContainer data-full-page={activeStep === 2}>
        {
          activeStep === 1 ?
          <Information 
            productName={productName}
            setProductName={setProductName}
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            description={description}
            setDescription={setDescription}
            setActiveStep={activeStep}
            onStepSubmit={handleStepSubmit}
          /> :
          activeStep === 2 ?
          <ColorsAndSizes 
            colors={colors}
            setColors={setColors}
            onStepSubmit={handleStepSubmit}
            goToPreviousStep={goToPreviousStep}
          /> :
          <Price 
            price={price}
            setPrice={setPrice}
            salePrice={salePrice}
            setSalePrice={setSalePrice}
            goToPreviousStep={goToPreviousStep}
            onSubmit={handleFormSubmit}
          />
        }
      </FormContainer>
    </Form>
  );
}

export default memo(AddProductForm);