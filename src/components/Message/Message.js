

const Message = () => {

  const hideNotebook = () => {
    console.log('clicked hidenotebook')
  }

    return (
    <div className="notebook">
          <div className="page left">
            {" "}
            <div className="notebook-dismiss" onClick={hideNotebook}>
              Close X
            </div>
            <div className="screen-title">ULTRA SECRET NOTES</div>
            <div>Computer password (Missy Elliot encrypted):</div>
            <div className="missy">12345drowssap</div>
            <div>
              In case I get amnesia and forget who I am: <br />
              I'm Jordan Davis, a full stack react/react-native developer. I
              mostly work in react native, but I also like to build things with
              react-three-fiber, vite, zustand, react-spring, use-sound, drei,
              and typescript.
            </div>
            <div>
              <div>
                My email address:
                <a href="mailto:jordan@jordandavis.ca?subject=I want to give you money for no reason!">
                  {" "}
                  jordan@jordandavis.ca
                </a>
              </div>
              My tweeter:<a href="https://twitter.com/jrdndvs">@jrdndvs</a>
              <div>Remember: You can do it!</div>
            </div>
          </div>
          <div className="pageMiddle"></div>
          <div className="page right">
            Asset credits.
            <div className="license-title">Things by me:</div>
            <div className="license-text">
              Music and sound effects built on an OP-1. Autonomous chair,
              autonomous desk, speakers, puzzle box, shelves, room, deskmat,
              etc. modeled in blender, I will post some of them to sketchfab at
              some point.
            </div>
          </div>
        </div>
    )
}


export default Message;