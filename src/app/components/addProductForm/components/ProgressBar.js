import { memo } from 'react'
import {
  StyledProgressBar,
  Step,
  StepText,
  StepIconContainer
} from '../style';
import InformationSvg from '../../../svgs/information';
import ColorsSvg from '../../../svgs/colors';
import ImagesSvg from '../../../svgs/images';
import PriceSvg from '../../../svgs/price';

const steps = [
  { text: 'information',              Icon: InformationSvg },
  { text: 'colors\u00A0&\u00A0sizes', Icon: ColorsSvg },
  { text: 'price',                    Icon: PriceSvg }
];

const ProgressBar = ({ activeStep }) => {
  console.log(activeStep);
  return (
    <StyledProgressBar
      role="progressbar"
      aria-valuenow="0" 
      aria-valuemin="0" 
      aria-valuemax="3"
    >
      {
        steps.map(({ text, Icon }, index) => (
          <Step 
            key={text} 
            data-finished={activeStep > index}
            data-active={activeStep === index}
          >
            <StepIconContainer className="progressbar__iconContainer">
              <Icon />
            </StepIconContainer>
            <StepText>{text}</StepText>
          </Step>
        ))
      }
    </StyledProgressBar>
  );
}

export default memo(ProgressBar);