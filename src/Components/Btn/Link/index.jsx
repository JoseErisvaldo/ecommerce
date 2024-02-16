import { Link as RouterLink  } from "react-router-dom"

export default function CustomLink ({to,dados}) {
  return(
    <>
     <RouterLink to={to}>
      {dados}
    </RouterLink>
    </>
  )
}