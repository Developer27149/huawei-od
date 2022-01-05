import MotionBox from 'components/MotionBox';

export default function MotionShareBox() {
  return (
    <MotionBox
        style={{
          width: 36,
          height: 36,
          background: "#eee",
          borderRadius: "50%",
          opacity: 0.2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1, 0.95],
        }}
      >
        <MotionBox
          style={{
            width: 29,
            height: 29,
            background: "#fff",
            borderRadius: "50%",
            opacity: 0.2,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.95, 1, 0.95],
          }}
        ></MotionBox>
      </MotionBox>
  )
}
