import Link from "next/link";
import MotionBox from 'components/MotionBox';
import sd from 'styles/Logo.module.sass'

const Heading = (props: {text: string, delay: number}) => {
  return <MotionBox animate={{
    bottom: [14, -6, 8, 0],
    opacity: 1
  }}
  style={{
    position: 'relative',
    opacity: 0,
  }}
  transition={{
    duration: 1.6,
    delay: props.delay,
    repeat: Infinity,
    repeatDelay: 8
  }}
  >
    <h2>{props.text}</h2>
  </MotionBox>
}

export default function Logo() {
  return (
    <div className={sd.logo}>
      <img src="/logo.svg" />
        <Link href="/">
        <div        
         style={{
          display: "flex",
          gap: '8px',
          paddingLeft: '10px'      
        }}>
            <Heading text="Huawei" delay={0.5}/>
            <Heading text="OJ" delay={0.9}/>
        </div>
        </Link>
    </div>
  );
}
