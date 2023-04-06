const Card = (props) => {
    return (
        <div className="flex flex-col items-center h-32 border-solid border-color10 mb-16 min-[805px]:h-56">
            <h1 className="font-RobotoSerif text-xl font-light mb-3 text-color10 min-[805px]:text-3xl">{props.name}</h1>
            <div className="grid grid-cols-2 grid-rows-1 items-center max-w-lg max-[378px]:grid-cols-1 max-[378px]:grid-rows-none ">
                <span>{props.icon}</span>
                <p className="font-OpenSans text-sm font-medium min-[805px]:text-lg max-[414px]:text-xs max-[300px]:text-[0.6rem]">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;