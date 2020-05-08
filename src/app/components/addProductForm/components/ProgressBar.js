import { memo, useCallback, useState, useEffect } from 'react'
import {
  StyledProgressBar,
  Step,
  StepText,
  StepIconButton,
  ProgressBarContainer,
  ErrorMsg,
  ErrorIcon
} from '../style';
import InformationSvg from '../../../svgs/information';
import ColorsSvg from '../../../svgs/colors';
import PriceSvg from '../../../svgs/price';
import errorIcon from '../../../img/error.svg';
import time from '../../../shared/time';

const steps = [
  { text: 'information',              Icon: InformationSvg },
  { text: 'colors\u00A0&\u00A0sizes', Icon: ColorsSvg },
  { text: 'price',                    Icon: PriceSvg }
];

const ProgressBar = ({ activeStep, setActiveStep, finishedStep }) => {
  const [ error, setError ] = useState(false);

  const handleStepClick = useCallback((event, step) => {
    console.log('handleStepClick');
    console.log('step: ', step, 'finishedStep: ', finishedStep);
    event.preventDefault();

    if ((step - finishedStep) <= 1) {
      setActiveStep(step);
    } else {
      setError(true);
    }
  }, [ finishedStep ]);

  useEffect(() => {
    if (error) {
      setTimeout(function hideErrorMsg() {
        setError(false);
      }, time.delay.errorMsg);
    }
  }, [ error ])

  return (
    <ProgressBarContainer>
      <StyledProgressBar>
        {
          steps.map(({ text, Icon }, index) => (
            <Step 
              key={text} 
              data-opened={activeStep >= index+1}
            >
              <StepIconButton
                type="button"
                onClick={(event) => handleStepClick(event, index+1)}
                className="progressbar__iconContainer"
                onMouseDown={event => event.preventDefault()}
              >
                <Icon />
              </StepIconButton>
              <StepText>{text}</StepText>
            </Step>
          ))
        }
      </StyledProgressBar>

      {error && <ErrorMsg className="progressbar__errMsg" role="alert">
        You have to finish this step first
        <ErrorIcon src={errorIcon} alt="" />
      </ErrorMsg>}
    </ProgressBarContainer>
  );
}

export default memo(ProgressBar);