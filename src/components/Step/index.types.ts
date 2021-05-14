import { ShardStepProps } from '../Steps/index.types'

export interface StepProps {
  style?: Record<string, string | number>
  className?: string
  parent?: ShardStepProps
  index?: number
  children?: React.ReactNode | React.ReactNode[]
}
