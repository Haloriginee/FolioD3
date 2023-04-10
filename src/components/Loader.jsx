import { Html, useProgress } from '@react-three/drei';

const Loader = () => {

  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-loader'>
        <p
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            marginTop: 40
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader
