type AvatarShape = 'square' | 'round'

export interface SkeletonProps {
  title?: boolean
  round?: boolean
  avatar?: boolean
  avatarSize?: number | string
  titleWidth?: number | string
  row?: number | string
  loading?: boolean
  animate?: boolean
  avatarShape?: AvatarShape
  rowWidth?: number | string | (number | string)[]
  children?: React.ReactElement
}
