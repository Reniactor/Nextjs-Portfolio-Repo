const Card = (props) => {
    return (
        <div className="flex flex-col items-center h-32 border-solid border-color10 mb-16">
            <h1 className="font-RobotoSerif text-xl font-light mb-3 text-color10">{props.name}</h1>
            <div className="grid grid-cols-2 grid-rows-1 items-center">
                <span>{props.icon}</span>
                <p className="font-OpenSans text-sm font-medium">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;