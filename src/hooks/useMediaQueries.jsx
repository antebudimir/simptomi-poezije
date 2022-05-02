import { useMediaQuery } from "react-responsive"

const useMediaQueries = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 }),
    isMobile = useMediaQuery({ maxWidth: 1023 }),
    isDesktop = useMediaQuery({ minWidth: 1024 })

  return { isSmall, isMobile, isDesktop }
}

export default useMediaQueries
