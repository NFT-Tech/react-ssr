import { useRouter } from "next/router"
import Button from 'react-bootstrap/Button';
import style from 'styles/Home.module.css'

export default function Example(){
  const router = useRouter()

  const handleReroute = (url) =>{
    router.push(url)
  } 

  return(
    <>
      <Button onClick={() =>handleReroute("example/csr")} className={style["main--buttons"]}>NextJs CSR Example</Button>
      <Button onClick={() =>handleReroute("example/ssr")} className={style["main--buttons"]}>NextJs SSR Example</Button>
      <Button onClick={() =>handleReroute("example/ssg")} className={style["main--buttons"]}>NextJs SSG Example</Button>
    </>
  )
}