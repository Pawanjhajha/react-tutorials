function Button(props){
    console.log(props)
    return(
        <>
        <button className="btn btn-primary" onClick={props.eventHandler}>{props.children}</button>
        </>
    )
}

export default Button;