import {useMemo} from "react"

export const School = ({upperY, lowerY, body, tail, amount, widthBoundaries, heightFactor, speedBoundaries}) => {
  const upperWidth = widthBoundaries[0];
  const lowerWidth = widthBoundaries[1];
  
  const upperSpeed = speedBoundaries[1];
  const lowerSpeed = speedBoundaries[0];

  const fish = Array.from({length : amount}).map((_, index) => {
      
      const stats = useMemo(() => {
          const width = Math.round(Math.random() * (upperWidth - lowerWidth)) + lowerWidth;
          return {

          top : Math.random() * (upperY - lowerY) + lowerY,
          left : Math.random() * (100 - 20) + 20,
          width : width,
          height : width * heightFactor,
          speed : Math.random() * (upperSpeed - lowerSpeed) + lowerSpeed
           
        };
      }, [])
      

      /**const isSlow = Math.round(Math.random());**/

      return (
      <div key = {index}
          className="absolute w-screen h-screen brightness-30"
          style = {{
            top: `${stats.top}%`,
            left: `${stats.left}%`,
          }}>
      
        <div className="animate-whole-fish-movement"
             style = {{
            "--duration": `${stats.speed}s`
          }}>
          
          <img src={body} alt="fish body" 
              className="absolute"
              style ={{
                width: `${stats.width}vw`,
                height: `${stats.height}vw`,
            }}
          />
          <img src={tail} alt="fish Tail"
              className="absolute animate-fish-tail-movement"
              style ={{
                width: `${stats.width}vw`,
                height: `${stats.height}vw`,
                "--tail-duration": `${stats.speed/7}s` 
            }}
          />
        </div>

      </div>
      )
    }); 

  return <div className ="absolute w-full h-full">{fish}</div>;
}
