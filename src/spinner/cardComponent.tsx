
interface Props {
    imgSrc?:string,
    title:string,
    description:string,
}
export function CardComponent(props:Props) {
    return (
        <div className="spinnerCard">
            
            if (props.imgSrc) {
                <div className="cardImage">
                    <img src={props.imgSrc&&props.imgSrc} alt="" />
                </div>    
            }
            
        </div>
    )
}