import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  nameInitials: string
}

export function Avatar({ nameInitials, ...props }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>{nameInitials}</AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
