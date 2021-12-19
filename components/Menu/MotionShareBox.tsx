import MotionBox from 'components/MotionBox';

export default function MotionShareBox() {
  return (
    <MotionBox
        style={{
          width: 36,
          height: 36,
          background: "#99aabb",
          borderRadius: "50%",
          opacity: 0.2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
      >
        <MotionBox
          style={{
            width: 28,
            height: 28,
            background: "#eee",
            borderRadius: "50%",
            opacity: 0.2,
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
        ></MotionBox>
      </MotionBox>
  )
}
