const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }} />
)


const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0
    }} />
)

const RIGHTARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }} />
)


const LEFTARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }} />
)

const RIGHTLEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)


const LEFTLEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }} />
)

 const BODYPARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG]


type HangmanDrawingProps= {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
    return (
        <div style={{position: "relative"}}>
            {BODYPARTS.slice(0, numberOfGuesses)}
          <div style={{width: "10px", height: "50px", background: "black", position: "absolute", top:"0", right:"0"}} />
           <div style={{width: "200px", height: "10px", marginLeft: "120px", background: "black"}} />
           <div style={{height: "400px", width: "10px", background: "black", marginLeft:"120px"}}/>
            <div style={{height: "10px", width: "250px", background: "black"}} />
        </div>
    )
}