import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  totalSteps: number
  currentStep?: number
}

export function MultiStep({ totalSteps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {totalSteps}
      </Label>

      <Steps css={{ '--total-steps': totalSteps }}>
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
