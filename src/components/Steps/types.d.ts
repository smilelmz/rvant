export type StepsDirection = 'horizontal' | 'vertical'

export type ShardStepProps = {
  active?: string | number
  iconPrefix?: string
  finishIcon?: string | React.ReactNode | React.ReactNode[]
  activeColor?: string
  inactiveIcon?: string | React.ReactNode | React.ReactNode[]
  inactiveColor?: string
  direction?: StepsDirection
  activeIcon?: string | React.ReactNode | React.ReactNode[]
  clickStep?: (index: number) => void
}

export type StepsProps = ShardStepProps &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'>
