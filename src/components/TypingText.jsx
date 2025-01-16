import Typewriter from "typewriter-effect";

const TypingText = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Develop",
                    "Design",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default TypingText