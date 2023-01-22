import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-lime-800 font-semibold text-stone-100 hover:bg-lime-700 active:bg-lime-800 active:text-stone-100/70 dark:bg-lime-700 dark:hover:bg-lime-600 dark:active:bg-lime-700 dark:active:text-stone-100/70',
  secondary:
    'bg-lime-50 font-medium text-stone-900 hover:bg-lime-100 active:bg-lime-100 active:text-stone-900/60 dark:bg-lime-800/50 dark:text-stone-300 dark:hover:bg-lime-800 dark:hover:text-stone-50 dark:active:bg-lime-800/50 dark:active:text-stone-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
