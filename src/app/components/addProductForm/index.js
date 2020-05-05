import { memo, useState, useCallback } from 'react'
import {
  Form,
  Title,
  FormContainer
} from './style';
import Information from './components/information'; 
import ProgressBar from './components/ProgressBar';
import ColorsAndSizes from './components/colorsAndSizes';
import Price from './components/price';

const AddProductForm = () => {
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
  console.log('product: ', product);
  
  // Active step
  const [ activeStep, setActiveStep ] = useState(1);

  const handleStepSubmit = useCallback((event, disabled) => {   
    console.log('disabled: ', disabled); 
    if (!disabled) {
      event.preventDefault();
      setActiveStep(activeStep + 1);
    }
  }, [ activeStep ]);

  const goToPreviousStep = useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [ activeStep ])
    
  return (
    <Form>
      <Title>Add Product</Title>

      <ProgressBar activeStep={activeStep} />

      <FormContainer>
        {
          activeStep === 0 ?
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
          activeStep === 1 ?
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
            onStepSubmit={handleStepSubmit}
            goToPreviousStep={goToPreviousStep}
          />
        }
      </FormContainer>
    </Form>
  );
}

export default memo(AddProductForm);