import { useEffect, useRef, useState } from 'react'

export default function FadeImage({
  className = '',
  loading = 'lazy',
  alt = '',
  src,
  ...props
}) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    setOn(false)
    const el = ref.current
    if (el?.complete && el.naturalWidth > 0) setOn(true)
  }, [src])

  return (
    <img
      {...props}
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      className={`fade-img${on ? ' is-on' : ''} ${className}`.trim()}
      onLoad={() => setOn(true)}
    />
  )
}