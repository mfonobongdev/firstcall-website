import cx from 'clsx'
export enum space {
  small,
  default,
  large
}
type spacerProps = {
  amount?: space
}
export const Spacer = ({ amount = space.default }: spacerProps): JSX.Element => {
  return (
    <div
      className={cx({
        'my-[5px] md:my-[10px]': amount === space.small,
        'my-[30px] md:my-[40px]': amount === space.default,
        'my-[50px] md:my-[60px]': amount === space.large
      })}
    />
  )
}
